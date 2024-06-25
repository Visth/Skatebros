import { test, expect } from "@playwright/test";

test("Test dodawania produktu do koszyka", async ({ page }) => {
	await page.goto("http://localhost:5173/");
	await page.goto("http://localhost:5173/kobieta");
	await page.getByRole("link", { name: "Odzież" }).click();
	await page.getByRole("link", { name: "Obuwie arrow icon" }).click();
	await page
		.getByRole("link", { name: "product Szpilki 49zł" })
		.first()
		.click();
	await page.getByRole("button", { name: "Dodaj do koszyka" }).click();
	await page.getByRole("link", { name: "Bag icon wejdz" }).click();
	await expect(
		page
			.locator("div")
			.filter({ hasText: /^Test producent Szpilki49złCena: 49złUsuń$/ })
			.nth(1)
	).toBeVisible();
});
