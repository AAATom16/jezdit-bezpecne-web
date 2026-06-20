import { cn } from "@/lib/utils";

type LogoProps = {
  /** Show the "Perqo" wordmark next to the badge. Default true. */
  withWordmark?: boolean;
  /** Render the wordmark on light backgrounds (navy ink) or dark (white). */
  tone?: "navy" | "white";
  className?: string;
};

/**
 * Perqo wordmark: a rounded teal/yellow badge carrying a white safe-driving
 * check, followed by the "Perqo" wordmark in navy ink. Pure inline SVG +
 * styled text — no external asset required.
 */
export function Logo({
  withWordmark = true,
  tone = "navy",
  className,
}: LogoProps) {
  return (
    <span
      className={cn("inline-flex items-center gap-2 font-extrabold", className)}
    >
      <span className="grid h-9 w-9 place-items-center" aria-hidden="true">
        <svg
          viewBox="0 0 36 36"
          width={36}
          height={36}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          {/* Rounded badge — teal body with a yellow/gold accent arc. */}
          <rect x="2" y="2" width="32" height="32" rx="11" fill="#2D9EAA" />
          <path
            d="M34 18a16 16 0 0 0-16-16v6a10 10 0 0 1 10 10h6z"
            fill="#FFC857"
          />
          {/* White safe-driving check. */}
          <path
            d="M11.5 18.5l4 4 9-9"
            stroke="#FFFFFF"
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {withWordmark && (
        <span
          className={cn(
            "text-lg tracking-tight",
            tone === "white" ? "text-white" : "text-navy"
          )}
        >
          Perqo
        </span>
      )}
    </span>
  );
}
