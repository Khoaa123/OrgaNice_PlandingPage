import type { Metadata } from "next";
import { Icons } from "./components/Icons";
import FaqSection from "./components/FaqSection";
import Image from "next/image";
import Hero from "@/public/hero.png";
import NestedFolder from "@/public/nestedfolder.png";
import Header from "./components/Header";
import { SmartPricingButton } from "./components/SmartPricingButton";
// --- SEO RIÊNG CHO TRANG CHỦ ---
export const metadata: Metadata = {
  title: "OrgaNice – Smart Tab Manager with Nested Folders",
  description:
    "Stop tab chaos. Organize browser tabs with nested folders, cloud sync, and quick notes. The minimalist alternative to OneTab and Session Buddy.",
  keywords: [
    "tab manager",
    "productivity",
    "browser extension",
    "nested folders",
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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              The ultimate tab manager <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                for power users.
              </span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
              From simple tab grouping to unlimited nested folders and cloud
              sync. OrgaNice brings order to your browser chaos.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button className="px-8 py-3.5 bg-sky-600 text-white rounded-lg font-semibold text-lg hover:bg-sky-700 transition flex items-center justify-center cursor-pointer">
                <a
                  href="https://chromewebstore.google.com/detail/nohkfpabhnpjiijhgmaecbnnkdphahkh?utm_source=item-share-cb"
                  target="_blank"
                >
                  Add to Chrome - Free
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
                height={750} // hoặc đúng tỷ lệ ảnh của bạn
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
                Everything you need to stay organized
              </h3>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
                We don't limit your ability to organize. All essential
                management features are free.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature Block: Structure */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Layout />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Workspaces & Collections
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Icons.Check /> Unlimited Workspaces
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Group tabs into Collections
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Pin important items
                  </li>
                  <li className="flex gap-2">
                    <Icons.Check /> Auto-close after saving
                  </li>
                </ul>
              </div>

              {/* Feature Block: Tab Mastery */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Move />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Fast Tab Actions
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-2">
                    <Icons.Check /> Save all tabs in one click
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
                </ul>
              </div>

              {/* Feature Block: Notes & Utilities */}
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition">
                <div className="w-10 h-10 bg-white text-indigo-600 rounded-lg flex items-center justify-center mb-4 shadow-sm ">
                  <Icons.Edit />
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900">
                  Notes & Utilities
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
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
                    <Icons.Check /> Import from Toby
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PRO FEATURES --- */}
        <section
          id="pro-features"
          className="py-24 space-y-32 bg-slate-50 border-y border-slate-200"
        >
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Upgrade for Ultimate Power
              </h2>
              <p className="mt-4 text-slate-500 text-lg">
                Take your productivity to the next level with OrgaNice Pro.
              </p>
            </div>

            {/* 1. HERO FEATURE: NESTED FOLDERS (Giữ lại ảnh vì bạn đã có) */}
            <div className="mb-24">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div className="order-2 md:order-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icons.Folder />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      Unlimited Nested Folders
                    </h3>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Break free from flat lists. Organize your work with{" "}
                    <strong>folders inside folders</strong>, without any depth
                    limits. Perfect for large projects, long-term research, and
                    complex workflows.
                  </p>
                </div>

                {/* Image Side */}
                <div className="order-1 md:order-2 relative">
                  <div className="relative rounded-2xl shadow-2xl shadow-slate-200 w-full h-[400px] md:h-[500px] overflow-hidden border border-slate-200 bg-white">
                    {/* Lưu ý: Đảm bảo đường dẫn ảnh đúng */}
                    <Image
                      src={NestedFolder}
                      alt="Tree View with deeply nested folders"
                      fill
                      style={{ objectFit: "cover", objectPosition: "top left" }}
                      priority={false}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. SECONDARY FEATURES GRID (Không dùng ảnh Screenshot) */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: Cloud Sync */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.Sync />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Cloud Sync
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Access your workspaces, folders, and notes on all your
                  devices. Everything stays in sync and safely backed up in the
                  cloud.
                </p>
              </div>

              {/* Card 2: Session History */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.History />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Session History
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Never lose your tabs again. We automatically save your open
                  windows so you can restore them instantly, even after a
                  browser crash
                </p>
              </div>

              {/* Card 3: Import Bookmarks */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6  transition-transform">
                  <Icons.Download />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Instant Import
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  Moving from standard Chrome bookmarks? Import everything in
                  seconds while keeping your existing folder structure intact.
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
                  <tr>
                    <td className="p-4 pl-6 border-r border-slate-200 ">
                      Add/Edit/Delete Workspaces
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
                      Add/Edit/Delete Collections
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
                      Quick Notes/Collection Notes/Tab Notes
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
                      Pinning & Drag-Drop
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
                      Import from Toby Extension
                    </td>
                    <td className="p-4 border-r border-slate-200">
                      <TableCheck />
                    </td>
                    <td className="p-4 bg-indigo-50/30">
                      <TableCheck />
                    </td>
                  </tr>
                  {/* Pro Features */}
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Nested Folders
                    </td>
                    <td className="p-4 text-center text-xs font-bold text-slate-500 border-r border-slate-200">
                      Max 15 Folders
                    </td>
                    <td className="p-4 bg-indigo-50/30 font-bold text-indigo-700 text-center">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 font-medium text-slate-900 border-r border-slate-200 ">
                      Cloud Sync (Multi-device)
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
                      Session History Backup
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
                      Import Browser Bookmarks
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
              Start for free. Upgrade for the full experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {/* 1. Free Plan */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition flex flex-col h-full">
                <h3 className="font-bold text-xl mb-2 text-slate-900">
                  Starter
                </h3>
                <div className="text-4xl font-bold mb-6">Free</div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-slate-100">
                  Perfect for organizing your local browser workspace.
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Unlimited Workspaces & Tabs
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Drag & Drop / Pinning
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Notes & Search
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Import from Toby
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Instant Cleanup
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Nested Folders (Max 15)
                  </li>
                </ul>
                <button className="w-full py-3.5 rounded-lg border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition mt-auto">
                  Install Free
                </button>
              </div>

              {/* 2. Pro Plan (Balanced View) */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 overflow-hidden transition flex flex-col h-full relative">
                <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  SUBSCRIPTION
                </div>
                <h3 className="font-bold text-xl mb-2 text-indigo-700">
                  Pro Cloud
                </h3>
                <div className="text-4xl font-bold mb-6 text-indigo-900">
                  $3
                  <span className="text-lg text-slate-500 font-normal">
                    /mo
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-indigo-100">
                  Billed yearly. Unlock sync and unlimited power.
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Cloud Sync Devices</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Unlimited Nested Folders</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Session History Backup
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Import Browser Bookmarks
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Trash Bin & Recovery
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Priority Support
                  </li>
                </ul>
                <SmartPricingButton className="w-full py-3.5 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition shadow-sm mt-auto">
                  UPGRADE
                </SmartPricingButton>
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
                  $60
                </div>
                <p className="text-slate-500 text-sm mb-8 pb-8 border-b border-indigo-100">
                  Pay once, own it forever. Includes all future Pro updates.
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> <strong>Everything in Pro</strong>
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> No recurring fees
                  </li>
                  <li className="flex gap-3 text-slate-700 text-sm">
                    <Icons.Check /> Early access to beta features
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
