import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Blog",
  description: "Připravujeme blog o bezpečné jízdě, telematice a osobních financích.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <section className="py-24">
      <Container className="max-w-2xl text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-700">
          <Icon name="spark" size={26} />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight">
          Blog připravujeme
        </h1>
        <p className="mt-4 text-lg text-slate-600 text-pretty">
          Pracujeme na první sérii článků — o bezpečné jízdě, ISA, ochraně dat
          a jak vytěžit z aplikace maximum. Brzy.
        </p>
      </Container>
    </section>
  );
}
