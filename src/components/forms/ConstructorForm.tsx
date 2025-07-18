"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";
import { createConstructorLead } from "@/app/actions/lead";
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
import { showErrorToast } from "@/lib/handle-error";
import { constructorSchema } from "@/lib/lead-schemas";

const schema = constructorSchema;

type ConstructorFormValues = z.infer<typeof schema>;

export function ConstructorForm() {
	const form = useForm<ConstructorFormValues>({
		defaultValues: {},
		resolver: zodResolver(schema),
	});
	const [submitting, setSubmitting] = useState(false);

	async function onSubmit(values: ConstructorFormValues) {
		setSubmitting(true);
		try {
			await createConstructorLead(values);
			toast.success("\u00a1Gracias! Recibimos tu solicitud.");
			form.reset();
		} catch (err) {
			showErrorToast(err);
		}
		setSubmitting(false);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
				<FormField
					control={form.control}
					name="companyName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre de la empresa</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="contactName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre del contacto</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="workAreas"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Áreas de trabajo</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="executionCapacity"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Capacidad de ejecución</FormLabel>
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
