import React, { useState } from 'react';
import { FileText, Check } from 'lucide-react';

function MiddleTruncate({ text, maxLength = 26 }: { text: string; maxLength?: number }) {
  if (text.length <= maxLength) return <span>{text}</span>;
  const side = Math.floor((maxLength - 3) / 2);
  return (
    <span title={text} className="font-mono text-sm">
      {text.slice(0, side)}
      <span className="text-indigo-400 font-bold">...</span>
      {text.slice(-side)}
    </span>
  );
}

export default function Level1Details() {
  const [selected, setSelected] = useState<string[]>(['item-1']);
  const [showFooter, setShowFooter] = useState(true);

  const toggleItem = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const files = [
    { id: 'item-1', name: 'Q4_product_roadmap_final_approved_v1.pdf' },
    { id: 'item-2', name: 'Q4_product_roadmap_final_approved_v2.pdf' },
    { id: 'item-3', name: 'architecture_migration_spec_draft_v4.md' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-white">1. Middle-Truncation & Square Checkboxes</h3>
          <button
            onClick={() => setShowFooter(!showFooter)}
            className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 cursor-pointer transition"
          >
            {showFooter ? 'Hide Page Anchor' : 'Show Page Anchor'}
          </button>
        </div>

        <p className="text-sm text-slate-400 mb-4">
          Standard truncation hides the version (<code className="text-rose-400">...v1.pdf</code> vs <code className="text-rose-400">...v2.pdf</code>). 
          Middle-truncation preserves both start and end. Notice also the sharp-rounded checkboxes (signaling multi-select) and expanded hitboxes.
        </p>

        <div className="divide-y divide-slate-800 border border-slate-800 rounded-lg overflow-hidden">
          {files.map((file) => {
            const isChecked = selected.includes(file.id);
            return (
              <div
                key={file.id}
                onClick={() => toggleItem(file.id)}
                className="flex items-center justify-between p-3.5 bg-slate-950/60 hover:bg-slate-800/60 cursor-pointer select-none transition group"
              >
                <div className="flex items-center gap-3">
                  {/* Expanded invisible hitbox wrapper */}
                  <div className="p-1 -m-1">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center transition ${
                        isChecked
                          ? 'bg-indigo-600 border-indigo-500 text-white'
                          : 'border-slate-600 group-hover:border-slate-400'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                  <FileText className="w-4 h-4 text-slate-400" />
                  <MiddleTruncate text={file.name} maxLength={28} />
                </div>
                <span className="text-xs text-slate-500 group-hover:text-indigo-400 transition">
                  Click anywhere on row
                </span>
              </div>
            );
          })}
        </div>

        {/* Google 1998 Copyright Anchor Lesson */}
        {showFooter && (
          <div className="mt-6 pt-3 border-t border-slate-800/80 text-center text-xs text-slate-500">
            © 2026 PulseTask Inc. — Visual anchor signaling page load completion (Early Google UX Pattern)
          </div>
        )}
      </div>
    </div>
  );
}
