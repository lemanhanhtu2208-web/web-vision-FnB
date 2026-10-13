import { faqs } from "@/lib/marketing-content";

export function Faq() {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-ca-phe/10 rounded-2xl bg-white/60 ring-1 ring-ca-phe/10">
      {faqs.map((f) => (
        <details key={f.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
            {f.q}
            <span className="text-nghe transition group-open:rotate-45" aria-hidden>
              +
            </span>
          </summary>
          <p className="mt-3 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
