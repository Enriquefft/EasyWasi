/** biome-ignore-all lint/complexity/useLiteralKeys: to access the nextjs env variables, we use process.env, which needs to be typed */

import { vercel } from "@t3-oss/env-core/presets-zod";
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_APP_URL: z.string().optional(),
		NEXT_PUBLIC_PROJECT_NAME: z.string(),
	},

	emptyStringAsUndefined: false,
	extends: [vercel()],
	runtimeEnv: {
		DRIZZLE_DATABASE_URL: process.env["DRIZZLE_DATABASE_URL"],
		NEXT_PUBLIC_APP_URL: process.env["NEXT_PUBLIC_APP_URL"],
		NEXT_PUBLIC_PROJECT_NAME: process.env["NEXT_PUBLIC_PROJECT_NAME"],
	},
	server: {
		DRIZZLE_DATABASE_URL: z.string().url(),
	},
});
