import React, { useState } from 'react';
import { Layers } from 'lucide-react';
import Level1Details from './levels/Level1Details';
import Level2Interactions from './levels/Level2Interactions';
import Level3InvisibleTech from './levels/Level3InvisibleTech';
import Level4Defaults from './levels/Level4Defaults';
import Level5Architecture from './levels/Level5Architecture';
import Level6Reframing from './levels/Level6Reframing';
import Level7Vision from './levels/Level7Vision';

const LEVELS = [
  { id: 1, name: 'Level 1: Micro-Details', tag: 'Visuals', component: Level1Details },
  { id: 2, name: 'Level 2: Interactions', tag: 'Behavior', component: Level2Interactions },
  { id: 3, name: 'Level 3: Invisible Tech', tag: 'Performance', component: Level3InvisibleTech },
  { id: 4, name: 'Level 4: Default Bias', tag: 'Psychology', component: Level4Defaults },
  { id: 5, name: 'Level 5: Structural Logic', tag: 'Architecture', component: Level5Architecture },
  { id: 6, name: 'Level 6: Strategic Reframe', tag: 'Positioning', component: Level6Reframing },
  { id: 7, name: 'Level 7: Holistic Vision', tag: 'Unified Product', component: Level7Vision },
];

export default function App() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const ActiveComponent = LEVELS.find((l) => l.id === currentLevel)?.component || Level1Details;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
            <Layers className="w-3.5 h-3.5" />
            Interactive Design Engineering Lab
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            The 7 Levels of Tech Design
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Step through each layer of software craftsmanship—from pixel-level affordances to structural architecture and product vision.
          </p>
        </header>

        {/* Level Selector Navigation */}
        <nav className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {LEVELS.map((level) => {
            const isActive = level.id === currentLevel;
            return (
              <button
                key={level.id}
                onClick={() => setCurrentLevel(level.id)}
                className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <span className="text-[10px] uppercase tracking-wider opacity-75">
                  {level.tag}
                </span>
                <span className="text-xs font-semibold mt-1 leading-snug">
                  {level.name}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Active Level Playground */}
        <main>
          <ActiveComponent />
        </main>
      </div>
    </div>
  );
}
