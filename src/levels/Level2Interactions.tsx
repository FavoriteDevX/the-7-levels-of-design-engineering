import React, { useState, useEffect } from 'react';
import { Keyboard, PhoneCall, ShieldAlert, ArrowDown } from 'lucide-react';

export default function Level2Interactions() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Review mobile gesture physics', done: false },
    { id: 2, title: 'Implement keyboard-first triage', done: false },
    { id: 3, title: 'Test context-aware security banner', done: true },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOnPhoneCall, setIsOnPhoneCall] = useState(false);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'j' || e.key === 'ArrowDown') {
        setActiveIndex((prev) => Math.min(prev + 1, tasks.length - 1));
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setTasks((prev) =>
          prev.map((t, idx) => (idx === activeIndex ? { ...t, done: !t.done } : t))
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, tasks.length]);

  return (
    <div className="space-y-4">
      {/* Revolut-style Context-Aware Scam Protection */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <PhoneCall className="w-5 h-5 text-indigo-400" />
          <div>
            <p className="text-sm font-medium text-white">Simulate Active Phone Call</p>
            <p className="text-xs text-slate-400">Triggers Revolut-style anti-phishing awareness</p>
          </div>
        </div>
        <button
          onClick={() => setIsOnPhoneCall(!isOnPhoneCall)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
            isOnPhoneCall ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          {isOnPhoneCall ? 'End Call' : 'Simulate Call'}
        </button>
      </div>

      {isOnPhoneCall && (
        <div className="bg-rose-950/80 border border-rose-500/50 p-4 rounded-xl flex items-start gap-3 animate-pulse">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-semibold text-rose-200">PulseTask Support is NOT calling you</p>
            <p className="text-rose-300/80 text-xs mt-0.5">
              We detected an active voice call. Never share workspace tokens or approve actions requested over the phone.
            </p>
          </div>
        </div>
      )}

      {/* Keyboard-First List + Pull to Refresh button */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Keyboard className="w-4 h-4 text-indigo-400" />
            <span>Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200">J</kbd> / <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200">K</kbd> to move, <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-200">Space</kbd> to toggle</span>
          </div>
          <button
            onClick={() => setRefreshCount((c) => c + 1)}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300"
          >
            <ArrowDown className="w-3.5 h-3.5" /> Pull Feed ({refreshCount})
          </button>
        </div>

        <div className="space-y-2">
          {tasks.map((task, idx) => (
            <div
              key={task.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-3 rounded-lg border flex items-center justify-between transition cursor-pointer ${
                idx === activeIndex
                  ? 'bg-indigo-950/40 border-indigo-500/60'
                  : 'bg-slate-950/50 border-slate-800'
              }`}
            >
              <span className={`text-sm ${task.done ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                {task.title}
              </span>
              <span className="text-xs text-slate-500">{task.done ? 'Completed' : 'Pending'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
