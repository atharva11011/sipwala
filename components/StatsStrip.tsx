'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { scaleIn, staggerContainer } from '@/lib/animations';

type DotAccent = 'blue' | 'green' | 'gold' | 'red';

export type StatItem = {
  value: string;
  label: string;
  dot: DotAccent;
};

function dotClass(dot: DotAccent) {
  if (dot === 'green') return 'bg-[var(--green-500)]';
  if (dot === 'gold') return 'bg-[var(--gold-base)]';
  if (dot === 'red') return 'bg-[var(--red-500)]';
  return 'bg-[var(--blue-600)]';
}

export default function StatsStrip({ stats }: { stats: readonly StatItem[] }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[var(--gray-50)] border-t border-[var(--gray-200)] py-10">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="bg-[var(--surface)] border border-[var(--borderSoft)] rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, idx) => {
              const hasMobileLeftBorder = idx % 2 === 1;
              const hasMobileTopBorder = idx >= 2;
              const hasMdLeftBorder = idx > 0;

              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  transition={shouldReduceMotion ? { duration: 0 } : undefined}
                  className={
                    'text-center px-6 py-7 md:py-8 ' +
                    (hasMobileLeftBorder ? 'border-l border-[var(--gray-200)] ' : '') +
                    (hasMobileTopBorder ? 'border-t border-[var(--gray-200)] ' : '') +
                    (hasMdLeftBorder ? 'md:border-l md:border-[var(--gray-200)] ' : '') +
                    (hasMobileTopBorder ? 'md:border-t-0 ' : '')
                  }
                >
                  <div className="flex items-center justify-center gap-2 font-headline text-[20px] md:text-[26px] font-extrabold text-[var(--text-primary)] leading-[1.15] tracking-tight">
                    <motion.span
                      initial={{ scale: shouldReduceMotion ? 1 : 0.85, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className={'inline-block w-2 h-2 rounded-full ' + dotClass(stat.dot)}
                      aria-hidden="true"
                    />
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[12px] md:text-[13px] font-normal text-[var(--text-muted)] leading-[1.75]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
