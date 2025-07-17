"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

import { createHouseholdLead } from "@/app/actions/lead";
import { SubmitButton } from "@/components/submit-button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { householdSchema } from "@/lib/lead-schemas";

const schema = householdSchema;

type HouseholdFormValues = z.infer<typeof schema>;

export function HouseholdForm() {
	const form = useForm<HouseholdFormValues>({
		defaultValues: {},
		resolver: zodResolver(schema),
	});
	const [submitting, setSubmitting] = useState(false);

	async function onSubmit(values: HouseholdFormValues) {
		setSubmitting(true);
		try {
			await createHouseholdLead(values);
			toast.success("\u00a1Gracias! Recibimos tu solicitud.");
			form.reset();
		} catch {
			toast.error("Hubo un problema al guardar");
		}
		setSubmitting(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
				<FormField
					control={form.control}
					name="fullName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre completo</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="country"
					render={({ field }) => (
						<FormItem>
							<FormLabel>País</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="city"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ciudad</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="district"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Distrito</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="housingType"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipo de vivienda</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="constructionYear"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Año de construcción</FormLabel>
							<FormControl>
								<Input type="number" {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="wallMaterial"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Material de muros</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="roofMaterial"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Material de techo</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="existingProblems"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Problemas existentes</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Correo electrónico</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Teléfono</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="notes"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Consultas</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<SubmitButton isSubmitting={submitting}>Enviar</SubmitButton>
			</form>
		</Form>
	);
}
