import { createInsertSchema } from "drizzle-zod";
import {
	constructionCompanies,
	households,
	microfinanceInstitutions,
} from "@/db/schema";
import { z } from "zod";

export const profileEnum = z.enum(["household", "mfi", "constructor"]);

export const householdSchema = createInsertSchema(households, {
	email: z.string().email(),
}).omit({
	id: true,
	createdAt: true,
});

export const mfiSchema = createInsertSchema(microfinanceInstitutions, {
	email: z.string().email(),
}).omit({
	id: true,
	createdAt: true,
});

export const constructorSchema = createInsertSchema(constructionCompanies, {
	email: z.string().email(),
}).omit({
	id: true,
	createdAt: true,
});

export type Household = z.infer<typeof householdSchema>;
export type Mfi = z.infer<typeof mfiSchema>;
export type Constructor = z.infer<typeof constructorSchema>;
export type Profile = z.infer<typeof profileEnum>;

export const leadSchema = z.discriminatedUnion("profile", [
	householdSchema.extend({ profile: z.literal("household") }),
	mfiSchema.extend({ profile: z.literal("mfi") }),
	constructorSchema.extend({ profile: z.literal("constructor") }),
]);

export type LeadFormData = z.infer<typeof leadSchema>;
