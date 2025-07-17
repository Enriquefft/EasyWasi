import { expect, test } from "bun:test";
import {
	constructionCompanies,
	households,
	microfinanceInstitutions,
} from "@/db/schema";

test("households table has essential columns", () => {
	expect(households.fullName.name).toBe("full_name");
	expect(households.email.notNull).toBe(true);
});

test("microfinance institutions table has essential columns", () => {
	expect(microfinanceInstitutions.entityName.name).toBe("entity_name");
	expect(microfinanceInstitutions.email.notNull).toBe(true);
});

test("construction companies table has essential columns", () => {
	expect(constructionCompanies.companyName.name).toBe("company_name");
	expect(constructionCompanies.email.notNull).toBe(true);
});
