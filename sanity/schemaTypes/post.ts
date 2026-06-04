import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blogartikel",
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
    defineField({
      name: "excerpt",
      title: "Samenvatting",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "date",
      title: "Publicatiedatum",
      type: "datetime",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "author", title: "Auteur", type: "string" }),
    defineField({ name: "category", title: "Categorie", type: "string" }),
    defineField({
      name: "image",
      title: "Uitgelicht beeld",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "body", title: "Inhoud", type: "blockContent" }),
  ],
  orderings: [
    {
      title: "Datum (nieuwste eerst)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: { select: { title: "title", subtitle: "category", media: "image" } },
});
