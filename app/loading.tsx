export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)]">
      <div className="flex flex-col items-center gap-4">
        <svg
          className="animate-spin h-12 w-12 text-[var(--blue-700)]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        <p className="text-[var(--text-secondary)]">Loading…</p>
      </div>
    </div>
  );
}
