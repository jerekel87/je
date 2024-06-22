import { defineField, defineType } from "sanity";

export default defineType({
  name: "industry",
  title: "Industry",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "percentageIncrease",
      title: "Percentage Increase",
      type: "number",
      description: "This will be used in revenue calculator.",
      validation: (Rule) => Rule.required().min(0).max(100),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
