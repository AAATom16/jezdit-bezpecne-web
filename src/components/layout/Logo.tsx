import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/**
 * Perqo logo — the customer's real designed lockup (road-"P" mark + "Perqo"
 * wordmark) shipped as a transparent PNG at /perqo-logo.png. The PNG already
 * contains the "Perqo" wordmark, so no separate text is rendered.
 */
export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/perqo-logo.png"
      alt="Perqo"
      width={140}
      height={40}
      priority
      className={cn("w-auto", className)}
      style={{ height: "auto" }}
    />
  );
}
