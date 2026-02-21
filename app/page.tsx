import type { Metadata } from "next";
import { Icons } from "./components/Icons";
import FaqSection from "./components/FaqSection";
import Image from "next/image";
import Hero from "@/public/image_hero.png";
import NestedFolder from "@/public/nestedfolder.png";
import Header from "./components/Header";
import Hybird from "@/public/sidepanel.png";
import { SmartPricingButton } from "./components/SmartPricingButton";

// --- SEO RIÊNG CHO TRANG CHỦ ---
export const metadata: Metadata = {
  title: "OrgaNice – Tab Manager with Nested Folders",
  description:
    "Stop tab chaos. Organize browser tabs with nested folders, cloud sync, and quick notes. The minimalist alternative to OneTab and Session Buddy.",
  keywords: [
    "tab manager",
    "productivity",
    "browser extension",
    "nested folders",
    "tab hibernation",
    "deduplicate tabs",
    "vertical tabs",
    "hybrid mode",
  ],
};

// Component tiện ích (Stateless - render thẳng trên server)
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
    <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* --- HEADER --- */}
      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-8 uppercase tracking-wide shadow-sm animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              New in v1.1.7: Drag & Drop Everywhere, Cloud Sync & Smarter
              Workflow
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              The ultimate tab manager <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                for power users.
              </span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              From simple tab grouping to{" "}
              <strong>unlimited nested folders</strong>. OrgaNice helps you
              organize and find your tabs faster
              <br />
              All local features are free forever.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="px-8 py-3.5 bg-sky-600 text-white rounded-lg font-semibold text-lg hover:bg-sky-700 transition flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                <a
                  href="https://chromewebstore.google.com/detail/nohkfpabhnpjiijhgmaecbnnkdphahkh?utm_source=item-share-cb"
                  target="_blank"
                >
                  Add to Chrome
                </a>
              </button>
            </div>
          </div>

          {/* Hero Image Mockup */}
          <div className="max-w-5xl h-fit mx-auto px-2">
            <div
              className="rounded-xl overflow-hidden border border-slate-300 bg-slate-50 relative group transition-all"
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              {" "}
              <Image
                src={Hero}
                alt="App Screenshot"
                width={1200}
                height={750}
                style={{ objectFit: "cover" }}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* --- SECTION 1: CORE FEATURES --- */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-2">
                Free Core Features
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
                Everything strictly local is Free
              </h3>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                We believe organization shouldn't be paywalled. Create unlimited
                nested folders and manage tabs without limits.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Block: Structure */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Layout />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Unlimited Structure
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Icons.Check /> <strong>Unlimited workspaces</strong>
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> <strong>Unlimited nested folders</strong>
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Group tabs into collections
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Auto-close after saving
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Full data export (JSON)
                  </li>
                </ul>
              </div>

              {/* Feature Block: Tab Mastery */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Move />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Powerful Access
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Icons.Check /> Save all tabs in one click
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Remove duplicates
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Drag & drop anywhere
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Open full sessions instantly
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Add tabs from toolbar
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Vertical tab side panel
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Workspace & tab context menus
                  </li>
                </ul>
              </div>

              {/* Feature Block: Notes & Utilities */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Edit />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Smart Utilities
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Icons.Check /> Tab hibernation
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Quick notes dashboard
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Notes for tabs & collections
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Global search
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Flexible new tab mode
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Import from Toby / HTML
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-12 gap-16 items-center">
              <div className="relative col-span-7 rounded-2xl overflow-hidden shadow-2xl border border-slate-300 bg-white order-2 md:order-1">
                <Image
                  src={Hybird}
                  alt="OrgaNice Side Panel Interface"
                  className="w-full h-auto"
                />
              </div>

              <div className="order-1 col-span-5 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                  Use OrgaNice with any <br />
                  New Tab extension.
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  You don’t need to remove your favorite New Tab extension.
                  OrgaNice <strong>doesn’t</strong> require overriding your New
                  Tab page.
                </p>

                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Simply disable the New Tab override in settings and manage
                  everything from the <strong>Side Panel</strong>. OrgaNice
                  works alongside other extensions smoothly — no conflicts, no
                  forced replacement.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    No need to uninstall any extension
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Icons.Check />
                    </div>
                    Works perfectly with other New Tab tools
                  </div>

                  <div className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
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
          className="py-24 space-y-32 bg-slate-50 border-y border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Upgrade for Cloud & Security
              </h2>
              <p className="mt-4 text-slate-500 text-lg">
                Unlock cross-device sync and data recovery with OrgaNice Pro.
              </p>
            </div>

            {/* 1. HERO FEATURE: CLOUD SYNC */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Sync />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      Cloud Sync
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Keep your work flowing seamlessly between your office
                    laptop, home PC, and other devices.
                    <br />
                    <br />
                    Your <strong>Nested Folders</strong>, Collections, and Notes
                    are automatically synced in real-time. Never manually
                    export/import again.
                    <br />
                    <br />
                    <span className="inline-block bg-indigo-50 text-indigo-800 px-3 py-1.5 rounded-lg text-sm font-medium border border-indigo-100 mt-2">
                      ✨ <strong>New in v1.1.6:</strong> Cloud Sync is now
                      completely optional. Turn it off anytime for a strict
                      local-only experience.
                    </span>
                  </p>
                </div>

                {/* Image Side - Dùng lại ảnh cũ nhưng minh họa cho Sync context */}
                <div className="order-1 md:order-2 relative">
                  <div className="relative rounded-2xl shadow-2xl shadow-slate-200 w-full h-[400px] md:h-[500px] overflow-hidden border border-slate-200 bg-white">
                    <Image
                      src={NestedFolder}
                      alt="OrgaNice Sync Interface"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top left" }}
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.Shield />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Secure Cloud Backup
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Never lose your setup. We automatically backup your Workspaces
                  & Collections to the cloud, ensuring your data survives
                  hardware failures or browser resets.
                </p>
              </div>

              {/* Card 2: Trash Bin */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.Trash />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Cloud Trash Bin
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Deleted something by accident? Pro members can restore deleted
                  collections and folders from the cloud trash bin.
                </p>
              </div>

              {/* Card 3: Support */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.Support />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Priority Support
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Get direct access to the developer for feature requests and
                  faster troubleshooting assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- COMPARISON TABLE --- */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
              Detailed Feature Comparison
            </h2>
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse table-fixed">
                <thead className=" text-slate-900 font-bold">
                  <tr>
                    <th className="p-4 border-b  w-2/5 border-r border-slate-200">
                      Feature
                    </th>
                    <th className="p-4 border-b  text-center w-1/5 border-r border-slate-200">
                      Free
                    </th>
                    <th className="p-4 border-b border-slate-200 text-center w-1/5 bg-indigo-50/30 text-indigo-700">
                      Pro
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm text-slate-600">
                  {/* --- BASIC MANAGEMENT --- */}
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Add/Edit/Delete workspaces
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Add/Edit/Delete collections
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Nested folders
                    </td>
                    <td className="p-4 text-center font-bold text-indigo-600 border-r border-slate-200">
                      Unlimited
                    </td>
                    <td className="p-4 bg-indigo-50/30 font-bold text-indigo-700 text-center">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Tab hibernation
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Remove duplicate tabs
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  {/* UPDATED: Enhanced Drag & Drop + Context Menus */}
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Drag & drop everywhere
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Workspace & tab context menus
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Import from Toby (JSON)
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Import from HTML File
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Import from Chrome Bookmarks
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Export data JSON
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Vertical tabs
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Flexible new tab mode
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>

                  {/* --- PRO FEATURES --- */}
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Cloud sync (Multi-device)
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCross />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  {/* UPDATED: Toggle Cloud Sync Row */}
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Toggle cloud sync ON/OFF
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCross />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Cloud trash bin (Recovery)
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCross />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- PRICING --- */}
        <section id="pricing" className="py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Choose Your Plan</h2>
            <p className="text-slate-500 mb-16 text-lg">
              Start for free with no limits on local organization. <br />{" "}
              Upgrade to Sync across devices.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {/* 1. Free Plan */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition flex flex-col h-full">
                <h3 className="font-bold text-xl mb-2 text-slate-900">
                  Starter
                </h3>
                <div className="text-4xl font-bold mb-6">Free</div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">
                  Full featured for single-device use. No limits.
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Unlimited Workspaces & Tabs
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Unlimited Nested Folders
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Vertical Sidebar Mode
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Hibernate Tabs & Deduplicate
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Full Data Export (JSON)
                  </li>
                </ul>
                <button className="w-full py-3.5 rounded-lg border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition mt-auto">
                  Installed
                </button>
              </div>

              {/* 3. Lifetime Plan */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 overflow-hidden transition flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  ONE-TIME
                </div>
                <h3 className="font-bold text-xl mb-2 text-indigo-700">
                  Lifetime
                </h3>
                <div className="text-4xl font-bold mb-6 text-indigo-900">
                  $19
                </div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-indigo-100">
                  Pay once, own it forever
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Sync Across Devices</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check />
                    <strong>Optional Sync (Toggle On/Off)</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Secure Cloud Backup</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Cloud Trash Bin</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> No recurring fees
                  </li>

                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Support Indie Development
                  </li>
                </ul>
                <SmartPricingButton className="w-full py-3.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-sm mt-auto">
                  UPGRADE
                </SmartPricingButton>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ SECTION (Client Component) --- */}
        <FaqSection />
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400">
            © 2026 OrgaNice. Crafted for focus.
          </div>
          <div className="flex gap-8 font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900 transition">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
