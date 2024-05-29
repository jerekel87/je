// schemas/review.js
import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Review",
  type: "document",
  fields: [
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "reviewerName",
      title: "Reviewer Name",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .warning("Name should be between 2 and 50 characters"),
    }),
    defineField({
      name: "reviewerInfo",
      title: "Reviewer Info",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(50)
          .warning("Info should be between 2 and 50 characters"),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) =>
        Rule.custom((value) => {
          if (typeof value !== "number" || !Number.isInteger(value)) {
            return "Rating must be an integer";
          }
          if (value < 1 || value > 5) {
            return "Rating must be between 1 and 5";
          }
          return true;
        }),
    }),
    defineField({
      name: "reviewText",
      title: "Review Text",
      type: "text",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(1000)
          .warning("Review should be between 10 and 1000 characters"),
    }),
    defineField({
      name: "reviewDate",
      title: "Review Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reviewPlatform",
      title: "Review Platform",
      type: "reference",
      to: { type: "reviewPlatform" },
    }),
  ],
});