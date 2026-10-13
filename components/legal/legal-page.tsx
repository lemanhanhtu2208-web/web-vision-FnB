export function LegalPage({ title, updated, children }: { title: string; updated: string; children: React.ReactNode }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 leading-relaxed [&_h2]:mt-8 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-bold [&_li]:ml-5 [&_li]:list-disc [&_p]:mb-3">
      <p className="mb-6 rounded-xl bg-nghe/10 p-4 text-sm">
        Bản nháp, chưa có giá trị pháp lý. Cần rà soát và điền thông tin trong [ngoặc vuông] trước khi ra mắt.
      </p>
      <h1 className="text-3xl font-extrabold">{title}</h1>
      <p className="mb-6 mt-1 text-sm opacity-70">Cập nhật: {updated}</p>
      {children}
    </article>
  );
}
