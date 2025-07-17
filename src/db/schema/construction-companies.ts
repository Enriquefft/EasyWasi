import { serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** ConstructionCompanies stores constructor leads. */
export const constructionCompanies = schema.table("construction_companies", {
	companyName: varchar("company_name", { length: 255 }).notNull(),
	contactName: varchar("contact_name", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	executionCapacity: varchar("execution_capacity", { length: 255 }),
	id: serial("id").primaryKey(),
	notes: text("notes"),
	phone: varchar("phone", { length: 25 }).notNull(),
	workAreas: varchar("work_areas", { length: 255 }),
});
