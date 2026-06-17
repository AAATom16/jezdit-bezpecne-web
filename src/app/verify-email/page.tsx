import type { Metadata } from "next";
import { Suspense } from "react";
import { VerifyEmail } from "./VerifyEmail";

export const metadata: Metadata = {
  title: "Ověření e-mailu",
  robots: { index: false, follow: false },
};

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-12">
      <Suspense fallback={null}>
        <VerifyEmail />
      </Suspense>
    </main>
  );
}
