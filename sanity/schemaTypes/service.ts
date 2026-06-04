import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Dienst",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "summary",
      title: "Samenvatting",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "icon",
      title: "Icoon",
      type: "string",
      options: {
        list: ["Compass", "Code", "Sparkles", "ShieldCheck", "Clapperboard"],
      },
    }),
    defineField({
      name: "features",
      title: "Kenmerken",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "intro",
      title: "Introtekst (detailpagina)",
      type: "text",
      rows: 5,
    }),
    defineField({ name: "order", title: "Volgorde", type: "number" }),
  ],
  orderings: [
    {
      title: "Volgorde",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "tagline" } },
});
