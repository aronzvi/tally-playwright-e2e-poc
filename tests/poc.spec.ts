import { test as base, expect, BrowserContext, chromium } from "@playwright/test";
import path from "path";

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  context: async ({ }, use) => {
    const pathToExtension = path.join(__dirname, "chrome-extension");
    const context = await chromium.launchPersistentContext("", {
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });
    await use(context);
    await context.close();
  },
  extensionId: async ({ context }, use) => {
    // for manifest v2:
    let [background] = context.backgroundPages()
    if (!background)
      background = await context.waitForEvent("backgroundpage")
    
    /*
    // for manifest v3:
    let [background] = context.serviceWorkers();
    if (!background)
      background = await context.waitForEvent("serviceworker");
    */

    const extensionId = background.url().split("/")[2];
    await use(extensionId);
  },
});

test("Import, connect and dissconnect", async ({ page, context, extensionId }) => {
  const passwd = 'VoXaXa!239';
  const recoveryPhrase = "tilt ski leave code make fantasy rifle learn wash quiz youth inside promote garlic cat album tell pass between hub brush evolve staff imitate"
 
  console.log(`chrome-extension://${extensionId}/popup.html`);
  await page.goto(`chrome-extension://${extensionId}/popup.html`);
  //await expect(page.locator("body")).toHaveText("my-extension popup");

  await page.locator('text=Continue').click();
  await page.locator('text=Continue').click();
  await page.locator('text=Import recovery phrase').click();

  await page.locator('input').first().type(passwd);
  await page.locator('input').last().type(passwd);

  await page.locator('text=Begin the hunt').click();

  await page.locator('textarea').type(recoveryPhrase);

  await page.locator('button', { hasText: 'Import account' }).click();

  const dappPage = await context.newPage();
  dappPage.goto('https://cowswap.app/');
  await dappPage.locator('text=Connect').click();

  // Get page after a specific action (e.g. clicking a link)
  const [popupPage] = await Promise.all([
    context.waitForEvent('page'),
    await dappPage.locator('text=Metamask').click() // Opens a new tab
  ]);
  await popupPage.waitForLoadState();

  await popupPage.locator('button', { hasText: 'Connect' }).click();

  await page.bringToFront();
  await page.locator('text=settings').click();
  await page.locator('text=Connected websites').click();

  await page.waitForTimeout(2000);
  await page.locator('xpath=//li[contains(., "CowSwap")]//button').click();
  await page.waitForTimeout(2000);
});





