import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store/store";
import { StaticRouter } from "react-router-dom/server";
// import UserContext from "../../utils/contexts/UserContext";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);
  //   const Logo = header.getByTestId("logo")
  const Logo = header.getAllByTestId("logo");
  //   console.log(Logo);
  expect(Logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("Online status should be red on going offline", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("✅");
  fireEvent.offline(window);
  expect(onlineStatus.innerHTML).toBe("🔴");
});

test("Online status should be green on going online", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  // console.log(onlineStatus);
  expect(onlineStatus.innerHTML).toBe("✅");
  fireEvent.offline(window);
  expect(onlineStatus.innerHTML).toBe("🔴");

  fireEvent.online(window);
  expect(onlineStatus.innerHTML).toBe("✅");
});

test("cart items should be zero on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cartItemLength = header.getByTestId("cartItemLength");
  // console.log(cartItemLength);
  expect(cartItemLength.innerHTML).toBe("0");
});

describe("color should on  mouseOver and mouseLeave on List items in Header", () => {
  it("should change color on hovering About list item", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const aboutListItem = header.getByTestId("about-list-item");
    const aboutText = header.getByText("About");
    expect(aboutText.style.color).toBe("rgb(0, 0, 0)");
    fireEvent.mouseOver(aboutListItem);
    expect(aboutText.style.color).toBe("rgb(243, 99, 11)");
    fireEvent.mouseLeave(aboutListItem);
    expect(aboutText.style.color).toBe("rgb(0, 0, 0)");
  });

  it("should change color on hovering Offers list item", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const offerListItem = header.getByTestId("offer-list-item");
    const offerText = header.getByText("Offers");
    expect(offerText.style.color).toBe("rgb(0, 0, 0)");
    fireEvent.mouseOver(offerListItem);
    expect(offerText.style.color).toBe("rgb(243, 99, 11)");
    fireEvent.mouseLeave(offerListItem);
    expect(offerText.style.color).toBe("rgb(0, 0, 0)");
  });


  it("should change color on hovering Sign In list item", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const signInListItem = header.getByTestId("signIn-list-item");
    const signInText = header.getByText("Sign In");
    expect(signInText.style.color).toBe("rgb(0, 0, 0)");
    fireEvent.mouseOver(signInListItem);
    expect(signInText.style.color).toBe("rgb(243, 99, 11)");
    fireEvent.mouseLeave(signInListItem);
    expect(signInText.style.color).toBe("rgb(0, 0, 0)");
  });


  it("should change color on hovering Cart list item", () => {
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );
    const cartItemLength = header.getByTestId("cartItemLength");
    const cartText = header.getByText("Cart");
    expect(cartText.style.color).toBe("rgb(0, 0, 0)");
    fireEvent.mouseOver(cartItemLength);
    expect(cartText.style.color).toBe("rgb(243, 99, 11)");
    fireEvent.mouseLeave(cartItemLength);
    expect(cartText.style.color).toBe("rgb(0, 0, 0)");
  });


});
