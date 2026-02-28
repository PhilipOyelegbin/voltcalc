import { CreditCard, History, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import type { TariffBand } from "../../interface";

function Result({
  result,
}: {
  result: { cost: number; consumption: number; band: TariffBand } | null;
}) {
  return (
    <div className="lg:col-span-5">
      <AnimatePresence mode="wait">
        {result ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-6"
          >
            <div className="bg-emerald-600 rounded-3xl p-8 text-white shadow-xl shadow-emerald-100 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-8 -bottom-8 w-32 h-32 bg-emerald-400/20 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <p className="text-emerald-100 text-sm font-medium uppercase tracking-wider mb-1">
                  Estimated Cost
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    ₦
                    {result.cost.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-emerald-500/30 pt-6">
                  <div>
                    <p className="text-emerald-100 text-[10px] uppercase tracking-widest mb-1">
                      Consumption
                    </p>
                    <p className="text-xl font-semibold">
                      {result.consumption.toFixed(2)}{" "}
                      <span className="text-sm font-normal opacity-80">
                        kWh
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-[10px] uppercase tracking-widest mb-1">
                      Tariff Rate
                    </p>
                    <p className="text-xl font-semibold">
                      ₦{result.band.rate.toFixed(2)}{" "}
                      <span className="text-sm font-normal opacity-80">
                        /kWh
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                Usage Insights
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm text-slate-500">Selected Band</span>
                  <span className="text-sm font-medium text-slate-900">
                    {result.band.name}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm text-slate-500">Service Level</span>
                  <span className="text-sm font-medium text-slate-900">
                    {result.band.description}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                  <span className="text-sm text-slate-500">
                    Daily Availability
                  </span>
                  <span className="text-sm font-medium text-slate-900">
                    {result.band.hours}
                  </span>
                </div>
              </div>
              <div className="pt-2">
                <button className="w-full py-3 bg-emerald-50 text-emerald-700 rounded-xl text-sm font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Proceed to Payment
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full min-h-[300px] bg-slate-100/50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4">
              <History className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="text-slate-600 font-medium mb-2">
              No Calculation Yet
            </h3>
            <p className="text-slate-400 text-sm max-w-[200px]">
              Enter your meter readings to see your consumption analysis.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Result;
