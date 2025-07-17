import {
	timestamp,
	varchar,
	text,
	integer,
	pgTable,
	serial,
} from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** Households captures home-owner leads. */
export const households = schema.table("households", {
	id: serial("id").primaryKey(),
	fullName: varchar("full_name", { length: 255 }).notNull(),
	country: varchar("country", { length: 100 }).notNull(),
	city: varchar("city", { length: 100 }).notNull(),
	district: varchar("district", { length: 100 }).notNull(),
	housingType: varchar("housing_type", { length: 50 }).notNull(),
	constructionYear: integer("construction_year"),
	wallMaterial: varchar("wall_material", { length: 50 }),
	roofMaterial: varchar("roof_material", { length: 50 }),
	existingProblems: text("existing_problems"),
	email: varchar("email", { length: 255 }).notNull(),
	phone: varchar("phone", { length: 25 }).notNull(),
	notes: text("notes"),
	createdAt: timestamp("created_at", { withTimezone: true })
		.defaultNow()
		.notNull(),
});
