import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case",
  type: "document",
  fields: [
    defineField({
      name: "client",
      title: "Klant",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "client" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "sector", title: "Sector", type: "string" }),
    defineField({
      name: "summary",
      title: "Samenvatting",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "featured",
      title: "Uitgelicht (launch-case)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "url", title: "Live website", type: "url" }),
    defineField({ name: "image", title: "Beeld", type: "image", options: { hotspot: true } }),
    defineField({ name: "problem", title: "De uitdaging", type: "text", rows: 3 }),
    defineField({ name: "approach", title: "Onze aanpak", type: "text", rows: 3 }),
    defineField({ name: "result", title: "Het resultaat", type: "text", rows: 3 }),
    defineField({
      name: "quote",
      title: "Klantquote",
      type: "object",
      fields: [
        defineField({ name: "text", title: "Quote", type: "text", rows: 2 }),
        defineField({ name: "author", title: "Auteur", type: "string" }),
      ],
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
  preview: { select: { title: "client", subtitle: "sector", media: "image" } },
});
