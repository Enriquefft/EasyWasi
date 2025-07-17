"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createLead } from "@/app/actions/lead";
import { mfiSchema } from "@/lib/lead-schemas";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/submit-button";

const schema = mfiSchema;

type MfiFormValues = z.infer<typeof schema>;

export function MfiForm() {
	const form = useForm<MfiFormValues>({
		resolver: zodResolver(schema),
		defaultValues: {},
	});
	const [submitting, setSubmitting] = useState(false);

	async function onSubmit(values: MfiFormValues) {
		setSubmitting(true);
		try {
			await createLead("mfi", values);
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
					name="entityName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nombre de la entidad</FormLabel>
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
					name="operatingRegions"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Región de operación</FormLabel>
							<FormControl>
								<Input {...field} value={field.value ?? ""} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="creditTypes"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipos de crédito</FormLabel>
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
