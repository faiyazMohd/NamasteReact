import { render, waitFor, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store/store";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/restData";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("Shimmer Should load on Homepage", async () => {
  const body =  
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    
  );

  //   console.log(body);
  const shimmer =  body.getByTestId("rest-shimmer");
    // console.log(shimmer.innerHTML);
  expect(shimmer.children.length).toBe(12);
  expect(shimmer).toBeInTheDocument();
 
});

test("Search Results on Homepage", async () => {
  const body = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  const searchBar =  body.getByTestId("searchBar");
  await waitFor(() => expect(body.getByTestId("searchBar")));
  const restaurants =  body.getByTestId("restaurants");
    console.log(restaurants.children);
  expect(restaurants.children.length).toBe(20);
  // expect(restaurants.children.length).toBe(20);
  //   console.log(restaurants);
});

test("Search for string(Ice Cream) on Homepage", async () => {
  const body = await act(async () =>
    render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    )
  );
  await waitFor(() => expect(body.getByTestId("searchBar")));

  const searchInput =  body.getByTestId("search-input");

  fireEvent.change(searchInput, {
    target: {
      value: "kfc",
    },
  });
  // const searchBar =   body.getByTestId("searchBar");

  // fireEvent.click(searchBar)

  const restaurants =  body.getByTestId("restaurants");
  //   console.log(restaurants.innerHTML);
  expect(restaurants.children.length).toBe(1);
  //   console.log(restaurants);
});
