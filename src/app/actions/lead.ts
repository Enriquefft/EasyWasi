"use server";

import { db } from "@/db";
import {
	constructionCompanies,
	households,
	microfinanceInstitutions,
} from "@/db/schema";
import {
	type Constructor,
	constructorSchema,
	type Household,
	householdSchema,
	type Mfi,
	mfiSchema,
} from "@/lib/lead-schemas";

export async function createHouseholdLead(data: Household) {
	try {
		const lead = householdSchema.parse(data);
		await db.insert(households).values(lead);
	} catch {
		throw new Error("Failed to insert lead");
	}
}

export async function createMfiLead(data: Mfi) {
	try {
		const lead = mfiSchema.parse(data);
		await db.insert(microfinanceInstitutions).values(lead);
	} catch {
		throw new Error("Failed to insert lead");
	}
}

export async function createConstructorLead(data: Constructor) {
	try {
		const lead = constructorSchema.parse(data);
		await db.insert(constructionCompanies).values(lead);
	} catch {
		throw new Error("Failed to insert lead");
	}
}
