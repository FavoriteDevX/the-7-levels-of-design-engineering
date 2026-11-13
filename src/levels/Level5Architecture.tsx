import React, { useState } from 'react';
import { Tag, Filter } from 'lucide-react';

interface UnifiedItem {
  id: number;
  title: string;
  tags: string[]; // Author, status, timestamp, and custom labels share ONE primitive
}

const DATA: UnifiedItem[] = [
  { id: 1, title: 'Fix audio desync on timeline', tags: ['@nico', '#new', '#bug', '01:24'] },
  { id: 2, title: 'Update onboarding default toggles', tags: ['@sarah', '#done', '#ux', '00:45'] },
  { id: 3, title: 'Ship middle-truncation helper', tags: ['@nico', '#important', '#ui', '03:10'] },
  { id: 4, title: 'Benchmark IndexedDB sync speed', tags: ['@alex', '#new', '#perf', '02:05'] },
];

export default function Level5Architecture() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(DATA.flatMap((item) => item.tags)));
  const filtered = selectedTag
    ? DATA.filter((item) => item.tags.includes(selectedTag))
    : DATA;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div>
        <h3 className="font-semibold text-white flex items-center gap-2">
          <Tag className="w-4 h-4 text-indigo-400" />
          Structural Logic: "Everything is a Tag" (Flask / Notion Pattern)
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          Instead of separate database columns and UI menus for Author, Status, Timestamp, and Notifications, every metadata property is a unified tag.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-xs text-slate-500 flex items-center gap-1 mr-1">
          <Filter className="w-3.5 h-3.5" /> Unified Query:
        </span>
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-2.5 py-1 rounded-md text-xs font-mono transition ${
            selectedTag === null ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          ALL ({DATA.length})
        </button>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition ${
              selectedTag === tag
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex flex-wrap items-center justify-between gap-2"
          >
            <span className="text-sm text-slate-200">{item.title}</span>
            <div className="flex gap-1.5">
              {item.tags.map((t) => (
                <span
                  key={t}
                  onClick={() => setSelectedTag(t)}
                  className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs cursor-pointer hover:bg-indigo-950"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
