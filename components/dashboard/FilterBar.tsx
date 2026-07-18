import { Search } from "lucide-react";

export default function FilterBar() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search properties..."
            className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 outline-none transition focus:border-slate-900 text-slate-600"
          />
        </div>

        <select className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-slate-900">
          <option>All Statuses</option>
          <option>Live</option>
          <option>In Progress</option>
          <option>Action Required</option>
          <option>Not Started</option>
        </select>
      </div>
    </section>
  );
}
