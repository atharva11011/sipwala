import Link from "next/link";

type Goal = {
  icon: string;
  title: string;
  desc: string;
  accentBarClass: string;
  iconWrapClass: string;
  iconClass: string;
  hoverRadialClass: string;
};

const goals: Goal[] = [
  {
    icon: "flight",
    title: "Vacation Planning",
    desc: "Fund your dream trips",
    accentBarClass: "bg-[var(--blue-700)]",
    iconWrapClass: "bg-[var(--blue-50)]",
    iconClass: "text-[var(--blue-700)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--blue-700-rgb)/0.08)_0%,transparent_70%)]",
  },
  {
    icon: "directions_car",
    title: "Car Planning",
    desc: "Drive your dream vehicle",
    accentBarClass: "bg-[var(--gold-dark)]",
    iconWrapClass: "bg-[var(--gold-light)]",
    iconClass: "text-[var(--gold-dark)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--gold-dark-rgb)/0.08)_0%,transparent_70%)]",
  },
  {
    icon: "school",
    title: "Child's Education",
    desc: "Secure their future",
    accentBarClass: "bg-[var(--navy-700)]",
    iconWrapClass: "bg-[var(--gray-100)]",
    iconClass: "text-[var(--navy-700)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--navy-700-rgb)/0.08)_0%,transparent_70%)]",
  },
  {
    icon: "favorite",
    title: "Child's Marriage",
    desc: "Celebrate the big day",
    accentBarClass: "bg-[var(--blue-800)]",
    iconWrapClass: "bg-[var(--blue-100)]",
    iconClass: "text-[var(--blue-800)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--blue-800-rgb)/0.08)_0%,transparent_70%)]",
  },
  {
    icon: "elderly",
    title: "Retirement",
    desc: "Live life on your terms",
    accentBarClass: "bg-[var(--green-600)]",
    iconWrapClass: "bg-[var(--green-50)]",
    iconClass: "text-[var(--green-600)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--green-600-rgb)/0.08)_0%,transparent_70%)]",
  },
  {
    icon: "health_and_safety",
    title: "Life Insurance",
    desc: "Protect your family",
    accentBarClass: "bg-[var(--teal-mid)]",
    iconWrapClass: "bg-[rgb(var(--green-400-rgb)/0.14)]",
    iconClass: "text-[var(--teal-mid)]",
    hoverRadialClass:
      "bg-[radial-gradient(circle_at_50%_0%,rgb(var(--green-400-rgb)/0.10)_0%,transparent_70%)]",
  },
];

export default function GoalPlannerSection() {
  return (
    <section
      className="bg-[var(--gray-50)] py-16 md:py-24"
      role="region"
      aria-labelledby="goal-planner-title"
    >
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center px-[14px] py-[5px] rounded-[20px] text-[11px] font-bold tracking-[0.4px] bg-[var(--blue-50)] text-[var(--blue-700)] border border-[var(--blue-200)] mb-3">
              Certified Financial Planning
            </div>

            <h2
              id="goal-planner-title"
              className="font-headline text-[28px] md:text-[40px] font-extrabold tracking-tight leading-[1.2] text-[var(--text-primary)] mb-[14px]"
            >
              <span className="block">Plan Your Goals</span>
              <span className="block">
                with a <span className="text-[var(--green-600)] italic">Certified</span>
              </span>
              <span className="block">Financial Planner</span>
            </h2>

            <p className="text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Financial goals are the priorities and targets you set for how you
              want to spend and save your money. Every individual is unique —
              your goals reflect your values, your timeline, and your vision for
              the future.
            </p>

            <p className="mt-4 text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Without a clear financial plan, even a high income can slip away
              silently. A Certified Financial Planner helps you define what
              matters, build a roadmap to get there, and stay on track — no
              matter what the market does.
            </p>

            <Link
              href="/contact"
              className="btn-primary mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-xl font-headline font-bold text-sm tracking-tight text-[var(--text-white)] bg-[linear-gradient(135deg,var(--blue-700),var(--blue-800))]"
            >
              <span className="material-symbols-outlined text-lg">
                support_agent
              </span>
              Need Expert Advice
            </Link>

            <div className="mt-5 flex items-center gap-2 text-xs text-[var(--gray-400)] leading-[1.75]">
              <span className="material-symbols-outlined text-sm text-[var(--green-600)]">
                verified
              </span>
              <span>SEBI Registered · ISO 27001 Certified · 12+ Years Experience</span>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="mt-12 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <div
                  key={goal.title}
                  className="group relative bg-[var(--surface)] rounded-2xl p-6 border border-[var(--borderSoft)] hover:border-[var(--border)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden"
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${goal.accentBarClass}`}
                  />

                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mt-2 group-hover:scale-110 transition-transform duration-300 ${goal.iconWrapClass}`}
                  >
                    <span className={`material-symbols-outlined text-3xl ${goal.iconClass}`}>
                      {goal.icon}
                    </span>
                  </div>

                  <div className="font-headline font-bold text-sm leading-[1.3] text-[var(--text-primary)] mb-1">
                    {goal.title}
                  </div>
                  <div className="text-[12px] text-[var(--gray-400)] leading-[1.75]">
                    {goal.desc}
                  </div>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl ${goal.hoverRadialClass}`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[var(--surface)] rounded-2xl p-6 border border-[var(--borderSoft)] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--green-50)] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[var(--green-600)]">
                    calculate
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm text-[var(--text-primary)]">
                    Goal-based SIP Calculator
                  </p>
                  <p className="text-[12px] text-[var(--gray-400)] leading-[1.75]">
                    Find out exactly how much to invest monthly
                  </p>
                </div>
              </div>

              <Link
                href="/calculator"
                className="text-xs font-bold text-[var(--blue-700)] flex items-center gap-1 hover:gap-2 transition-all"
              >
                Calculate Now
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
