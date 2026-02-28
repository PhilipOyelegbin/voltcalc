import { Zap } from "lucide-react";

function Header() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold text-xl tracking-tight">ie-VoltCalc</h1>
        </div>
        <div className="text-xs font-medium text-slate-500 uppercase tracking-widest">
          Consumption Reader
        </div>
      </div>
    </header>
  );
}

export default Header;
