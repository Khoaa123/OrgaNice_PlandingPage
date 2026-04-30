import { Zap } from "lucide-react";
import DocVideo from "../components/DocVideo";
import Header from "../components/Header";
import { Icons } from "../components/Icons";

const ImagePlaceholder = ({ label }: { label: string }) => (
  <div className="w-full h-48 md:h-80 mt-6 mb-10 bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 transition-colors">
    <Icons.Layout />
    <span className="mt-3 text-sm font-semibold text-slate-600">
      Image / GIF Placeholder
    </span>
    <span className="mt-1 text-xs font-medium text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">
      {label}
    </span>
  </div>
);

export const metadata = {
  title: "User Guide & Documentation | OrgaNice",
  description:
    "Learn how to master your tabs with OrgaNice. A complete guide on smart rules, nested folders, cloud sync, and workspace management.",
};

export default function DocsPage() {
  const chapters = [
    { id: "getting-started", title: "1. Getting Started & UI" },
    { id: "hierarchy", title: "2. Hierarchy & Organization" },
    { id: "routing", title: "3. Saving & Organizing Tabs" },
    { id: "automations", title: "4. Smart Automations" },
    { id: "cleanup", title: "5. Cleanup & Utilities" },
    { id: "snooze", title: "6. Snooze Tabs" },
    { id: "search-notes", title: "7. Search & Notes" },
    { id: "data-sync", title: "8. Data & Sync" },
  ];

  return (
    <div className="min-h-screen font-sans bg-[#FAFAFA] selection:bg-indigo-500/30 selection:text-indigo-900">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24">
        <div className="mb-12 border-b border-slate-200 pb-10 flex flex-col items-center text-center">
          <div className="relative inline-block mb-8 group">
            <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <a
              href="#hierarchy"
              className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold tracking-widest shadow-sm cursor-pointer hover:border-indigo-200 transition-colors"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              <p className="truncate uppercase">
                <span className="text-indigo-600">v1.1.27</span>
                <span className="mx-2 text-slate-300">|</span>
                New: Advanced Tab Sorting & Native Chrome Tab Groups
              </p>
            </a>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            OrgaNice User Guide
          </h1>
          <p className="mt-6 text-xl text-slate-500 max-w-3xl leading-relaxed">
            Everything you need to know to organize tabs, save sessions, and
            keep your browser clean with OrgaNice.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 relative">
          {/* Sidebar Menu */}
          <aside className="lg:w-1/4 shrink-0">
            <div className="sticky top-28 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
              <h3 className="text-xs font-bold text-indigo-600 tracking-widest uppercase mb-5">
                On this page
              </h3>
              <nav className="flex flex-col gap-1.5">
                {chapters.map((chapter) => (
                  <a
                    key={chapter.id}
                    href={`/docs#${chapter.id}`}
                    className="px-3 py-2.5 text-sm font-medium text-slate-600 rounded-lg hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                  >
                    {chapter.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="lg:w-3/4 max-w-3xl prose prose-slate prose-indigo prose-headings:tracking-tight prose-a:text-indigo-600">
            {/* CHAPTER 1 */}
            <section id="getting-started" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                1. Getting Started & UI
              </h2>
              <p className="text-slate-600">
                OrgaNice provides a flexible interface with two primary ways to
                manage and view your data.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Initial Browser Setup
              </h3>
              <p className="text-slate-600 mb-4">
                Because OrgaNice replaces the default new tab page, Chrome may
                show a small confirmation footer the first time you open a new
                tab. Simply click
                <strong> Keep it </strong> to confirm the change and enable the
                OrgaNice dashboard.
              </p>
              <DocVideo
                src="/videos/keep-change.mp4"
                alt="Demo of clicking Keep it to enable the new tab dashboard"
              />

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Dashboard vs Side Panel
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>The Dashboard (New Tab):</strong> The primary control
                  center. Designed for managing nested folders, creating
                  Workspaces, and writing Quick Notes.
                </li>
                <li>
                  <strong>The Side Panel:</strong> A vertical sidebar interface.
                  Designed for saving and routing tabs without leaving the
                  current webpage. (For detailed access and usage instructions,
                  see the{" "}
                  <a
                    href="#routing"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    Saving & Organizing Tabs
                  </a>{" "}
                  section).
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mt-6 mb-2">
                <p className="text-sm text-blue-900 m-0">
                  <strong>💡 Resizable Sidebar:</strong> Hover over the right
                  edge of the Dashboard's left sidebar, then click and drag to
                  adjust its width.
                </p>
              </div>

              <DocVideo
                src="/videos/resize-sidebar.mp4"
                alt="Demo of resizing the sidebar by dragging"
              />

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Hybrid Mode (New Tab Override)
              </h3>
              <p className="text-slate-600 mb-3">
                To prevent the OrgaNice dashboard from appearing on every new
                tab page, navigate to <strong>Settings</strong> and enable{" "}
                <strong>"Disable New Tab"</strong>.
              </p>
              <p className="text-slate-600 mb-4">
                This setting redirects new tabs to <strong>Google.com</strong>{" "}
                by default. The dashboard remains accessible via the right-click
                context menu or the extension popup.
              </p>

              <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mt-4 mb-8">
                <p className="text-sm text-indigo-900 m-0">
                  <strong>Upcoming Feature:</strong> A future update will allow
                  setting a custom URL for new tabs.
                </p>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Essential Shortcuts
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  Press{" "}
                  <kbd className="bg-slate-100 border px-1.5 py-0.5 rounded text-xs font-mono font-semibold">
                    Cmd/Ctrl + K
                  </kbd>{" "}
                  to open Global Search.
                </li>
                <li>
                  Right-click anywhere on a webpage to access the{" "}
                  <strong>OrgaNice Context Menu</strong>.
                </li>
              </ul>
            </section>

            {/* CHAPTER 2 */}
            <section id="hierarchy" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                2. Hierarchy & Organization
              </h2>
              <p className="text-slate-600">
                OrgaNice organizes data using a 4-level hierarchy: Workspace
                &gt; Folder &gt; Collection &gt; Tab.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Workspaces
              </h3>
              <p className="text-slate-600">
                Workspaces function as isolated environments (e.g., "Personal",
                "Work"). You can create multiple workspaces, assign custom
                colors, and switch between them seamlessly.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Nested Folders
              </h3>
              <p className="text-slate-600 mb-6">
                Folders support infinite nesting. Custom colors and icons can be
                assigned to folders for visual categorization.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Sidebar Drag & Drop (Organization)
              </h3>
              <p className="text-slate-600 mb-4">
                The left sidebar is fully interactive, allowing you to
                intuitively restructure your entire workspace using
                drag-and-drop:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Nest Folders:</strong> Drag a folder into another
                  folder to instantly create a sub-folder hierarchy.
                </li>
                <li>
                  <strong>Move Collections:</strong> Grab any collection from
                  the sidebar and drop it into a specific folder, or drag it out
                  to the workspace root.
                </li>
                <li>
                  <strong>Reorder Everything:</strong> Drag workspaces, folders,
                  or collections up and down to change their display priority.
                </li>
              </ul>

              <DocVideo
                src="/videos/drag-and-drop.mp4"
                alt="Demo of dragging and dropping collections and folders in the sidebar"
              />

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Collections
              </h3>
              <p className="text-slate-600 mb-4">
                A Collection is a saved group of tabs. The following actions are
                available for managing Collections:
              </p>

              <h4 className="font-semibold text-slate-800 mt-6 mb-2">
                Quick Actions
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Personalize:</strong> Modify the collection name,
                  icon, and color.
                </li>
                <li>
                  <strong>Open as Tab Group:</strong> Instantly convert your collection into a native Chrome Tab Group. The Tab Group automatically adopts your collection's name and intelligently matches its custom color.
                </li>
                <li>
                  <strong>Pin to Top:</strong> Pin collections to maintain them
                  at the top of the dashboard view.
                </li>
                <li>
                  <strong>Restore & Replace:</strong> Opens all saved tabs in a
                  collection. You can choose to open them in the{" "}
                  <strong>Current Window</strong>, a <strong>New Window</strong>
                  , or <strong>Replace Current Window</strong> (which instantly
                  clears your existing tabs and swaps them with the collection).
                  For heavy collections (15+ tabs), Safe Load mode opens them in
                  batches to prevent browser crashes.
                </li>
              </ul>

              <h4 className="font-semibold text-slate-800 mt-8 mb-2">
                The Options Menu (...)
              </h4>
              <p className="text-slate-600 mb-3">
                Click the three-dot menu on a collection to access additional
                tools:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Select Multiple Tabs:</strong> Enable selection mode
                  to move or copy multiple tabs simultaneously.
                </li>
                <li>
                  <strong>Sort Tabs:</strong> Sort tabs by Name (A-Z, Z-A) or Date Added (Newest, Oldest). Pinned tabs remain safely anchored at the top regardless of the sort mode.
                </li>
                <li>
                  <strong>Move to Folder:</strong> Transfer the entire
                  collection into a designated folder.
                </li>
                <li>
                  <strong>Notes & Text Cards:</strong> Add a descriptive note to
                  the collection, or insert Text Cards between tabs to act as
                  visual dividers.
                </li>
                <li>
                  <strong>Export Links:</strong> Copy URLs to the clipboard in
                  plain text or Markdown format.
                </li>
                <li>
                  <strong>Advanced Tools:</strong> Execute Clean up duplicates,
                  Merge the collection, or configure Tab Rules for automatic
                  routing.
                </li>
              </ul>

              <h4 className="font-semibold text-slate-800 mt-8 mb-2">
                Tab Actions & Global Controls
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Tab Context Menu:</strong> Right-click any individual
                  tab to access dedicated actions like Pin, Open, Copy URL,
                  Snooze, Add Note, and Remove.
                </li>
                <li>
                  <strong>Open in Background:</strong> Toggle this option in
                  Settings to open tabs silently without losing focus on the
                  current dashboard view.
                </li>
              </ul>
            </section>

            {/* CHAPTER 3 */}
            <section id="routing" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                3. Saving & Organizing Tabs
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Saving Sessions
              </h3>
              <p className="text-slate-600 mb-4">
                Open tabs can be bulk-saved into a new Collection using these
                methods:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Extension Popup:</strong> Click the OrgaNice icon and
                  select <strong>Save Window</strong>.
                </li>
                <li>
                  <strong>Context Menu:</strong> Right-click on a webpage and
                  select <strong>Save Session</strong>. To immediately free up
                  memory, select <strong>Save & Close Session</strong>.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Directional Saving
              </h3>
              <p className="text-slate-600 mb-4">
                The extension popup provides options to close and save tabs
                based on their position relative to the active tab:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Save Tabs to the Left/Right:</strong> Captures and
                  closes all tabs on the specified side.
                </li>
                <li>
                  <strong>Save Other Tabs:</strong> Captures and closes all tabs
                  except the currently active one.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                The Side Panel
              </h3>
              <p className="text-slate-700 mb-4">
                The Side Panel provides active tab routing capabilities. Access
                it via <strong>Right-click &gt; Open Side Panel</strong> or
                through the extension popup. It contains three views:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Open:</strong> Displays active tabs. Allows switching,
                  closing, and muting tabs directly from the sidebar.
                </li>
                <li>
                  <strong>Save Tab:</strong> Search for an existing Collection
                  (or create a new one) and click the <strong>+</strong> icon to
                  save the active tab.
                </li>
                <li>
                  <strong>Find:</strong> A global search interface for locating
                  Workspaces, Folders, Collections, or saved Tabs.
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mt-6 mb-2">
                <p className="text-sm text-slate-600 m-0">
                  <strong>Side Panel Utilities:</strong> The bottom toolbar
                  contains tools to <strong>Dedup</strong> (close duplicates),{" "}
                  <strong>Hibernate</strong> (suspend tabs), or{" "}
                  <strong>Save Tabs</strong> in bulk.
                </p>
              </div>
            </section>

            {/* CHAPTER 4 */}
            <section id="automations" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                4. Smart Automations
              </h2>

              <p className="text-slate-600 mb-4">
                Tab Rules execute automated actions based on IF–THEN logic.
                Configure these rules by navigating to{" "}
                <strong>Settings &gt; Tab Rules</strong>.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Rule Configuration
              </h3>

              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong>1. Trigger:</strong> The event that initiates the rule
                  (e.g., When Tab Opens, When Saving Tabs, or When Switching
                  Workspace).
                </li>
                <li>
                  <strong>2. Condition:</strong> The criteria evaluated by the
                  rule. Supported match types include domain, full URL, tab
                  title, audio state, pinned status, or duplicate status.
                </li>
                <li>
                  <strong>3. Action:</strong> The operation executed upon a
                  positive match. Supported actions include Close, Mute,
                  Suspend, Snooze, Add to Chrome Group, or Route to
                  Workspace/Collection.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Managing Rules
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>
                  <strong>Templates:</strong> Pre-configured rule templates
                  (e.g., "Auto Duplicate Cleaner") are available for quick
                  setup.
                </li>
                <li>
                  <strong>Logic Operators:</strong> Rules with multiple
                  conditions can be set to require ALL conditions to match, or
                  ANY single condition to match.
                </li>
                <li>
                  <strong>Rule Priority:</strong> Execution follows a
                  top-to-bottom order. Use drag-and-drop in the rule list to
                  adjust priority levels.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Simple Auto-Save Rule (Quick Setup)
              </h3>
              <p className="text-slate-600 mb-4">
                If you need to quickly route tabs without configuring complex
                logic, you can create a basic auto-save rule directly from your
                dashboard.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong>How to access:</strong> Click the three-dot menu (
                  <strong>...</strong>) on any collection, navigate to{" "}
                  <strong>Advanced Tools</strong>, and select{" "}
                  <strong>Simple Auto-Save Rule</strong>.
                </li>
                <li>
                  <strong>Functionality:</strong> Simply enter a domain or
                  keyword (e.g.,{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    youtube.com
                  </code>
                  ). Any future tabs matching this input will automatically be
                  routed to this specific collection.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Route by Rules (Manual Execution)
              </h3>
              <p className="text-slate-600 mb-4">
                Instead of waiting for an automation trigger, you can manually
                apply your active Smart Rules to instantly organize any existing
                collection.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong>How to use:</strong> Click the three-dot menu (
                  <strong>...</strong>) on any collection, navigate to{" "}
                  <strong>Advanced Tools</strong>, and select{" "}
                  <strong>Route by Rules</strong>.
                </li>
                <li>
                  <strong>Preview Window:</strong> A dialog will appear showing
                  exactly which tabs match your rules and to which collections
                  they will be routed.
                </li>
                <li>
                  <strong>Execution:</strong> Upon confirmation, tabs are
                  automatically distributed to their target locations, helping
                  you quickly clean up a cluttered inbox.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">
                Pausing Tab Rules (Bypass)
              </h3>
              <p className="text-slate-600 mb-4">
                If you need to manually save tabs without triggering your active
                rules, you can temporarily pause automations in two ways:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong>Globally (Extension Menu):</strong> Open the OrgaNice
                  popup menu and toggle <strong>Pause Save Rules</strong>. This
                  bypasses all rules, allowing you to organize tabs manually.
                </li>
                <li>
                  <strong>Per Collection (Dashboard):</strong> Collections with
                  active rules display a lightning icon ({" "}
                  <Zap className="inline-block w-3.5 h-3.5 text-blue-500 mb-0.5" />{" "}
                  ) next to their name. Click it to pause or resume rules for
                  that specific collection.
                </li>
              </ul>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mt-8">
                <h4 className="font-semibold text-slate-800 flex items-center gap-2 mb-2">
                  Ignored URLs
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed m-0">
                  To exclude specific domains from bulk actions, add them to{" "}
                  <strong>Settings &gt; Ignored URLs</strong>.
                  <br />
                  <br />
                  Use the{" "}
                  <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">
                    *
                  </code>{" "}
                  wildcard to match partial strings. For example,{" "}
                  <strong>*mail.google.com*</strong> excludes all Gmail URLs
                  from bulk closure.
                  <br />
                  <br />
                  <span className="italic block">
                    Note: Ignored URLs apply strictly to bulk operations.
                    Manually saving an individual tab overrides this filter.
                  </span>
                </p>
              </div>
            </section>

            {/* CHAPTER 5 */}
            <section id="cleanup" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                5. Cleanup & Utilities
              </h2>
              <p className="text-slate-600 mb-6">
                OrgaNice includes utilities designed to optimize browser memory
                and manage database records.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Active Window Utilities
              </h3>
              <p className="text-slate-600 mb-3">
                Accessible from the bottom toolbar of the Side Panel:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Hibernate (Moon icon):</strong> Suspends all inactive
                  background tabs to release memory. Tabs actively playing audio
                  are automatically bypassed.
                </li>
                <li>
                  <strong>Dedup Open Tabs:</strong> Closes identical URLs within
                  the active window.
                </li>
                <li>
                  <strong>Cleanup View (Sparkles icon):</strong> Opens an
                  interface grouping all active tabs by domain, allowing
                  selective saving and closure.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Database Utilities
              </h3>
              <p className="text-slate-600 mb-3">
                Tools for modifying saved records:
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700">
                <li>
                  <strong>Clean Up Collection Duplicates:</strong> Accessible
                  via the Collection menu. Removes duplicate records within a
                  specific collection.
                </li>
                <li>
                  <strong>Merge Collections:</strong> Accessible via the
                  Collection menu. Combines the contents of two collections.
                </li>
                <li>
                  <strong>Find & Replace URLs:</strong> Accessible via{" "}
                  <strong>Settings &gt; Find & Replace</strong>. Executes batch
                  domain replacements across all saved records (e.g., updating{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    twitter.com
                  </code>{" "}
                  to{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-xs">
                    x.com
                  </code>
                  ).
                </li>
              </ul>
            </section>

            {/* CHAPTER 6 */}
            <section id="snooze" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                6. Snooze Tabs
              </h2>
              <p className="text-slate-600 mb-6">
                The Snooze feature schedules tabs or windows to close
                immediately and reopen automatically at a specified time.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Configuration
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Via Context Menu:</strong> Right-click a webpage and
                  select <strong>OrgaNice &gt; Schedule This Tab...</strong> (or{" "}
                  Schedule All Tabs in Window).
                </li>
                <li>
                  <strong>Via Extension Popup:</strong> Click the extension
                  icon, select <strong>Schedule Tabs (Snooze)...</strong>,
                  define the target, and select the timeframe.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Time Options & Execution
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Presets:</strong> Standard intervals such as Later
                  Today (+3 hours), Tomorrow (8:00 AM), or This Weekend.
                </li>
                <li>
                  <strong>Custom Time:</strong> A calendar interface for precise
                  scheduling.
                </li>
                <li>
                  <strong>Execution:</strong> Upon reaching the scheduled time,
                  the tab opens in the background and generates a system
                  notification.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Management
              </h3>
              <p className="text-slate-600 mb-6">
                Active snooze tasks can be monitored, executed early, or
                cancelled via the <strong>Snoozed</strong> tab in the Dashboard.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-sm text-slate-600 m-0">
                  <strong>Plan Limits:</strong> The Free tier supports up to 10
                  concurrent snooze sessions. The PRO tier removes this
                  limitation.
                </p>
              </div>
            </section>

            {/* CHAPTER 7 */}
            <section id="search-notes" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                7. Search & Notes
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Global Search
              </h3>
              <p className="text-slate-600 mb-3">
                Access the command palette by pressing{" "}
                <kbd className="bg-slate-100 border px-1.5 py-0.5 rounded text-xs font-mono font-semibold">
                  Cmd/Ctrl + K
                </kbd>{" "}
                or using the <strong>Find</strong> view in the Side Panel.
              </p>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Unified Scope:</strong> Queries return matching active
                  tabs, saved links, Collections, Folders, and Workspaces.
                </li>
                <li>
                  <strong>Actions:</strong> Copy URLs directly from search
                  results or launch entire matched collections.
                </li>
                <li>
                  <strong>Save Results:</strong> Click{" "}
                  <strong>Save Results as Collection</strong> to generate a new
                  collection from the current search query.
                </li>
                <li>
                  <strong>Quick Creation:</strong> When searching yields no
                  matches in the popup menu, click the prompt to instantly
                  create a new collection using your search term.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Note Formatting
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Quick Notes (Dashboard):</strong> A floating rich-text
                  editor for independent notes, supporting color-coding.
                </li>
                <li>
                  <strong>Collection Notes:</strong> Contextual text attached to
                  the header of a specific collection.
                </li>
                <li>
                  <strong>Note Tabs:</strong> Non-URL entries that act as text
                  dividers between links inside a collection.
                </li>
              </ul>
            </section>

            {/* CHAPTER 8 */}
            <section id="data-sync" className="mb-24 scroll-mt-32">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">
                8. Data & Sync
              </h2>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Auto-Save Snapshots
              </h3>
              <p className="text-slate-600 mb-8">
                OrgaNice automatically records a snapshot of open tabs every{" "}
                <strong>15 minutes</strong>. Backup records can be restored from
                the <strong>Session History</strong> view. This interval is
                adjustable in Settings.
              </p>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Import & Export
              </h3>
              <ul className="list-disc pl-5 space-y-3 text-slate-700 mb-8">
                <li>
                  <strong>Importing:</strong> Supports migrations from Toby or
                  standard HTML Bookmark files. Data can be appended (Merge) or
                  overwritten (Replace).
                </li>
                <li>
                  <strong>Exporting:</strong> Generates a complete JSON backup
                  containing all Workspaces, Collections, Rules, and Notes.
                </li>
              </ul>

              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Cloud Sync (PRO)
              </h3>
              <p className="text-slate-600 mb-8">
                PRO tier users can synchronize data across browsers logged into
                the same Google account. Cloud sync can be disabled in Settings
                for local-only storage.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h4 className="font-semibold text-red-900 flex items-center gap-2 mb-3">
                  Data Deletion
                </h4>
                <p className="text-sm text-red-800/90 mb-3">
                  Accessible at the bottom of the Settings menu:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-red-800">
                  <li>
                    <strong>Reset Local Database:</strong> Purges all OrgaNice
                    data from the active local machine.
                  </li>
                  <li>
                    <strong>Delete Cloud Data:</strong> Permanently removes
                    synchronized data from the cloud server. Local data remains
                    unaffected.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
