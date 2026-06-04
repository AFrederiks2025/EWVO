import { defineType } from "sanity";

/** Rijke tekst (Portable Text) voor blogartikelen. */
export const blockContent = defineType({
  name: "blockContent",
  title: "Tekst",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normaal", value: "normal" },
        { title: "Kop 2", value: "h2" },
        { title: "Kop 3", value: "h3" },
        { title: "Citaat", value: "blockquote" },
      ],
      marks: {
        annotations: [
          {
            name: "link",
            type: "object",
            title: "Link",
            fields: [{ name: "href", type: "url", title: "URL" }],
          },
        ],
      },
    },
  ],
});
