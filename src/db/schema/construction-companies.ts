import { timestamp, varchar, text, serial } from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** ConstructionCompanies stores constructor leads. */
export const constructionCompanies = schema.table("construction_companies", {
	id: serial("id").primaryKey(),
	companyName: varchar("company_name", { length: 255 }).notNull(),
	contactName: varchar("contact_name", { length: 255 }).notNull(),
	workAreas: varchar("work_areas", { length: 255 }),
	executionCapacity: varchar("execution_capacity", { length: 255 }),
	email: varchar("email", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 25 }).notNull(),
	notes: text("notes"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});
