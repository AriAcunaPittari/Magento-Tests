import { expect, test as setup } from "playwright/test";
import { NavigatePage } from "./Pages/navigate";
import { LoginPage } from "./Pages/login";
import { LoginCheck } from "./Checker/loginChecker";

setup("Storage login session", async ({ page }) => {
  const login = new LoginPage(page);
  const loginCheck = new LoginCheck(page);
  const navigate = new NavigatePage(page);
  await navigate.home();
  await login.login();
  await loginCheck.checkLogin();
  await page.context().storageState({ path: "web/auth/login.json" });
});
