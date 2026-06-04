import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

/** Bouw een (geoptimaliseerde) afbeeldings-URL vanuit een Sanity-image.
 *  Het brontype wordt afgeleid van builder.image (geen kwetsbaar importpad). */
export function urlForImage(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
