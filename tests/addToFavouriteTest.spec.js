import { test, expect } from "@playwright/test";

test("Test dodawania przedmiotu do ulubionych", async ({ page }) => {
	await page.goto("http://localhost:5173/");
	await page.goto("http://localhost:5173/kobieta");
	await page.getByRole("link", { name: "Dziecko" }).click();
	await page.getByRole("link", { name: "Obuwie" }).click();
	await page.locator("a:nth-child(8) > form > button").click();
	await page.getByRole("link", { name: "Heart icon" }).click();
	await expect(
		page
			.locator("div")
			.filter({
				hasText:
					/^Producent 2 Szybkie butki199złCena: 199złUsuńDodaj do koszyka$/,
			})
			.last()
	).toBeVisible();
});
