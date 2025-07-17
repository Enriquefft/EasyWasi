import { timestamp, varchar, text, serial } from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** MicrofinanceInstitutions stores MFI leads. */
export const microfinanceInstitutions = schema.table(
	"microfinance_institutions",
	{
		id: serial("id").primaryKey(),
		entityName: varchar("entity_name", { length: 255 }).notNull(),
		contactName: varchar("contact_name", { length: 255 }).notNull(),
		email: varchar("email", { length: 255 }).notNull(),
		phone: varchar("phone", { length: 25 }).notNull(),
		operatingRegions: varchar("operating_regions", { length: 255 }),
		creditTypes: text("credit_types"),
		notes: text("notes"),
		createdAt: timestamp("created_at", { withTimezone: true })
			.defaultNow()
			.notNull(),
	},
);
