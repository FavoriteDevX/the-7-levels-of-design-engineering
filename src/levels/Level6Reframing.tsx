import React, { useState, useEffect } from 'react';
import { Timer, Sparkles, Send } from 'lucide-react';

export default function Level6Reframing() {
  const [seconds, setSeconds] = useState(0);
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Strategic Reframe: From "To-Do List" to "Async Standup Engine"
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Like Loom (video → replacing meetings) or Superhuman (email → speed game), the underlying database stays identical while the framing creates new value.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-950 border border-slate-800 px-3 py-1.5 rounded-lg">
          <Timer className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-sm text-emerald-400">
            Inbox Zero Speed: {seconds}s
          </span>
        </div>
      </div>

      <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-950/60 to-slate-950 border border-indigo-500/30 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
            Async Team Broadcast Ready
          </p>
          <p className="text-sm text-slate-200 mt-1">
            {completed} updates triaged in {seconds}s — replace your 30-minute daily standup meeting with a 1-click async digest.
          </p>
        </div>
        <button
          onClick={() => setCompleted((c) => c + 1)}
          className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 shrink-0"
        >
          <Send className="w-3.5 h-3.5" /> Triage & Broadcast
        </button>
      </div>
    </div>
  );
}
