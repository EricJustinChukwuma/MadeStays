import React from "react";
import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between border-b border-slate-200 bg-white px-6 py-8 md:px-10 lg:px-14 xl:px-20 xxl:px-24">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Madestays</h1>
        <p className="text-sm text-slate-500">Property Onboarding Dashboard</p>
      </div>

      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        <button
          className="rounded-full p-2 hover:bg-slate-900 border-2 border-slate-600 transition-colors text-[#000] hover:text-[#fff]"
          aria-label="Notifications"
        >
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white font-semibold">
            M
          </div>

          <div>
            <p className="font-medium text-slate-900">Michael</p>
            <p className="text-xs text-slate-500">Property Owner</p>
          </div>
        </div>
      </div>
    </header>
  );
}
