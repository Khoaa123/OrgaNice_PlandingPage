import type { Metadata } from "next";
import { Icons } from "./components/Icons";
import FaqSection from "./components/FaqSection";
import Image from "next/image";
import Hero from "@/public/image_hero.png";
import NestedFolder from "@/public/nestedfolder.png";
import Header from "./components/Header";
import Hybird from "@/public/sidepanel.png";
import { SmartPricingButton } from "./components/SmartPricingButton";

export const metadata: Metadata = {
  title: "OrgaNice – Tab Manager with Tab Rules, Nested Folders & Snooze Tabs",
  description:
    "Stop tab chaos. Automatically organize browser tabs with custom tab rules. Group, snooze, suspend, or send tabs to collections with nested folders and cloud sync.",
  keywords: [
    "tab manager",
    "tab automation",
    "tab grouping",
    "snooze tabs",
    "productivity",
    "browser extension",
    "nested folders",
    "tab hibernation",
    "deduplicate tabs",
    "vertical tabs",
    "hybrid mode",
    "dark mode",
  ],
};

const TableCheck = () => (
  <div className="flex items-center justify-center w-full h-full text-indigo-600">
    <Icons.Check />
  </div>
);

const TableCross = () => (
  <div className="flex items-center justify-center w-full h-full text-slate-300">
    <Icons.Cross />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#FAFAFA] selection:bg-indigo-500/30 selection:text-indigo-900">
      <Header />

      <main className="relative overflow-hidden">
        <section className="relative pt-32 pb-24 px-4 overflow-hidden border-b border-slate-200/50">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="relative inline-block mb-10 group">
              <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div
                className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full 
                  bg-white border border-slate-200 
                  text-slate-800 text-xs font-bold tracking-widest uppercase 
                  shadow-sm cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                <p>
                  <span className="text-indigo-600">v1.1.13</span>
                  <span className="mx-2 text-slate-300">|</span>
                  Custom Icons & Tab Rules upgrade
                </p>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.05]">
              The ultimate tab manager <br></br>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x">
                for heavy tab users
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium tracking-tight">
              From simple tab grouping to{" "}
              <span className="text-slate-900 font-bold">
                unlimited nested folders
              </span>
              . OrgaNice helps you organize and find your tabs faster. All local
              features are free forever.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
              <button className="group relative px-8 py-4 bg-sky-600 text-white rounded-2xl font-bold text-base hover:bg-sky-700 transition-all flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.2)] transform duration-300">
                <a
                  href="https://chromewebstore.google.com/detail/nohkfpabhnpjiijhgmaecbnnkdphahkh"
                  target="_blank"
                  className="flex items-center gap-2"
                >
                  Add to Chrome
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </button>
            </div>
          </div>

          <div className="max-w-6xl h-fit mx-auto px-4 sm:px-6 relative">
            <div className="absolute inset-0 -top-12 bg-indigo-500/5 blur-[100px] rounded-full" />
            <div className="rounded-2xl overflow-hidden border border-slate-200/60 bg-white/50 backdrop-blur-sm relative z-10 shadow-[0_20px_50px_rgb(0,0,0,0.05)] ring-1 ring-slate-900/5">
              <div className="bg-slate-100/50 border-b border-slate-200/60 p-3 flex items-center gap-2">
                <div className="flex gap-1.5 ml-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
              </div>
              <Image
                src={Hero}
                alt="App Screenshot"
                width={1400}
                height={800}
                style={{ objectFit: "cover" }}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 1: CORE FEATURES --- */}
        <section
          id="features"
          className="py-24 bg-white border-t border-slate-200/50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-20">
              <h2 className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-3">
                Free Core Features
              </h2>
              <h3 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Everything strictly local is Free
              </h3>
              <p className="mt-6 text-base text-slate-500 max-w-2xl mx-auto">
                We believe organization shouldn't be paywalled. Create unlimited
                nested folders and manage tabs without limits.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Feature Block: Structure */}
              <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-3xl border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">
                <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-slate-900/5">
                  <Icons.Layout />
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">
                  Unlimited Structure
                </h4>
                <ul className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">
                      <strong>Unlimited workspaces</strong>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">
                      <strong>Unlimited nested folders</strong>
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Group tabs into collections</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Auto-close after saving</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Full data export (JSON)</span>
                  </li>
                </ul>
              </div>

              {/* Feature Block: Tab Mastery */}
              <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-3xl border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">
                <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-slate-900/5">
                  <Icons.Move />
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">
                  Powerful Access
                </h4>
                <ul className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Save all tabs in one click</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Remove duplicates</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Drag & drop anywhere</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Open full sessions instantly</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Add tabs from toolbar</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Vertical tab side panel</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">
                      Workspace & tab context menus
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check /> <span className="pt-0.5">Tab Rules</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check /> <span className="pt-0.5">Snooze tabs</span>
                  </li>
                </ul>
              </div>

              {/* Feature Block: Notes & Utilities */}
              <div className="bg-[#FAFAFA] p-8 md:p-10 rounded-3xl border border-slate-200/60 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300">
                <div className="w-12 h-12 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm ring-1 ring-slate-900/5">
                  <Icons.Edit />
                </div>
                <h4 className="text-xl font-bold mb-6 text-slate-900">
                  Smart Utilities
                </h4>
                <ul className="space-y-4 text-slate-600 font-medium">
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Dark Mode Theme</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Tab hibernation</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Quick notes dashboard</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Notes for tabs & collections</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Global search</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Flexible new tab mode</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <Icons.Check />{" "}
                    <span className="pt-0.5">Import from Toby / HTML</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: HYBRID MODE --- */}
        <section className="py-24 md:py-32 bg-white border-t border-slate-200/50 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1 lg:col-span-7">
                <div className="absolute -inset-4 bg-linear-to-tr from-indigo-500/10 to-purple-500/5 blur-2xl rounded-[3rem] -z-10"></div>

                <div className="relative rounded-2xl p-1.5 bg-slate-50/80 shadow-inner border border-slate-200/80">
                  <div className="rounded-xl overflow-hidden shadow-[0_20px_50px_rgb(0,0,0,0.12)] bg-white ring-1 ring-slate-900/5">
                    <Image
                      src={Hybird}
                      alt="OrgaNice Side Panel Interface"
                      className="w-full h-auto object-cover"
                      quality={100} // <-- Bắt buộc để ảnh không bị mờ
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-5">
                <h2 className="text-3xl font-extrabold mb-6 text-slate-900 tracking-tight leading-[1.15]">
                  Use OrgaNice with any <br />
                  New Tab extension.
                </h2>

                <p className="text-base text-slate-600 mb-6 leading-relaxed font-medium">
                  You don’t need to remove your favorite New Tab extension.
                  OrgaNice <strong className="text-slate-900">doesn’t</strong>{" "}
                  require overriding your New Tab page.
                </p>

                <p className="text-base text-slate-600 mb-10 leading-relaxed">
                  Simply disable the New Tab override in settings and manage
                  everything from the{" "}
                  <strong className="text-slate-900">Side Panel</strong>.
                  OrgaNice works alongside other extensions smoothly — no
                  conflicts, no forced replacement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    No need to uninstall any extension
                  </div>

                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    Works perfectly with other New Tab tools
                  </div>

                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    Full control from the Vertical Side Panel
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pro-features"
          className="py-32 bg-[#FAFAFA] relative overflow-hidden border-t border-slate-200/50"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-300 to-transparent"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Upgrade for Cloud & Power
              </h2>
              <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
                Unlock cross-device sync, data recovery, and unlimited
                automation to streamline your entire workflow.
              </p>
            </div>

            <div className="mb-8">
              <div className="group relative bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 ring-1 ring-slate-200/60 overflow-hidden flex flex-col lg:flex-row transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-100/50">
                <div className="lg:w-1/2 p-10 md:p-14 lg:p-16 flex flex-col justify-center relative z-10 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-linear-to-br from-indigo-50 to-white border border-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Icons.Folder />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      Unlimited folders. Always in sync.
                    </h3>
                  </div>

                  <p className="text-base text-slate-600 leading-relaxed mb-6 font-medium">
                    Organize your tabs with unlimited{" "}
                    <strong className="text-slate-900">Nested Folders</strong>,
                    so everything stays structured the way you like.
                  </p>

                  <p className="text-base text-slate-600 leading-relaxed mb-8">
                    Your tabs, collections, and notes stay synced across
                    devices, letting you pick up where you left off anytime.
                  </p>

                  <span className="inline-block bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded-lg text-xs font-medium border border-indigo-100 mt-2">
                    ✨ <strong>New in v1.1.6:</strong> Cloud Sync is now
                    completely optional. Turn it off anytime for a strict
                    local-only experience.
                  </span>
                </div>

                <div className="lg:w-1/2 relative bg-[#FAFAFA] border-t lg:border-t-0 lg:border-l border-slate-100 flex items-center justify-center p-8 md:p-12 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

                  <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-900/5  transition-transform duration-700  z-10 bg-white">
                    <Image
                      src={NestedFolder}
                      alt="OrgaNice Nested Folders Interface"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top left" }}
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative bg-white p-8 rounded-3xl ring-1 ring-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:ring-blue-200 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white ring-1 ring-slate-100 shadow-sm text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Shield />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    Secure Backup
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    We automatically backup your Workspaces to the cloud,
                    ensuring your data survives hardware failures.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-3xl ring-1 ring-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-purple-100/50 hover:ring-purple-200 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white ring-1 ring-slate-100 shadow-sm text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Trash />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    Cloud Trash Bin
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    Deleted something by accident? Restore deleted collections
                    and folders from the cloud trash bin.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-3xl ring-1 ring-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:ring-blue-200 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white ring-1 ring-slate-100 shadow-sm text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icons.Infinity />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    Unlimited Rules
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    Create endless automated rules to instantly sort and
                    organize your incoming tabs without lifting a finger.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-3xl ring-1 ring-slate-200/80 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:ring-blue-200 transition-all duration-300 overflow-hidden">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-amber-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white ring-1 ring-slate-100 shadow-sm text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icons.History />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                    Unlimited Snooze
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium">
                    Snooze as many tabs and sessions as you want. Bring them
                    back exactly when you are ready to focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-slate-200/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16 text-slate-900 tracking-tight">
              Detailed Feature Comparison
            </h2>
            <div className="border border-slate-200/80 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
              <table className="w-full text-left border-collapse table-fixed">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold uppercase tracking-wider text-xs">
                  <tr>
                    <th className="p-6 w-1/2">Feature</th>
                    <th className="p-6 text-center w-1/4 border-l border-slate-200">
                      Free
                    </th>
                    <th className="p-6 text-center w-1/4 border-l border-slate-200 bg-indigo-50/50 text-indigo-700">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Add/Edit/Delete workspaces</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Add/Edit/Delete collections</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors bg-slate-50/30">
                    <td className="p-5 pl-6 font-bold text-slate-900">
                      Nested folders
                    </td>
                    <td className="p-5 border-l border-slate-100 text-center font-extrabold text-indigo-600">
                      Unlimited
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/40 font-extrabold text-indigo-700 text-center">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Dark Mode Theme</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Tab hibernation</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Remove duplicate tabs</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Drag & drop everywhere</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Workspace & tab context menus</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Import from Toby (JSON)</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Import from HTML File</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Import from Chrome Bookmarks</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Export data JSON</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Vertical tabs</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6">Flexible new tab mode</td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCheck />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-50/20">
                      <TableCheck />
                    </td>
                  </tr>

                  {/* --- PRO FEATURES --- */}
                  <tr className="bg-indigo-50/30 hover:bg-indigo-50/50 transition-colors border-t border-slate-200">
                    <td className="p-5 pl-6 font-bold text-indigo-900">
                      Cloud sync (Multi-device)
                    </td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCross />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-100/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="bg-indigo-50/30 hover:bg-indigo-50/50 transition-colors">
                    <td className="p-5 pl-6 font-bold text-indigo-900">
                      Toggle cloud sync ON/OFF
                    </td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCross />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-100/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="bg-indigo-50/30 hover:bg-indigo-50/50 transition-colors">
                    <td className="p-5 pl-6 font-bold text-indigo-900">
                      Cloud trash bin (Recovery)
                    </td>
                    <td className="p-5 border-l border-slate-100">
                      <TableCross />
                    </td>
                    <td className="p-5 border-l border-slate-100 bg-indigo-100/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 pl-6 font-bold text-slate-900">
                      Tab Rules
                    </td>
                    <td className="p-5 text-center font-bold text-slate-500 border-l border-slate-100">
                      2 rules
                    </td>
                    <td className="p-5 bg-indigo-50/20 font-bold text-indigo-700 text-center border-l border-slate-100">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors border-b-0">
                    <td className="p-5 pl-6 font-bold text-slate-900">
                      Snooze tabs
                    </td>
                    <td className="p-5 text-center font-bold text-slate-500 border-l border-slate-100">
                      10 sessions
                    </td>
                    <td className="p-5 bg-indigo-50/20 font-bold text-indigo-700 text-center border-l border-slate-100">
                      Unlimited
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- PRICING --- */}
        <section
          id="pricing"
          className="py-32 bg-[#FAFAFA] border-t border-slate-200/50"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 tracking-tight">
              Choose Your Plan
            </h2>
            <p className="text-slate-500 mb-20 text-lg max-w-2xl mx-auto">
              Start for free with no limits on local organization.{" "}
              <br className="hidden sm:block" /> Upgrade to Sync across devices.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              {/* 1. Free Plan */}
              <div className="p-10 rounded-2xl border border-slate-200 bg-white flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <h3 className="font-bold text-xl mb-2 text-slate-900">
                  Starter
                </h3>
                <div className="text-4xl font-extrabold mb-8 text-slate-900">
                  Free
                </div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-200">
                  Full featured for single-device use. No limits.
                </p>
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <Icons.Check /> Unlimited Workspaces & Tabs
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <Icons.Check /> Unlimited Nested Folders
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <Icons.Check /> Vertical Sidebar Mode
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <Icons.Check /> Hibernate Tabs & Deduplicate
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <Icons.Check /> Full Data Export (JSON)
                  </li>
                </ul>
                <button className="w-full py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition mt-auto">
                  Installed
                </button>
              </div>

              {/* 3. Lifetime Plan */}
              <div className="p-10 relative overflow-hidden rounded-2xl border border-slate-200 bg-white flex flex-col h-full hover:shadow-lg hover:border-indigo-500 transition-all duration-300">
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  ONE-TIME
                </div>
                <h3 className="font-bold text-xl mb-2 text-indigo-600">
                  Lifetime
                </h3>
                <div className="text-4xl font-extrabold mb-8 text-slate-900">
                  $50
                </div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">
                  Pay once, own it forever
                </p>
                <ul className="space-y-5 mb-10 flex-1">
                  <li className="flex gap-4 items-center text-slate-900 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Sync Across Devices
                  </li>
                  <li className="flex gap-4 items-center text-slate-800 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>
                    Optional Sync (Toggle On/Off)
                  </li>
                  <li className="flex gap-4 items-center text-slate-800 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Secure Cloud Backup
                  </li>
                  <li className="flex gap-4 items-center text-slate-800 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Cloud Trash Bin
                  </li>
                  <li className="flex gap-4 items-center text-slate-900 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Unlimited Tab Rules
                  </li>
                  <li className="flex gap-4 items-center text-slate-900 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Unlimited Snooze Sessions
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    No recurring fees
                  </li>
                  <li className="flex gap-4 items-center text-slate-700 font-medium">
                    <div className="text-indigo-600">
                      <Icons.Check />
                    </div>{" "}
                    Support Indie Development
                  </li>
                </ul>
                <SmartPricingButton className="w-full py-4 rounded-xl bg-indigo-600 text-white font-bold text-base hover:bg-indigo-700 hover:shadow-lg transition-all mt-auto">
                  UPGRADE
                </SmartPricingButton>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      {/* <footer className="bg-white border-t border-slate-200 py-12 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 font-medium">
            © {new Date().getFullYear()} OrgaNice. Crafted for focus.
          </div>
          <div className="flex gap-8 font-semibold text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-indigo-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
