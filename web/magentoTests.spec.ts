import { test } from '@playwright/test';
//! NOTAS: 
//! Armar el loginStorage con la nueva docu .auth
//! Usar Tags y configurar el setup segun la info encontrada
//? A medida que encuentre mas mejoras ire agregando.

test.describe("TestCases para Magento", () => {
  test.use({ storageState: "web/context/storageLogin.json" }); //? Talvez no lo use aqui
  test("Registro", async ({ page }) => {

  });
  test("Login", async ({ page }) => {

  });
  test("Agreguar a la Wishlist", async ({ page }) => {

  });
  test("Agregar al carrito", async ({ page }) => {

  });
  test("Completar la compra", async ({ page }) => {

    
  });
  test("LoginOut", async ({ page }) => {

  });
});
