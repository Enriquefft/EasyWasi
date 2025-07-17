"use server";

import { db } from "@/db";
import {
	households,
	microfinanceInstitutions,
	constructionCompanies,
} from "@/db/schema";
import {
	constructorSchema,
	householdSchema,
	mfiSchema,
	type Profile,
} from "@/lib/lead-schemas";

export function parseLead(profile: Profile, data: unknown) {
	switch (profile) {
		case "household":
			return householdSchema.parse(data);
		case "mfi":
			return mfiSchema.parse(data);
		case "constructor":
			return constructorSchema.parse(data);
		default:
			throw new Error("Invalid profile");
	}
}

export async function createLead(profile: Profile, data: unknown) {
	try {
		switch (profile) {
			case "household": {
				const lead = householdSchema.parse(data);
				await db.insert(households).values(lead);
				break;
			}
			case "mfi": {
				const lead = mfiSchema.parse(data);
				await db.insert(microfinanceInstitutions).values(lead);
				break;
			}
			case "constructor": {
				const lead = constructorSchema.parse(data);
				await db.insert(constructionCompanies).values(lead);
				break;
			}
			default:
				throw new Error("Invalid profile");
		}
	} catch (err) {
		throw new Error("Failed to insert lead");
	}
}
