import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({
  api: { projectId, dataset },
  // Nodig voor `npx sanity exec` (o.a. het seed-script).
  autoUpdates: true,
});
