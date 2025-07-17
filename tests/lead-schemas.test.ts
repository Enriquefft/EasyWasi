import { expect, test } from "bun:test";
import { householdSchema, mfiSchema } from "@/lib/lead-schemas";

const validHousehold = {
	fullName: "Ana",
	country: "Peru",
	city: "Lima",
	district: "Lince",
	housingType: "casa",
	constructionYear: 2000,
	email: "a@b.com",
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
			entityName: "Bank",
			contactName: "Luis",
			email: "bad",
			phone: "12345",
		}),
	).toThrow();
});
