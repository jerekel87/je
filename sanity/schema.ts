import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/blockContent";
import project from "./schemaTypes/project";
import industry from "./schemaTypes/industry";
import review from "./schemaTypes/review";
import reviewPlatform from "./schemaTypes/reviewPlatform";
import article from "./schemaTypes/article";
import articleCategory from "./schemaTypes/articleCategory";
import { singletonTypes } from "@/sanity.config";
import homePage from "./schemaTypes/homePage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    project,
    industry,
    review,
    reviewPlatform,
    article,
    articleCategory,
    blockContent,
    homePage,
  ],
  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};
