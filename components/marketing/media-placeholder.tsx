// Khung giữ chỗ cho ảnh/video mẫu cho tới khi có ảnh món thật.
export function MediaPlaceholder({
  label,
  aspect = "aspect-square",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex items-end overflow-hidden rounded-2xl bg-gradient-to-br from-nghe/30 via-kem to-la-chuoi/25 p-3 ring-1 ring-ca-phe/10`}
      role="img"
      aria-label={`Ảnh mẫu: ${label}`}
    >
      <span className="rounded-full bg-kem/85 px-3 py-1 text-xs font-medium">
        {label}
      </span>
    </div>
  );
}
