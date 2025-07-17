"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ConstructorForm, HouseholdForm, MfiForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/lib/lead-schemas";

const profiles: { value: Profile; label: string }[] = [
	{ label: "Hogar", value: "household" },
	{ label: "MFI", value: "mfi" },
	{ label: "Constructora", value: "constructor" },
];

export function LeadForm() {
	const [profile, setProfile] = useState<Profile | null>(null);

	return (
		<div className="w-full max-w-xl space-y-4">
			<div className="flex gap-2">
				{profiles.map((p) => (
					<Button
						key={p.value}
						type="button"
						variant={profile === p.value ? "default" : "outline"}
						onClick={() => setProfile(p.value)}
					>
						{p.label}
					</Button>
				))}
			</div>
			<AnimatePresence mode="wait">
				{profile === "household" && (
					<motion.div
						key="household"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
					>
						<HouseholdForm />
					</motion.div>
				)}
				{profile === "mfi" && (
					<motion.div
						key="mfi"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
					>
						<MfiForm />
					</motion.div>
				)}
				{profile === "constructor" && (
					<motion.div
						key="constructor"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
					>
						<ConstructorForm />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
