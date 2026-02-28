import { Info } from "lucide-react";

function Information() {
  return (
    <section className="mt-12 pt-12 border-t border-slate-200">
      <div className="flex items-center gap-2 mb-6">
        <Info className="w-5 h-5 text-slate-400" />
        <h2 className="font-semibold text-slate-700">
          Understanding Tariff Bands
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 bg-white rounded-2xl border border-slate-200">
          <h4 className="font-bold text-sm mb-2">What are Bands?</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Electricity distribution companies categorize customers into bands
            based on the guaranteed minimum hours of power supply per day.
          </p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200">
          <h4 className="font-bold text-sm mb-2">Cost Variations</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Higher bands (like Band A) have higher rates because they receive
            more consistent power supply compared to lower bands.
          </p>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200">
          <h4 className="font-bold text-sm mb-2">Reading Your Meter</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Always record the numbers before the decimal point on your meter.
            The difference between readings is your actual usage in kWh.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Information;
