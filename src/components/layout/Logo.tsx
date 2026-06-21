import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Perqo logo — the customer's real designed lockup (road-"P" mark + "Perqo"
 * wordmark) shipped as a transparent PNG at /perqo-logo.png. The PNG already
 * contains the "Perqo" wordmark, so no separate text is rendered. Plain <img>
 * (not next/image) so it works without the image optimizer in the standalone
 * server build; the file is served straight from /public.
 */
export function Logo({ className }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/perqo-logo.png"
      alt="Perqo"
      width={112}
      height={36}
      fetchPriority="high"
      className={cn("w-auto h-9", className)}
    />
  );
}
