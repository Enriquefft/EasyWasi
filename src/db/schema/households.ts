import { integer, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** Households captures home-owner leads. */
export const households = schema.table("households", {
	city: varchar("city", { length: 100 }).notNull(),
	constructionYear: integer("construction_year"),
	country: varchar("country", { length: 100 }).notNull(),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
	district: varchar("district", { length: 100 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	existingProblems: text("existing_problems"),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	housingType: varchar("housing_type", { length: 50 }).notNull(),
	id: serial("id").primaryKey(),
	notes: text("notes"),
	phone: varchar("phone", { length: 25 }).notNull(),
	roofMaterial: varchar("roof_material", { length: 50 }),
	wallMaterial: varchar("wall_material", { length: 50 }),
});
