import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    {
      name: "sketch",
      title: "Sketch",
    },
  ],
  fields: [
    defineField({
      name: "sketchBefore",
      title: "Sketch: Image(Before)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: "sketch",
    }),
    defineField({
      name: "sketchAfter",
      title: "Sketch: Image(After)",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      group: "sketch",
    }),
  ],
});
