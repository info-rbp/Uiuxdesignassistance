import { useMemo, useState } from "react";
import { useLocation } from "react-router";
import { Edit3, HelpCircle, Plus, Save, Trash2, X } from "lucide-react";

import {
  publicResources,
  resourceCategoryFilters,
  resourceTypeFilters,
  type PublicResource,
  type ResourceType,
} from "../../data/resources";

import {
  helpArticles,
  helpCategories,
  helpSections,
  type HelpArticle,
  type HelpSectionId,
} from "../../data/helpCenter";

import { AdminEmptyState } from "./AdminEmptyState";
import { AdminFormShell } from "./AdminFormShell";
import { AdminStatusBadge } from "./AdminStatusBadge";
import { AdminTable, type AdminTableColumn } from "./AdminTable";

type ResourceDraft = Pick<
  PublicResource,
  "title" | "summary" | "type" | "category" | "readTime" | "href" | "status"
>;

type HelpDraft = Pick<
  HelpArticle,
  "question" | "answer" | "section" | "category" | "status"
>;

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function createResourceDraft(): ResourceDraft {
  return {
    title: "",
    summary: "",
    type: "articles",
    category: "operations",
    readTime: "",
    href: "/resources",
    status: "ready",
  };
}

function createHelpDraft(): HelpDraft {
  return {
    question: "",
    answer: "",
    section: "faqs",
    category: "other",
    status: "ready",
  };
}

const inputClass =
  "w-full border border-slate-200 bg-white text-slate-900 text-sm px-3 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

function MockNotice() {
  return (
    <div className="rounded-2xl border border-amber-100 bg-amber-50 p-4 text-sm text-amber-800">
      <strong>Local mock state only.</strong> Changes stay in browser memory and reset on refresh. Backend persistence comes later, because apparently data needs somewhere to live.
    </div>
  );
}

function ResourceMockCrud() {
  const [records, setRecords] = useState<PublicResource[]>(publicResources);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<ResourceDraft>(createResourceDraft());

  const editingRecord = useMemo(
    () => records.find((record) => record.id === editingId) ?? null,
    [records, editingId]
  );

  function resetForm() {
    setEditingId(null);
    setDraft(createResourceDraft());
  }

  function startEdit(record: PublicResource) {
    setEditingId(record.id);
    setDraft({
      title: record.title,
      summary: record.summary,
      type: record.type,
      category: record.category,
      readTime: record.readTime ?? "",
      href: record.href,
      status: record.status,
    });
  }

  function saveRecord() {
    if (!draft.title.trim() || !draft.summary.trim()) return;

    if (editingRecord) {
      setRecords((current) =>
        current.map((record) =>
          record.id === editingRecord.id
            ? {
                ...record,
                ...draft,
                id: record.id,
                href: draft.href || "/resources",
              }
            : record
        )
      );
    } else {
      const id = slugify(draft.title) || `resource-${Date.now()}`;
      setRecords((current) => [
        ...current,
        {
          id,
          ...draft,
          href: draft.href || "/resources",
        },
      ]);
    }

    resetForm();
  }

  function deleteRecord(id: string) {
    setRecords((current) => current.filter((record) => record.id !== id));
    if (editingId === id) resetForm();
  }

  const columns: AdminTableColumn<PublicResource>[] = [
    {
      key: "title",
      header: "Resource",
      render: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.title}</div>
          <div className="text-xs text-slate-500 mt-1">{row.summary}</div>
        </div>
      ),
    },
    {
      key: "type",
      header: "Type",
      render: (row) => <AdminStatusBadge label={row.type} status="ready" />,
    },
    {
      key: "category",
      header: "Category",
      render: (row) => <span className="text-slate-600">{row.category}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <AdminStatusBadge label={row.status} status={row.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => startEdit(row)}
            className="p-2 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
            title="Edit resource"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteRecord(row.id)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-all"
            title="Delete resource"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-sm font-extrabold text-slate-900">Mock Resource Records</h2>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, and delete resource records in local component state.
          </p>
        </div>
        <AdminTable rows={records} columns={columns} />
      </div>

      <AdminFormShell
        title={editingRecord ? "Edit Resource" : "Create Resource"}
        description="Local mock form for resources. This previews future admin behaviour without backend persistence."
        footer={
          <div className="flex items-center gap-2">
            <button
              onClick={resetForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
            <button
              onClick={saveRecord}
              disabled={!draft.title.trim() || !draft.summary.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 disabled:opacity-40 transition-all"
            >
              {editingRecord ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {editingRecord ? "Save Mock Edit" : "Add Mock Resource"}
            </button>
          </div>
        }
      >
        <MockNotice />

        <Field label="Title">
          <input
            className={inputClass}
            value={draft.title}
            onChange={(event) => setDraft((current) => ({ ...current, title: event.target.value }))}
            placeholder="Example Resource Title"
          />
        </Field>

        <Field label="Summary">
          <textarea
            className={inputClass}
            value={draft.summary}
            onChange={(event) => setDraft((current) => ({ ...current, summary: event.target.value }))}
            placeholder="Short resource summary"
            rows={4}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Type">
            <select
              className={inputClass}
              value={draft.type}
              onChange={(event) =>
                setDraft((current) => ({ ...current, type: event.target.value as ResourceType }))
              }
            >
              {resourceTypeFilters.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Category">
            <select
              className={inputClass}
              value={draft.category}
              onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}
            >
              {resourceCategoryFilters.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Read Time">
          <input
            className={inputClass}
            value={draft.readTime ?? ""}
            onChange={(event) => setDraft((current) => ({ ...current, readTime: event.target.value }))}
            placeholder="10 min read"
          />
        </Field>
      </AdminFormShell>
    </section>
  );
}

function HelpCenterMockCrud() {
  const [records, setRecords] = useState<HelpArticle[]>(helpArticles);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState<HelpDraft>(createHelpDraft());

  const editingRecord = useMemo(
    () => records.find((record) => record.id === editingId) ?? null,
    [records, editingId]
  );

  function resetForm() {
    setEditingId(null);
    setDraft(createHelpDraft());
  }

  function startEdit(record: HelpArticle) {
    setEditingId(record.id);
    setDraft({
      question: record.question,
      answer: record.answer,
      section: record.section,
      category: record.category,
      status: record.status,
    });
  }

  function saveRecord() {
    if (!draft.question.trim() || !draft.answer.trim()) return;

    if (editingRecord) {
      setRecords((current) =>
        current.map((record) =>
          record.id === editingRecord.id
            ? {
                ...record,
                ...draft,
              }
            : record
        )
      );
    } else {
      const id = slugify(draft.question) || `help-${Date.now()}`;
      setRecords((current) => [
        ...current,
        {
          id,
          ...draft,
        },
      ]);
    }

    resetForm();
  }

  function deleteRecord(id: string) {
    setRecords((current) => current.filter((record) => record.id !== id));
    if (editingId === id) resetForm();
  }

  const columns: AdminTableColumn<HelpArticle>[] = [
    {
      key: "question",
      header: "Question",
      render: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.question}</div>
          <div className="text-xs text-slate-500 mt-1 line-clamp-2">{row.answer}</div>
        </div>
      ),
    },
    {
      key: "section",
      header: "Section",
      render: (row) => <AdminStatusBadge label={row.section} status="ready" />,
    },
    {
      key: "category",
      header: "Category",
      render: (row) => <span className="text-slate-600">{row.category}</span>,
    },
    {
      key: "status",
      header: "Status",
      render: (row) => <AdminStatusBadge label={row.status} status={row.status} />,
    },
    {
      key: "actions",
      header: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => startEdit(row)}
            className="p-2 rounded-lg text-slate-400 hover:text-blue-700 hover:bg-blue-50 transition-all"
            title="Edit help article"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteRecord(row.id)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-all"
            title="Delete help article"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6">
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100">
          <h2 className="text-sm font-extrabold text-slate-900">Mock Help Center Records</h2>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, and delete help content in local component state.
          </p>
        </div>
        <AdminTable rows={records} columns={columns} />
      </div>

      <AdminFormShell
        title={editingRecord ? "Edit Help Article" : "Create Help Article"}
        description="Local mock form for FAQs, knowledge base entries, troubleshooting items, and support guidance."
        footer={
          <div className="flex items-center gap-2">
            <button
              onClick={resetForm}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <X className="w-4 h-4" />
              Clear
            </button>
            <button
              onClick={saveRecord}
              disabled={!draft.question.trim() || !draft.answer.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 disabled:opacity-40 transition-all"
            >
              {editingRecord ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {editingRecord ? "Save Mock Edit" : "Add Mock Help Article"}
            </button>
          </div>
        }
      >
        <MockNotice />

        <Field label="Question">
          <input
            className={inputClass}
            value={draft.question}
            onChange={(event) => setDraft((current) => ({ ...current, question: event.target.value }))}
            placeholder="Example help question?"
          />
        </Field>

        <Field label="Answer">
          <textarea
            className={inputClass}
            value={draft.answer}
            onChange={(event) => setDraft((current) => ({ ...current, answer: event.target.value }))}
            placeholder="Answer content"
            rows={4}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Section">
            <select
              className={inputClass}
              value={draft.section}
              onChange={(event) =>
                setDraft((current) => ({ ...current, section: event.target.value as HelpSectionId }))
              }
            >
              {helpSections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Category">
            <select
              className={inputClass}
              value={draft.category}
              onChange={(event) => setDraft((current) => ({ ...current, category: event.target.value }))}
            >
              {helpCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </AdminFormShell>
    </section>
  );
}

export function AdminMockCrudWorkspace() {
  const location = useLocation();

  if (location.pathname.startsWith("/admin/resources")) {
    return <ResourceMockCrud />;
  }

  if (location.pathname.startsWith("/admin/help-center")) {
    return <HelpCenterMockCrud />;
  }

  return (
    <AdminFormShell
      title="Local Mock CRUD"
      description="This route is not enabled for local mock CRUD yet."
    >
      <AdminEmptyState
        icon={HelpCircle}
        title="Mock CRUD not enabled for this section"
        description="Resources and Help Center are enabled first because they are low-risk content areas. Commercial, membership, marketplace, and legal workflows come later, because chaos deserves a queue."
      />
    </AdminFormShell>
  );
}
