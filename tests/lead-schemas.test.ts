import { expect, test } from "bun:test";
import { householdSchema, mfiSchema } from "@/lib/lead-schemas";

const validHousehold = {
	city: "Lima",
	constructionYear: 2000,
	country: "Peru",
	district: "Lince",
	email: "a@b.com",
	fullName: "Ana",
	housingType: "casa",
	phone: "12345",
};

test("household schema accepts valid data", () => {
	expect(householdSchema.parse(validHousehold)).toEqual({
		...validHousehold,
	});
});

test("mfi schema rejects invalid email", () => {
	expect(() =>
		mfiSchema.parse({
			contactName: "Luis",
			email: "bad",
			entityName: "Bank",
			phone: "12345",
		}),
	).toThrow();
});
