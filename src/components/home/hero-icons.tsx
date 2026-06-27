export function AwardIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 15l-2.5 1.3.5-2.8-2-2 2.8-.4L12 8l1.2 2.8 2.8.4-2 2 .5 2.8L12 15z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 21h8M9 17H7l-1-4H5l3-6M15 17h2l1-4h1l-3-6"
      />
    </svg>
  );
}

export function ChartIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 17V11M12 17V7M16 17v-4"
      />
    </svg>
  );
}

export function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      aria-hidden
    >
      <rect x="3" y="5" width="14" height="10" rx="2" strokeLinecap="round" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 9h2a2 2 0 012 2v6a2 2 0 01-2 2H9" />
      <path strokeLinecap="round" d="M7 19v-2M10 19v-4M13 19v-6" />
    </svg>
  );
}
