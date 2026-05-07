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

import {
  applicationCategories,
  type ApplicationCategory,
} from "../../data/applications";

import {
  onDemandServices,
  type OnDemandService,
} from "../../data/onDemandServices";

import {
  managedServices,
  type ManagedService,
} from "../../data/managedServices";

import { useAdminLocalCrud } from "../../hooks/useAdminLocalCrud";

import { AdminEmptyState } from "./AdminEmptyState";
import { AdminFormShell } from "./AdminFormShell";
import { AdminStatusBadge } from "./AdminStatusBadge";
import { AdminTable, type AdminTableColumn } from "./AdminTable";

type ContentStatus = "ready" | "placeholder" | "content-required" | "backend-later";

type ResourceDraft = Pick<
  PublicResource,
  "title" | "summary" | "type" | "category" | "readTime" | "href" | "status"
>;

type HelpDraft = Pick<
  HelpArticle,
  "question" | "answer" | "section" | "category" | "status"
>;

type ApplicationDraft = Pick<
  ApplicationCategory,
  "title" | "summary" | "href" | "status"
>;

interface AdminServiceRecord {
  id: string;
  title: string;
  summary: string;
  href: string;
  category: string;
  serviceType: "on-demand" | "managed";
  linkType: "route" | "anchor";
  status: ContentStatus;
}

type ServiceDraft = Pick<
  AdminServiceRecord,
  "title" | "summary" | "href" | "category" | "serviceType" | "linkType" | "status"
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

function createApplicationDraft(): ApplicationDraft {
  return {
    title: "",
    summary: "",
    href: "/applications",
    status: "ready",
  };
}

function createServiceDraft(): ServiceDraft {
  return {
    title: "",
    summary: "",
    href: "/on-demand",
    category: "operations",
    serviceType: "on-demand",
    linkType: "route",
    status: "ready",
  };
}

function createServiceRecords(): AdminServiceRecord[] {
  const onDemandRecords: AdminServiceRecord[] = onDemandServices.map((service: OnDemandService) => ({
    id: service.id,
    title: service.title,
    summary: service.summary,
    href: service.href,
    category: service.category,
    serviceType: "on-demand",
    linkType: "route",
    status: service.status,
  }));

  const managedRecords: AdminServiceRecord[] = managedServices.map((service: ManagedService) => ({
    id: service.id,
    title: service.title,
    summary: service.summary,
    href: service.href,
    category: "operations",
    serviceType: "managed",
    linkType: service.type,
    status: service.status,
  }));

  return [...onDemandRecords, ...managedRecords];
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
  const {
    records,
    draft,
    editingRecord,
    canSave,
    updateDraft,
    resetForm,
    startEdit,
    saveRecord,
    deleteRecord,
  } = useAdminLocalCrud<PublicResource, ResourceDraft>({
    initialRecords: publicResources,
    createDraft: createResourceDraft,
    toDraft: (record) => ({
      title: record.title,
      summary: record.summary,
      type: record.type,
      category: record.category,
      readTime: record.readTime ?? "",
      href: record.href,
      status: record.status,
    }),
    fromDraft: (currentDraft, existingRecord) => ({
      id: existingRecord?.id ?? (slugify(currentDraft.title) || `resource-${Date.now()}`),
      ...currentDraft,
      href: currentDraft.href || "/resources",
    }),
    validateDraft: (currentDraft) =>
      Boolean(currentDraft.title.trim() && currentDraft.summary.trim()),
  });

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
              disabled={!canSave}
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
            onChange={(event) => updateDraft({ title: event.target.value })}
            placeholder="Example Resource Title"
          />
        </Field>

        <Field label="Summary">
          <textarea
            className={inputClass}
            value={draft.summary}
            onChange={(event) => updateDraft({ summary: event.target.value })}
            placeholder="Short resource summary"
            rows={4}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Type">
            <select
              className={inputClass}
              value={draft.type}
              onChange={(event) => updateDraft({ type: event.target.value as ResourceType })}
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
              onChange={(event) => updateDraft({ category: event.target.value })}
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
            onChange={(event) => updateDraft({ readTime: event.target.value })}
            placeholder="10 min read"
          />
        </Field>
      </AdminFormShell>
    </section>
  );
}

function HelpCenterMockCrud() {
  const {
    records,
    draft,
    editingRecord,
    canSave,
    updateDraft,
    resetForm,
    startEdit,
    saveRecord,
    deleteRecord,
  } = useAdminLocalCrud<HelpArticle, HelpDraft>({
    initialRecords: helpArticles,
    createDraft: createHelpDraft,
    toDraft: (record) => ({
      question: record.question,
      answer: record.answer,
      section: record.section,
      category: record.category,
      status: record.status,
    }),
    fromDraft: (currentDraft, existingRecord) => ({
      id: existingRecord?.id ?? (slugify(currentDraft.question) || `help-${Date.now()}`),
      ...currentDraft,
    }),
    validateDraft: (currentDraft) =>
      Boolean(currentDraft.question.trim() && currentDraft.answer.trim()),
  });

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
              disabled={!canSave}
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
            onChange={(event) => updateDraft({ question: event.target.value })}
            placeholder="Example help question?"
          />
        </Field>

        <Field label="Answer">
          <textarea
            className={inputClass}
            value={draft.answer}
            onChange={(event) => updateDraft({ answer: event.target.value })}
            placeholder="Answer content"
            rows={4}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Section">
            <select
              className={inputClass}
              value={draft.section}
              onChange={(event) => updateDraft({ section: event.target.value as HelpSectionId })}
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
              onChange={(event) => updateDraft({ category: event.target.value })}
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

function ApplicationMockCrud() {
  const {
    records,
    draft,
    editingRecord,
    canSave,
    updateDraft,
    resetForm,
    startEdit,
    saveRecord,
    deleteRecord,
  } = useAdminLocalCrud<ApplicationCategory, ApplicationDraft>({
    initialRecords: applicationCategories,
    createDraft: createApplicationDraft,
    toDraft: (record) => ({
      title: record.title,
      summary: record.summary,
      href: record.href,
      status: record.status,
    }),
    fromDraft: (currentDraft, existingRecord) => ({
      id: existingRecord?.id ?? (slugify(currentDraft.title) || `application-${Date.now()}`),
      ...currentDraft,
      href: currentDraft.href || `/applications#${slugify(currentDraft.title)}`,
    }),
    validateDraft: (currentDraft) =>
      Boolean(currentDraft.title.trim() && currentDraft.summary.trim()),
  });

  const columns: AdminTableColumn<ApplicationCategory>[] = [
    {
      key: "title",
      header: "Application Area",
      render: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.title}</div>
          <div className="text-xs text-slate-500 mt-1">{row.summary}</div>
        </div>
      ),
    },
    {
      key: "href",
      header: "Public Link",
      render: (row) => <span className="text-slate-600">{row.href}</span>,
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
            title="Edit application"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteRecord(row.id)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-all"
            title="Delete application"
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
          <h2 className="text-sm font-extrabold text-slate-900">Mock Application Records</h2>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, and delete application catalogue records in local component state.
          </p>
        </div>
        <AdminTable rows={records} columns={columns} />
      </div>

      <AdminFormShell
        title={editingRecord ? "Edit Application" : "Create Application"}
        description="Local mock form for application catalogue areas."
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
              disabled={!canSave}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 disabled:opacity-40 transition-all"
            >
              {editingRecord ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {editingRecord ? "Save Mock Edit" : "Add Mock Application"}
            </button>
          </div>
        }
      >
        <MockNotice />

        <Field label="Title">
          <input
            className={inputClass}
            value={draft.title}
            onChange={(event) => updateDraft({ title: event.target.value })}
            placeholder="Example Application Area"
          />
        </Field>

        <Field label="Summary">
          <textarea
            className={inputClass}
            value={draft.summary}
            onChange={(event) => updateDraft({ summary: event.target.value })}
            placeholder="Short application summary"
            rows={4}
          />
        </Field>

        <Field label="Public Link">
          <input
            className={inputClass}
            value={draft.href}
            onChange={(event) => updateDraft({ href: event.target.value })}
            placeholder="/applications#example"
          />
        </Field>

        <Field label="Status">
          <select
            className={inputClass}
            value={draft.status}
            onChange={(event) => updateDraft({ status: event.target.value as ContentStatus })}
          >
            <option value="ready">Ready</option>
            <option value="placeholder">Placeholder</option>
            <option value="content-required">Content Required</option>
            <option value="backend-later">Backend Later</option>
          </select>
        </Field>
      </AdminFormShell>
    </section>
  );
}

function ServiceMockCrud() {
  const {
    records,
    draft,
    editingRecord,
    canSave,
    updateDraft,
    resetForm,
    startEdit,
    saveRecord,
    deleteRecord,
  } = useAdminLocalCrud<AdminServiceRecord, ServiceDraft>({
    initialRecords: createServiceRecords(),
    createDraft: createServiceDraft,
    toDraft: (record) => ({
      title: record.title,
      summary: record.summary,
      href: record.href,
      category: record.category,
      serviceType: record.serviceType,
      linkType: record.linkType,
      status: record.status,
    }),
    fromDraft: (currentDraft, existingRecord) => ({
      id: existingRecord?.id ?? (slugify(currentDraft.title) || `service-${Date.now()}`),
      ...currentDraft,
      href: currentDraft.href || "/on-demand",
    }),
    validateDraft: (currentDraft) =>
      Boolean(currentDraft.title.trim() && currentDraft.summary.trim()),
  });

  const columns: AdminTableColumn<AdminServiceRecord>[] = [
    {
      key: "title",
      header: "Service",
      render: (row) => (
        <div>
          <div className="font-bold text-slate-900">{row.title}</div>
          <div className="text-xs text-slate-500 mt-1">{row.summary}</div>
        </div>
      ),
    },
    {
      key: "serviceType",
      header: "Type",
      render: (row) => <AdminStatusBadge label={row.serviceType} status="ready" />,
    },
    {
      key: "linkType",
      header: "Link",
      render: (row) => <span className="text-slate-600">{row.linkType}</span>,
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
            title="Edit service"
          >
            <Edit3 className="w-4 h-4" />
          </button>
          <button
            onClick={() => deleteRecord(row.id)}
            className="p-2 rounded-lg text-slate-400 hover:text-red-700 hover:bg-red-50 transition-all"
            title="Delete service"
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
          <h2 className="text-sm font-extrabold text-slate-900">Mock Service Records</h2>
          <p className="text-xs text-slate-500 mt-1">
            Create, edit, and delete on-demand and managed service records in local component state.
          </p>
        </div>
        <AdminTable rows={records} columns={columns} />
      </div>

      <AdminFormShell
        title={editingRecord ? "Edit Service" : "Create Service"}
        description="Local mock form for on-demand and managed service catalogue records."
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
              disabled={!canSave}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-800 disabled:opacity-40 transition-all"
            >
              {editingRecord ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              {editingRecord ? "Save Mock Edit" : "Add Mock Service"}
            </button>
          </div>
        }
      >
        <MockNotice />

        <Field label="Title">
          <input
            className={inputClass}
            value={draft.title}
            onChange={(event) => updateDraft({ title: event.target.value })}
            placeholder="Example Service"
          />
        </Field>

        <Field label="Summary">
          <textarea
            className={inputClass}
            value={draft.summary}
            onChange={(event) => updateDraft({ summary: event.target.value })}
            placeholder="Short service summary"
            rows={4}
          />
        </Field>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Service Type">
            <select
              className={inputClass}
              value={draft.serviceType}
              onChange={(event) =>
                updateDraft({ serviceType: event.target.value as ServiceDraft["serviceType"] })
              }
            >
              <option value="on-demand">On-Demand</option>
              <option value="managed">Managed</option>
            </select>
          </Field>

          <Field label="Link Type">
            <select
              className={inputClass}
              value={draft.linkType}
              onChange={(event) =>
                updateDraft({ linkType: event.target.value as ServiceDraft["linkType"] })
              }
            >
              <option value="route">Route</option>
              <option value="anchor">Anchor</option>
            </select>
          </Field>
        </div>

        <Field label="Category">
          <input
            className={inputClass}
            value={draft.category}
            onChange={(event) => updateDraft({ category: event.target.value })}
            placeholder="operations"
          />
        </Field>

        <Field label="Public Link">
          <input
            className={inputClass}
            value={draft.href}
            onChange={(event) => updateDraft({ href: event.target.value })}
            placeholder="/on-demand/example"
          />
        </Field>

        <Field label="Status">
          <select
            className={inputClass}
            value={draft.status}
            onChange={(event) => updateDraft({ status: event.target.value as ContentStatus })}
          >
            <option value="ready">Ready</option>
            <option value="placeholder">Placeholder</option>
            <option value="content-required">Content Required</option>
            <option value="backend-later">Backend Later</option>
          </select>
        </Field>
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

  if (location.pathname.startsWith("/admin/applications")) {
    return <ApplicationMockCrud />;
  }

  if (
    location.pathname.startsWith("/admin/services") ||
    location.pathname.startsWith("/admin/on-demand") ||
    location.pathname.startsWith("/admin/managed-services")
  ) {
    return <ServiceMockCrud />;
  }

  return (
    <AdminFormShell
      title="Local Mock CRUD"
      description="This route is not enabled for local mock CRUD yet."
    >
      <AdminEmptyState
        icon={HelpCircle}
        title="Mock CRUD not enabled for this section"
        description="Resources, Help Center, Applications, and Services are enabled first because they are lower-risk content areas. Commercial, membership, marketplace, and legal workflows come later, because chaos deserves a queue."
      />
    </AdminFormShell>
  );
}
