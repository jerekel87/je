import { type SchemaTypeDefinition } from "sanity";
import blockContent from "./schemaTypes/blockContent";
import project from "./schemaTypes/project";
import industry from "./schemaTypes/industry";
import review from "./schemaTypes/review";
import reviewPlatform from "./schemaTypes/reviewPlatform";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, industry, review, reviewPlatform, blockContent],
};
