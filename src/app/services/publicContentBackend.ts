import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { getFirestoreDb, isFirebaseConfigured } from "../lib/firebase";
import {
  publicResources,
  type PublicResource,
  type ResourceType,
} from "../data/resources";
import {
  helpArticles,
  type HelpArticle,
  type HelpSectionId,
} from "../data/helpCenter";

type PublicResourceStatus = PublicResource["status"];
type HelpArticleStatus = HelpArticle["status"];

const visibleBackendStatuses = new Set(["ready", "published"]);

function normaliseResourceType(value: unknown): ResourceType {
  const allowed: ResourceType[] = ["articles", "guides", "tools", "downloads", "educational"];
  return allowed.includes(value as ResourceType) ? (value as ResourceType) : "articles";
}

function normaliseResourceStatus(value: unknown): PublicResourceStatus {
  const allowed: PublicResourceStatus[] = [
    "ready",
    "placeholder",
    "content-required",
    "backend-later",
  ];

  if (value === "published") {
    return "ready";
  }

  return allowed.includes(value as PublicResourceStatus)
    ? (value as PublicResourceStatus)
    : "ready";
}

function normaliseHelpSection(value: unknown): HelpSectionId {
  const allowed: HelpSectionId[] = ["faqs", "knowledge-base", "troubleshooting", "support"];
  return allowed.includes(value as HelpSectionId) ? (value as HelpSectionId) : "faqs";
}

function normaliseHelpStatus(value: unknown): HelpArticleStatus {
  const allowed: HelpArticleStatus[] = [
    "ready",
    "placeholder",
    "content-required",
    "backend-later",
  ];

  if (value === "published") {
    return "ready";
  }

  return allowed.includes(value as HelpArticleStatus)
    ? (value as HelpArticleStatus)
    : "ready";
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" && value.trim() ? value : fallback;
}

function asOptionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function sortBySortOrderThenTitle<T extends { title?: string; question?: string }>(
  records: Array<T & { sortOrder?: number }>
) {
  return [...records].sort((a, b) => {
    const sortA = typeof a.sortOrder === "number" ? a.sortOrder : 0;
    const sortB = typeof b.sortOrder === "number" ? b.sortOrder : 0;

    if (sortA !== sortB) {
      return sortA - sortB;
    }

    const labelA = a.title ?? a.question ?? "";
    const labelB = b.title ?? b.question ?? "";

    return labelA.localeCompare(labelB);
  });
}

function normaliseResource(id: string, data: Record<string, unknown>): PublicResource & { sortOrder?: number } {
  return {
    id,
    title: asString(data.title, "Untitled Resource"),
    summary: asString(data.summary, "Resource summary required."),
    type: normaliseResourceType(data.type),
    category: asString(data.category, "other"),
    readTime: asOptionalString(data.readTime),
    href: asString(data.href, "/resources"),
    status: normaliseResourceStatus(data.status),
    sortOrder: typeof data.sortOrder === "number" ? data.sortOrder : 0,
  };
}

function normaliseHelpArticle(id: string, data: Record<string, unknown>): HelpArticle & { sortOrder?: number } {
  return {
    id,
    section: normaliseHelpSection(data.section),
    category: asString(data.category, "other"),
    question: asString(data.question, "Untitled help article"),
    answer: asString(data.answer, "Answer required."),
    status: normaliseHelpStatus(data.status),
    sortOrder: typeof data.sortOrder === "number" ? data.sortOrder : 0,
  };
}

function isVisibleRecord(data: Record<string, unknown>) {
  return visibleBackendStatuses.has(String(data.status ?? "ready"));
}

export async function listResourceRecords(options: { publicOnly?: boolean } = {}) {
  const db = getFirestoreDb();

  if (!db) {
    return publicResources;
  }

  try {
    const snapshot = await getDocs(collection(db, "resources"));
    const records = snapshot.docs
      .map((documentSnapshot) => {
        const data = documentSnapshot.data();

        if (options.publicOnly !== false && !isVisibleRecord(data)) {
          return null;
        }

        if (String(data.status ?? "") === "archived") {
          return null;
        }

        return normaliseResource(documentSnapshot.id, data);
      })
      .filter(Boolean) as Array<PublicResource & { sortOrder?: number }>;

    return sortBySortOrderThenTitle(records);
  } catch (error) {
    console.warn("Falling back to static resources after Firestore read failed.", error);
    return publicResources;
  }
}

export async function listHelpArticleRecords(options: { publicOnly?: boolean } = {}) {
  const db = getFirestoreDb();

  if (!db) {
    return helpArticles;
  }

  try {
    const snapshot = await getDocs(collection(db, "helpArticles"));
    const records = snapshot.docs
      .map((documentSnapshot) => {
        const data = documentSnapshot.data();

        if (options.publicOnly !== false && !isVisibleRecord(data)) {
          return null;
        }

        if (String(data.status ?? "") === "archived") {
          return null;
        }

        return normaliseHelpArticle(documentSnapshot.id, data);
      })
      .filter(Boolean) as Array<HelpArticle & { sortOrder?: number }>;

    return sortBySortOrderThenTitle(records);
  } catch (error) {
    console.warn("Falling back to static help articles after Firestore read failed.", error);
    return helpArticles;
  }
}

export async function saveResourceRecord(record: PublicResource) {
  const db = getFirestoreDb();

  if (!db) {
    return record;
  }

  await setDoc(
    doc(db, "resources", record.id),
    {
      ...record,
      slug: record.id,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  return record;
}

export async function saveHelpArticleRecord(record: HelpArticle) {
  const db = getFirestoreDb();

  if (!db) {
    return record;
  }

  await setDoc(
    doc(db, "helpArticles", record.id),
    {
      ...record,
      slug: record.id,
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );

  return record;
}

export async function archiveResourceRecord(id: string) {
  const db = getFirestoreDb();

  if (!db) {
    return;
  }

  await updateDoc(doc(db, "resources", id), {
    status: "archived",
    archivedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function archiveHelpArticleRecord(id: string) {
  const db = getFirestoreDb();

  if (!db) {
    return;
  }

  await updateDoc(doc(db, "helpArticles", id), {
    status: "archived",
    archivedAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

export async function seedStaticResourcesToFirestore() {
  const db = getFirestoreDb();

  if (!db) {
    return {
      enabled: false,
      count: 0,
    };
  }

  await Promise.all(
    publicResources.map((resource, index) =>
      setDoc(
        doc(db, "resources", resource.id),
        {
          ...resource,
          slug: resource.id,
          sortOrder: index + 1,
          seededFrom: "src/app/data/resources.ts",
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
    )
  );

  return {
    enabled: true,
    count: publicResources.length,
  };
}

export async function seedStaticHelpArticlesToFirestore() {
  const db = getFirestoreDb();

  if (!db) {
    return {
      enabled: false,
      count: 0,
    };
  }

  await Promise.all(
    helpArticles.map((article, index) =>
      setDoc(
        doc(db, "helpArticles", article.id),
        {
          ...article,
          slug: article.id,
          sortOrder: index + 1,
          seededFrom: "src/app/data/helpCenter.ts",
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      )
    )
  );

  return {
    enabled: true,
    count: helpArticles.length,
  };
}

export { isFirebaseConfigured };
