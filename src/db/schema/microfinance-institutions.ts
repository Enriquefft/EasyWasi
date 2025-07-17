import { serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { schema } from "./schema";

/** MicrofinanceInstitutions stores MFI leads. */
export const microfinanceInstitutions = schema.table(
	"microfinance_institutions",
	{
		contactName: varchar("contact_name", { length: 255 }).notNull(),
		createdAt: timestamp("created_at", { withTimezone: true })
			.defaultNow()
			.notNull(),
		creditTypes: text("credit_types"),
		email: varchar("email", { length: 255 }).notNull(),
		entityName: varchar("entity_name", { length: 255 }).notNull(),
		id: serial("id").primaryKey(),
		notes: text("notes"),
		operatingRegions: varchar("operating_regions", { length: 255 }),
		phone: varchar("phone", { length: 25 }).notNull(),
	},
);
