import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import { MENU_DATA } from "../../mocks/menuData";
import { fireEvent, render, waitFor } from "@testing-library/react";
import store from "../../utils/store/store";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU_DATA);
    },
  });
});

test("shimmer in menu page", async () => {
  const menuPage = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

  const shimmerMenu = menuPage.getByTestId("shimmer-menu");
  // console.log(shimmerMenu);
  expect(shimmerMenu).toBeInTheDocument();
  //   console.log(shimmerMenu);
});


test("isVeg should toggle veg and non veg in menu page", async () => {
  const menuPage = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );

   await waitFor(()=>menuPage.getByTestId("menuContainer"));

  const isVeg  = menuPage.getByTestId("vegOnlyTogleContainer");
 
  fireEvent.click(isVeg)
  expect(isVeg.style.backgroundColor).toBe("rgb(0, 128, 0)");
  fireEvent.click(isVeg)
  expect(isVeg.style.backgroundColor).toBe("rgb(212, 213, 217)");
});


test("should show offline Text on going offline on menu page", async () => {
  const menuPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    )
  );

  expect(menuPage.queryByTestId("offlineHeadingMenuPage")).toBe(null)

  fireEvent.offline(window);
  const offlineHeadingMenuPage = menuPage.getByTestId("offlineHeadingMenuPage");
  // console.log(offlineHeadingMenuPage.innerHTML);
  expect(offlineHeadingMenuPage.innerHTML).toBe(
    "🔴Offline ! Please check your internet connection"
  );
  fireEvent.online(window);
  expect(menuPage.queryByTestId("offlineHeadingMenuPage")).toBe(null)
});

test("Adding an item should update the cart items in Header", async () => {
  const menuPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => menuPage.getByTestId("menuContainer"));
  const menuContainer = menuPage.getByTestId("menuContainer");
  //   console.log(menuContainer.innerHTML);
  const addItem = menuPage.getAllByTestId("add-item");
  fireEvent.click(addItem[0]);
  fireEvent.click(addItem[1]);
  fireEvent.click(addItem[2]);
  const removeItem = menuPage.getAllByTestId("remove-item");
  fireEvent.click(removeItem[1]);

  const cartItemHeader = menuPage.getByTestId("cartItemLength");
  expect(cartItemHeader.innerHTML).toBe("2");
});

test("Adding an item should update the cart items in Cart Page", async () => {
  const menuPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => menuPage.getByTestId("menuContainer"));
  const menuContainer = menuPage.getByTestId("menuContainer");

  const addItem = menuPage.getAllByTestId("add-item");
  fireEvent.click(addItem[3]);
  //   fireEvent.click(addItem[4]);
  const removeItem = menuPage.getAllByTestId("remove-item");
  //   fireEvent.click(removeItem[3])

  const cartItemCartPage = menuPage.getByTestId("cart-items-cart-page");
  // console.log(cartItemCartPage.innerHTML);
  expect(cartItemCartPage.children.length).toBe(3);
});


test("Adding/removing an item should update the cart items in Menu Item card", async () => {
  const menuPage = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
          <Cart />
        </Provider>
      </StaticRouter>
    )
  );

  await waitFor(() => menuPage.getByTestId("menuContainer"));

  const addItem = menuPage.getAllByTestId("add-item");
  fireEvent.click(addItem[5]);
  const updateItem =  menuPage.getAllByTestId("updateItem");
  fireEvent.click(updateItem[5]);
  fireEvent.click(updateItem[5]);
  fireEvent.click(updateItem[5]);
  const itemQuantityInMenuItem  = menuPage.getAllByTestId("item-quantity-in-menu-item");
  // console.log(itemQuantityInMenuItem[5].innerHTML);
  expect(itemQuantityInMenuItem[5].innerHTML).toBe("4")
  const removeItem = menuPage.getAllByTestId("remove-item");
  fireEvent.click(removeItem[5])
  expect(itemQuantityInMenuItem[5].innerHTML).toBe("3")

  const cartItemCartPage = menuPage.getByTestId("cart-items-cart-page");
  expect(cartItemCartPage.children.length).toBe(4);
});


