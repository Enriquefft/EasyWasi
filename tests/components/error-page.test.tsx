import { expect, jest, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import GlobalError from "@/app/error";

test("renders fallback UI and logs error", () => {
	const spy = jest.spyOn(console, "error").mockImplementation(() => {});
	const reset = jest.fn();

	render(<GlobalError error={new Error("fail")} reset={reset} />);

	expect(screen.getByText("Something went wrong")).toBeInTheDocument();
	expect(spy).toHaveBeenCalled();
	spy.mockRestore();
});
