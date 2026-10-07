import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("portfolio remains usable without third-party requests", async ({
  page,
}) => {
  await page.route("https://**/*", (route) => route.abort());
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Something useful.",
  );
  await expect(page.getByRole("article")).toHaveCount(3);
  await page.getByRole("button", { name: "Computer vision" }).click();
  await expect(page.getByRole("article")).toHaveCount(1);
  await expect(
    page.getByRole("heading", { name: /SignSenseAI/ }),
  ).toBeVisible();
  await page.getByText("Project notes", { exact: true }).click();
  await expect(
    page.getByText(/rather than a complete sign-language translator/),
  ).toBeVisible();
  await page.getByRole("button", { name: /All projects/ }).click();
  await expect(page.getByRole("article")).toHaveCount(3);
  expect(errors).toEqual([]);
  expect(
    (
      await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze()
    ).violations,
  ).toEqual([]);
});

test("navigation, contacts, and narrow layouts work", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  if (testInfo.project.name === "mobile") {
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.keyboard.press("Escape");
    await expect(
      page.getByRole("button", { name: "Open navigation" }),
    ).toBeFocused();
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Contact", exact: true })
    .click();
  await expect(page).toHaveURL(/#contact$/);
  await expect(
    page.getByRole("link", { name: "logeshrv2006@gmail.com" }),
  ).toHaveAttribute("href", "mailto:logeshrv2006@gmail.com");
  for (const width of [320, 375, 600, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `overflow at ${width}px`,
    ).toBe(true);
  }
});

test("email copy reports success and gracefully handles denial", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.goto("/");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByText("Email copied", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(
    "logeshrv2006@gmail.com",
  );
  await page.evaluate(() =>
    Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => Promise.reject(new Error("denied")) },
      configurable: true,
    }),
  );
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(
    page.getByText("Copy unavailable. Use the email link."),
  ).toBeVisible();
});
