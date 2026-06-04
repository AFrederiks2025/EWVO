"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

/**
 * Client-wrapper voor de Sanity Studio. De config (met functies/plugins) wordt
 * hier — binnen de client-grens — geïmporteerd, niet als prop doorgegeven.
 */
export function Studio() {
  return <NextStudio config={config} />;
}
