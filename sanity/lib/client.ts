import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

/**
 * Sanity-client. Gebruikt "placeholder" als projectId zolang er nog geen
 * project is gekoppeld — de client wordt dan nooit echt bevraagd (de data-laag
 * controleert eerst `isSanityConfigured`).
 */
export const client = createClient({
  projectId: projectId || "placeholder",
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});
