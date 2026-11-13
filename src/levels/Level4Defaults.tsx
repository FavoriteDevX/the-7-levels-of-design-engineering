import React, { useState } from 'react';
import { Sliders, BarChart3 } from 'lucide-react';

export default function Level4Defaults() {
  const [preset, setPreset] = useState<'whatsapp' | 'imessage'>('whatsapp');
  const [readReceipts, setReadReceipts] = useState(true);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [analyticsOptIn, setAnalyticsOptIn] = useState(true);

  const applyPreset = (type: 'whatsapp' | 'imessage') => {
    setPreset(type);
    if (type === 'whatsapp') {
      setReadReceipts(true);
      setAutoPlayNext(true);
      setAnalyticsOptIn(true);
    } else {
      setReadReceipts(false);
      setAutoPlayNext(false);
      setAnalyticsOptIn(false);
    }
  };

  const adoptionRate =
    (readReceipts ? 32 : 5) + (autoPlayNext ? 35 : 8) + (analyticsOptIn ? 28 : 4);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h3 className="font-semibold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-indigo-400" />
            Default Bias Simulator (Opt-Out vs. Opt-In)
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            90%+ of users never change default settings. Small defaults create completely different social and business outcomes.
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => applyPreset('whatsapp')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              preset === 'whatsapp' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Preset: Opt-Out (WhatsApp/Netflix)
          </button>
          <button
            onClick={() => applyPreset('imessage')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              preset === 'imessage' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            Preset: Opt-In (Privacy-First)
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3 bg-slate-950/60 p-4 rounded-lg border border-slate-800">
          <label className="flex items-center justify-between text-sm cursor-pointer">
            <span>Read Receipts ("Seen" status)</span>
            <input
              type="checkbox"
              checked={readReceipts}
              onChange={(e) => setReadReceipts(e.target.checked)}
              className="accent-indigo-500 w-4 h-4"
            />
          </label>
          <label className="flex items-center justify-between text-sm cursor-pointer">
            <span>Auto-Advance Next Task / Episode</span>
            <input
              type="checkbox"
              checked={autoPlayNext}
              onChange={(e) => setAutoPlayNext(e.target.checked)}
              className="accent-indigo-500 w-4 h-4"
            />
          </label>
          <label className="flex items-center justify-between text-sm cursor-pointer">
            <span>Default Search & Telemetry Sharing</span>
            <input
              type="checkbox"
              checked={analyticsOptIn}
              onChange={(e) => setAnalyticsOptIn(e.target.checked)}
              className="accent-indigo-500 w-4 h-4"
            />
          </label>
        </div>

        <div className="bg-slate-950/60 p-4 rounded-lg border border-slate-800 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span>Predicted Feature Retention / Social Pressure</span>
          </div>
          <div className="text-3xl font-bold text-white mb-2">{adoptionRate}%</div>
          <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="bg-indigo-500 h-full transition-all duration-300"
              style={{ width: `${adoptionRate}%` }}
            />
          </div>
          <p className="text-xs text-slate-400 mt-2">
            {readReceipts
              ? 'Social dynamic: "Seen without a reply" creates urgency and anxiety.'
              : 'Social dynamic: Plausible deniability reduces messaging pressure.'}
          </p>
        </div>
      </div>
    </div>
  );
}
