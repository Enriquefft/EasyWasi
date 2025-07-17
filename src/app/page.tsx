/**
 * Home page for EasyWasi
 */
import { LeadForm } from "@/components/LeadForm";

export default async function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-start gap-8 p-8 text-center">
			<section className="space-y-4">
				<h1 className="text-3xl font-bold">¿Qué es Easy Wasi?</h1>
				<p className="max-w-prose">
					Easy Wasi es una plataforma 100 % digital de financiamiento modular y
					progresivo para refuerzos estructurales de viviendas en Perú. Permite
					a los propietarios fortalecer su hogar en pequeñas etapas,
					conectándolos con microfinancieras y constructoras certificadas, todo
					a través de un único formulario interactivo y con una interfaz
					amigable y fluida.
				</p>
				<ul className="max-w-prose text-left list-disc list-inside">
					<li>
						<strong>Hogares:</strong> seguridad sísmica gradual sin inversión
						única elevada.
					</li>
					<li>
						<strong>MFI:</strong> leads cualificados segmentados por región y
						tipo de proyecto.
					</li>
					<li>
						<strong>Constructoras:</strong> acceso directo a proyectos
						modulares.
					</li>
				</ul>
			</section>
			<LeadForm />
		</main>
	);
}
