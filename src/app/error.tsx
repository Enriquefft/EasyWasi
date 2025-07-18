"use client";

import { useEffect } from "react";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error("Global error boundary caught an error:", error);
	}, [error]);

	return (
		<div className="p-4 text-center">
			<h2 className="mb-2 text-xl font-semibold text-destructive">
				Something went wrong
			</h2>
			<button
				type="button"
				onClick={reset}
				className="rounded bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
			>
				Try again
			</button>
		</div>
	);
}
