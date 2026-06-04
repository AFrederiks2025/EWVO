import { cn } from "@/lib/utils";
import { brandGradients } from "@/lib/gradients";

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Placeholder-avatar met initialen — TODO: vervang door echte portretten. */
export function TeamAvatar({
  name,
  index = 0,
  className,
}: {
  name: string;
  index?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-linear-to-br text-xl font-semibold text-white",
        brandGradients[index % brandGradients.length],
        className,
      )}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}
