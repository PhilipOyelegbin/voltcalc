import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calculator, ArrowRight, RotateCcw, AlertCircle } from "lucide-react";
import type { TariffBand } from "./interface";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Information from "./components/layout/Information";
import Result from "./components/layout/Result";
import { FormButton } from "./components/ui/Button";
import { TextInput } from "./components/ui/Input";

// Tarrif plans based on typical Nigerian electricity distribution company offerings
const TARIFF_BANDS: TariffBand[] = [
  {
    id: "A",
    name: "Band A",
    rate: 209.5,
    description: "Premium Service",
    hours: "20+ hours/day",
  },
  {
    id: "B",
    name: "Band B",
    rate: 69.75,
    description: "Standard Plus",
    hours: "16-20 hours/day",
  },
  {
    id: "C",
    name: "Band C",
    rate: 53.41,
    description: "Standard",
    hours: "12-16 hours/day",
  },
  {
    id: "D",
    name: "Band D",
    rate: 45.29,
    description: "Basic Plus",
    hours: "8-12 hours/day",
  },
  {
    id: "E",
    name: "Band E",
    rate: 45.29,
    description: "Basic",
    hours: "4-8 hours/day",
  },
];

function App() {
  const [currentReading, setCurrentReading] = useState<string>("");
  const [previousReading, setPreviousReading] = useState<string>("");
  const [selectedBandId, setSelectedBandId] = useState<string>(
    TARIFF_BANDS[0].id,
  );
  const [result, setResult] = useState<{
    consumption: number;
    cost: number;
    band: TariffBand;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const selectedBand = useMemo(
    () => TARIFF_BANDS.find((b) => b.id === selectedBandId) || TARIFF_BANDS[0],
    [selectedBandId],
  );

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const current = parseFloat(currentReading);
    const previous = parseFloat(previousReading);

    if (isNaN(current) || isNaN(previous)) {
      setError("Please enter valid numerical readings.");
      return;
    }

    if (current < previous) {
      setError("Current reading cannot be less than previous reading.");
      return;
    }

    const consumption = current - previous;
    const cost = consumption * selectedBand.rate;

    setResult({
      consumption,
      cost,
      band: selectedBand,
    });
  };

  const handleReset = () => {
    setCurrentReading("");
    setPreviousReading("");
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-slate-900 font-sans selection:bg-emerald-100">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-sm border border-slate-200 p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-slate-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Calculate Usage</h2>
                  <p className="text-sm text-slate-500">
                    Enter your meter readings below
                  </p>
                </div>
              </div>

              <form onSubmit={handleCalculate} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextInput
                    containerClass="space-y-2"
                    label="Previous Reading (kWh)"
                    labelClass="text-sm font-medium text-slate-700 ml-1"
                    name="previous"
                    type="number"
                    step="0.01"
                    value={previousReading}
                    onChange={(e) => setPreviousReading(e.target.value)}
                    placeholder="0.00"
                    inputClass="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all bg-slate-50/50"
                    required
                  />

                  <TextInput
                    containerClass="space-y-2"
                    label="Current Reading (kWh)"
                    labelClass="text-sm font-medium text-slate-700 ml-1"
                    name="current"
                    type="number"
                    step="0.01"
                    value={currentReading}
                    onChange={(e) => setCurrentReading(e.target.value)}
                    placeholder="0.00"
                    inputClass="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all bg-slate-50/50"
                    required
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-slate-700 ml-1">
                    Select Tariff Band
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {TARIFF_BANDS.map((band) => (
                      <button
                        key={band.id}
                        type="button"
                        onClick={() => setSelectedBandId(band.id)}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          selectedBandId === band.id
                            ? "border-emerald-500 bg-emerald-50 ring-1 ring-emerald-500"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ${
                              selectedBandId === band.id
                                ? "bg-emerald-500 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {band.name}
                          </span>
                          <span className="text-sm font-semibold text-slate-900">
                            ₦{band.rate.toFixed(2)}/kWh
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 leading-tight">
                          {band.description}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">
                          {band.hours}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 p-3 bg-red-50 text-red-600 rounded-xl text-sm"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-3 pt-2">
                  <FormButton
                    type="submit"
                    className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group shadow-lg shadow-slate-200"
                  >
                    Calculate Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </FormButton>

                  <FormButton
                    type="button"
                    title="Reset"
                    onClick={handleReset}
                    className="px-6 bg-white border border-slate-200 text-slate-600 rounded-2xl hover:bg-slate-50 transition-colors flex items-center justify-center"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </FormButton>
                </div>
              </form>
            </motion.div>
          </div>

          <Result result={result} />
        </div>

        <Information />
      </main>

      <Footer />
    </div>
  );
}

export default App;
