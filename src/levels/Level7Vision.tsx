import React, { useState } from 'react';
import { Eye, Sparkles, Check, Zap, Tag, Sliders } from 'lucide-react';

export default function Level7Vision() {
  const [xrayMode, setXrayMode] = useState(true);
  const [items, setItems] = useState([
    { id: 1, title: 'ship_iphone_keyboard_dynamic_hitboxes_v3.swift', tags: ['@ken', '#urgent'], done: false },
    { id: 2, title: 'unify_all_seven_product_layers_release_v1.md', tags: ['@enrico', '#vision'], done: true },
  ]);

  const toggle = (id: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-indigo-950/40 border border-indigo-500/40 p-4 rounded-xl">
        <div>
          <h3 className="font-semibold text-white">Level 7: All 6 Layers Working Together</h3>
          <p className="text-xs text-slate-300">
            Toggle <strong>X-Ray Inspector Mode</strong> to reveal how every level operates simultaneously inside one cohesive product.
          </p>
        </div>
        <button
          onClick={() => setXrayMode(!xrayMode)}
          className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition ${
            xrayMode ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-slate-800 text-slate-300'
          }`}
        >
          <Eye className="w-4 h-4" />
          {xrayMode ? 'X-Ray Mode: ON' : 'X-Ray Mode: OFF'}
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4 relative">
        {/* Level 6 Reframe Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 squircle bg-indigo-600 flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <span className="font-semibold text-white text-sm">PulseTask Async Workspace</span>
              {xrayMode && (
                <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  L1 Squircle + L6 Async Reframe
                </span>
              )}
            </div>
          </div>
          {xrayMode && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
              <Zap className="w-3 h-3" /> L3 Local-First Sync Active
            </span>
          )}
        </div>

        {/* Unified Task Rows */}
        <div className="space-y-2.5">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => toggle(item.id)}
              className="p-3.5 rounded-lg bg-slate-950/70 border border-slate-800 hover:border-indigo-500/50 cursor-pointer flex flex-wrap items-center justify-between gap-2 transition"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                    item.done ? 'bg-indigo-600 border-indigo-500 text-white' : 'border-slate-600'
                  }`}
                >
                  {item.done && <Check className="w-3.5 h-3.5" />}
                </div>
                <span className={`font-mono text-sm ${item.done ? 'line-through text-slate-500' : 'text-slate-100'}`}>
                  {item.title.slice(0, 14)}...{item.title.slice(-11)}
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-mono text-xs">
                    {tag}
                  </span>
                ))}
                {xrayMode && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 flex items-center gap-1">
                    <Tag className="w-2.5 h-2.5" /> L1 + L2 + L5
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer with Level 1 Anchor + Level 4 Default indicator */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>© 2026 PulseTask — All systems operational</span>
          {xrayMode && (
            <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1">
              <Sliders className="w-3 h-3" /> L4 Ethical Defaults + L1 Load Anchor
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
