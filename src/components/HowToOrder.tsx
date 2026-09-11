import React from 'react';
import {
  LayoutGrid,
  PackageCheck,
  MessageSquareShare,
  WalletCards,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { ORDER_STEPS } from '../data/products';

export const HowToOrder: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LayoutGrid':
        return <LayoutGrid className="w-6 h-6 text-emerald-400" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-emerald-400" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-6 h-6 text-emerald-400" />;
      case 'WalletCards':
        return <WalletCards className="w-6 h-6 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="cara-order" className="py-20 sm:py-24 bg-[#090a0d] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase mb-3">
            PANDUAN PEMESANAN
          </div>
          <h2
            id="cara-order-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading uppercase"
          >
            CARA ORDER
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            5 langkah mudah bertransaksi di DHOXZ-UT tanpa ribet
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {ORDER_STEPS.map((step, idx) => (
            <div
              key={step.number}
              id={`order-step-${step.number}`}
              className="relative rounded-2xl bg-zinc-900/60 border border-white/10 hover:border-emerald-500/30 p-5 sm:p-6 transition-all duration-200 group flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono-tech font-black text-2xl sm:text-3xl text-zinc-600 group-hover:text-emerald-400/80 transition-colors">
                  {step.number}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(step.iconName)}
                </div>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-white font-heading mb-2 tracking-wide group-hover:text-emerald-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress connector indicator on desktop */}
              {idx < ORDER_STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-zinc-600">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
