import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store/store";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import Header from "../Header";
import RestaurantMenu from "../RestaurantMenu";
import { MENU_DATA } from "../../mocks/menuData";
import { act } from "react-dom/test-utils";

MENU_DATA;
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("Empty cart must be shown if not cart Items in Cart Page", async () => {
  const cartPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );
  const emptyCart = cartPage.getByTestId("empty-cart");
  // console.log(emptyCart.innerHTML);
  expect(emptyCart).toBeInTheDocument();
});

test("Adding/removing an item should update the cart items in Cart Page", async () => {
  const cartPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => cartPage.getByTestId("menuContainer"));
  const addItem = cartPage.getAllByTestId("add-item");

  fireEvent.click(addItem[0]);
  fireEvent.click(addItem[1]);
  fireEvent.click(addItem[2]);
  fireEvent.click(addItem[3]);
  //   const removeItem = cartPage.getAllByTestId("remove-item");
  //   fireEvent.click(removeItem[1])

  await waitFor(() => cartPage.getByTestId("cart-page"));
  const cartPageContainer = cartPage.getByTestId("cart-page");
  //   console.log(cartPageContainer);

  const addItemCartPage = cartPage.getAllByTestId("add-item-cart-page");
  fireEvent.click(addItemCartPage[0]); //2
  fireEvent.click(addItemCartPage[0]); //3
  fireEvent.click(addItemCartPage[0]); //4
  fireEvent.click(addItemCartPage[0]); //5
  const removeItemCartPage = cartPage.getAllByTestId("remove-item-cart-page");
  fireEvent.click(removeItemCartPage[0]); //4
  fireEvent.click(removeItemCartPage[0]); //3

  const quantityCartPage = cartPage.getAllByTestId("quantityCartPage");

  expect(quantityCartPage[0].innerHTML).toBe("3");

  const cartItemCartPage = cartPage.getByTestId("cart-items-cart-page");
  expect(cartItemCartPage.children.length).toBe(4);
});

test("Checking on checkbox should change the text in Cart Page", () => {
  const cartPage = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const checkboxCartPage = cartPage.getByTestId("checkbox-cart-page");
  fireEvent.click(checkboxCartPage, { target: { value: true } });
  const deliveryText = cartPage.getByTestId("delevery-text");
  expect(deliveryText.innerHTML).toBe(
    "Our delivery partner will call to confirm. Pleaseensure that your address has all the required details."
  );
});

test("Should clear the cart on clicking the clear cart image in Cart Page", () => {
  const cartPage = render(
    <StaticRouter>
      <Provider store={store}>
        <Cart />
      </Provider>
    </StaticRouter>
  );

  const clearCart = cartPage.getByTestId("clear-cart");
  fireEvent.click(clearCart);
  const emptyCart = cartPage.getByTestId("empty-cart");
  expect(emptyCart).toBeInTheDocument();
});
