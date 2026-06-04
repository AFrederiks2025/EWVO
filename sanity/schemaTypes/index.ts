import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { service } from "./service";
import { teamMember } from "./teamMember";
import { caseStudy } from "./caseStudy";
import { post } from "./post";
import { siteSettings } from "./siteSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  siteSettings,
  service,
  teamMember,
  caseStudy,
  post,
  blockContent,
];
