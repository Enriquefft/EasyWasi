"use server";

import { db } from "@/db";
import {
	constructionCompanies,
	households,
	microfinanceInstitutions,
} from "@/db/schema";
import { DatabaseInsertError } from "@/lib/database-error";
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
	} catch (err) {
		console.error(err);
		const message = err instanceof Error ? err.message : String(err);
		throw new DatabaseInsertError(`Failed to insert lead: ${message}`);
	}
}

export async function createMfiLead(data: Mfi) {
	try {
		const lead = mfiSchema.parse(data);
		await db.insert(microfinanceInstitutions).values(lead);
	} catch (err) {
		console.error(err);
		const message = err instanceof Error ? err.message : String(err);
		throw new DatabaseInsertError(`Failed to insert lead: ${message}`);
	}
}

export async function createConstructorLead(data: Constructor) {
	try {
		const lead = constructorSchema.parse(data);
		await db.insert(constructionCompanies).values(lead);
	} catch (err) {
		console.error(err);
		const message = err instanceof Error ? err.message : String(err);
		throw new DatabaseInsertError(`Failed to insert lead: ${message}`);
	}
}
