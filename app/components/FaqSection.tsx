"use client";

import { useState } from "react";
import { Icons } from "./Icons";

const faqs = [
  {
    q: "Can I use OrgaNice for free?",
    a: "Yes! All local management features (Create/Edit/Delete Workspaces, Collections, Tabs, Notes) are 100% free forever. You get up to 15 nested folders for free.",
  },
  {
    q: "How do I import from Toby?",
    a: "We have a dedicated 'Import from Toby' feature in the settings. It reads your Toby backup and organizes it into OrgaNice collections instantly.",
  },
  {
    q: "Is my browsing data private?",
    a: "Absolutely. OrgaNice is designed with a 'Local-First' architecture. Your tabs and notes live on your device. If you use Cloud Sync (Pro), your data is securely encrypted in the cloud and accessible only by you.",
  },
];

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          Common Questions
        </h2>
        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex justify-between items-center w-full text-left font-semibold text-slate-800 hover:text-indigo-600 transition cursor-pointer"
              >
                {faq.q}
                <span
                  className={`transform transition-transform duration-200 ${
                    openFaq === i
                      ? "rotate-180 text-indigo-600"
                      : "text-slate-400"
                  }`}
                >
                  <Icons.ChevronDown />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === i
                    ? "max-h-40 opacity-100 mt-3"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-slate-500 text-sm leading-relaxed pr-8">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
