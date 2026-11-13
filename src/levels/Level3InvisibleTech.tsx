import React, { useState } from 'react';
import { Zap, Server, CheckCircle2, Loader2 } from 'lucide-react';

export default function Level3InvisibleTech() {
  const [items, setItems] = useState([
    { id: 1, text: 'Stream audio chunks via P2P local cache', synced: true },
    { id: 2, text: 'Pre-fetch next workspace view in background', synced: true },
  ]);
  const [input, setInput] = useState('');
  const [optimisticMode, setOptimisticMode] = useState(true);
  const [isLoadingSlow, setIsLoadingSlow] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newItem = { id: Date.now(), text: input, synced: false };
    setInput('');

    if (optimisticMode) {
      // Instant UI update before server responds
      setItems((prev) => [newItem, ...prev]);
      setTimeout(() => {
        setItems((prev) =>
          prev.map((item) => (item.id === newItem.id ? { ...item, synced: true } : item))
        );
      }, 1200);
    } else {
      // Traditional blocking network request
      setIsLoadingSlow(true);
      setTimeout(() => {
        setItems((prev) => [{ ...newItem, synced: true }, ...prev]);
        setIsLoadingSlow(false);
      }, 1200);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Optimistic UI vs. Blocking Network Latency (1.2s simulated)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Like early Spotify P2P streaming, great engineering hides network latency so the tech disappears.
          </p>
        </div>

        <button
          onClick={() => setOptimisticMode(!optimisticMode)}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
            optimisticMode ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300'
          }`}
        >
          {optimisticMode ? 'Mode: Optimistic (0ms)' : 'Mode: Blocking (1200ms)'}
        </button>
      </div>

      <form onSubmit={handleAdd} className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task and feel the latency difference..."
          className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={isLoadingSlow}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"
        >
          {isLoadingSlow && <Loader2 className="w-4 h-4 animate-spin" />}
          Add Task
        </button>
      </form>

      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center justify-between text-sm"
          >
            <span className="text-slate-200">{item.text}</span>
            <span className="flex items-center gap-1.5 text-xs">
              {item.synced ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Synced</span>
                </>
              ) : (
                <>
                  <Server className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="text-amber-400">Syncing in background...</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
