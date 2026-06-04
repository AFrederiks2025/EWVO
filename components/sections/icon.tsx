import {
  Clapperboard,
  Code,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";

const map: Record<string, ComponentType<{ className?: string }>> = {
  Compass,
  Code,
  Sparkles,
  ShieldCheck,
  Clapperboard,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Compass;
  return <Icon className={className} />;
}
