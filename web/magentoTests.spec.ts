import { test } from "@playwright/test";
import { RegisterPage } from "./Pages/register";
import { RegisterCheck } from "./Checker/registerCheck";
import { LoginPage } from "./Pages/login";
import { LoginCheck } from "./Checker/loginChecker";
import { NavigatePage } from "./Pages/navigate";
import { AddToWishPage } from "./Pages/addtoWish";
import { AddToWishCheck } from "./Checker/addToWishChecker";
import { LogoutPage } from "./Pages/loginout";
import { LogoutCheck } from "./Checker/logoutChecker";
import { AddToCartPage } from "./Pages/addToCart";
import { AddToCartChecker } from "./Checker/addToCartChecker";
import { ChangePersonalInfoPage } from "./Pages/changePersonalInfo";
import { ChangePersonalInfoChecker } from "./Checker/changePersonalInfoChecker";

test.describe(
  "TestCases para Magento",
  {
    tag: "@Logout",
  },
  () => {
    test(
      "Registro",
      {
        tag: "@Register",
      },
      async ({ page }) => {
        // OK
        const register = new RegisterPage(page);
        const registerCheck = new RegisterCheck(page);
        const navigate = new NavigatePage(page);
        await navigate.home();
        await register.createAccount();
        await registerCheck.checkRegister();
      }
    );
    test("Login", async ({ page }) => {
      // OK
      const login = new LoginPage(page);
      const loginCheck = new LoginCheck(page);
      const navigate = new NavigatePage(page);
      await navigate.home();
      await login.login();
      await loginCheck.checkLogin();
    });
    test(
      "Agreguar a la Wishlist",
      {
        tag: "@Negative",
      },
      async ({ page }) => {
        // OK
        const addWish = new AddToWishPage(page);
        const addWishCheck = new AddToWishCheck(page);
        const navigate = new NavigatePage(page);
        await navigate.home();
        await addWish.addFromHomePage();
        await addWishCheck.checkAddWish();
      }
    );
  }
);
test.describe(
  "TestCases para Magento",
  {
    tag: "@Login",
  },
  () => {
    test("Buscar y agregar al carrito", async ({ page }) => {
      //? Quitar ADs

      const navigate = new NavigatePage(page);
      const addCart = new AddToCartPage(page);
      const addCartCheck = new AddToCartChecker(page);
      await navigate.home();
      const productos: string[] = [
        process.env.PRODUCT_ONE || "",
        process.env.PRODUCT_TWO || "",
        process.env.PRODUCT_THREE || "",
      ];
      await addCart.searchProduct();
      if (await page.locator(".grippy-host").isVisible()) {
        await page.locator(".grippy-host").click();
      }
      await addCart.selectProduct(productos);
      await addCartCheck.checkAddCart();
      await page.pause(); //! QUITAR !
    });
    test.only("Cambiar la informacion personal", async ({ page }) => {
      //OK!
      const changeInfo = new ChangePersonalInfoPage(page);
      const changeInfoCheck = new ChangePersonalInfoChecker(page);
      const navigate = new NavigatePage(page);
      await navigate.home();
      await changeInfo.goToPeronalInfo();
      await changeInfo.changePersonalInfo();
      await changeInfoCheck.checkEmailInput();
      await changeInfo.saveChanges();
      await changeInfoCheck.checkInfoChange();
    });
    test("LogOut", async ({ page }) => {
      //OK!
      const logout = new LogoutPage(page);
      const logoutCheck = new LogoutCheck(page);
      const navigate = new NavigatePage(page);
      await navigate.home();
      await logout.logOut();
      await logoutCheck.checkLogout();
    });
  }
);
