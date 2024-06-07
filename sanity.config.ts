"use client";

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
export const singletonTypes = new Set(["homePage"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Regular document types
            S.documentTypeListItem("project").title("Projects"),
            S.documentTypeListItem("industry").title("Project Industries"),
            S.documentTypeListItem("review").title("Reviews"),
            S.documentTypeListItem("reviewPlatform").title("Review Platforms"),
            S.documentTypeListItem("article").title("Articles"),
            S.documentTypeListItem("articleCategory").title(
              "Article Categories"
            ),
            // Our singleton type has a list item with a custom child
            S.listItem().title("Home Page").id("homePage").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document().schemaType("homePage").documentId("homePage")
            ),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin

    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
