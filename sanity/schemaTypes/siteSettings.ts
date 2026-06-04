import { defineArrayMember, defineField, defineType } from "sanity";

/** Algemene site-instellingen (contactgegevens, socials). Eén document. */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site-instellingen",
  type: "document",
  fields: [
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "description",
      title: "Omschrijving",
      type: "text",
      rows: 3,
    }),
    defineField({ name: "phone", title: "Telefoon", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({ name: "whatsapp", title: "WhatsApp-link", type: "url" }),
    defineField({ name: "hours", title: "Bereikbaarheid", type: "string" }),
    defineField({
      name: "socials",
      title: "Social media",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "URL", type: "url" }),
          ],
          preview: { select: { title: "label", subtitle: "href" } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site-instellingen" }) },
});
