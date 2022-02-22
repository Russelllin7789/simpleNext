import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import HomePage from "./index";

describe("Testing Card component", () => {
  const mockData = [
    {
      id: "1",
      type: "saleable_product",
      attributes: {
        productable_id: "1",
        name: "神猜解多益 ULTIMATE 神上加神套組",
        slogan:
          "⾃學多益也能拿⾼分！坊間唯⼀，形同名師從旁教學的神猜解多益三書套組",
        shop_cover_image_url:
          "https://public.wordup.com.tw/shop/books/liveabc_four_accents/Cover_liveabc_four_accents_new_D.png",
        students_count: 100,
        currency: "NT",
        list_price: "2000",
        sale_price: "1500",
        tags: [
          "名師",
          "模擬考",
          "閱讀測驗",
          "聽⼒測驗",
          "題庫",
          "多益",
          "雙11特價",
        ],
        average_rating: 4.8,
        rating_count: 100,
      },
    },
  ];

  test("renders pricing area", async () => {
    render(<HomePage saleableClasses={mockData} />);
    const discount = await screen.findByText("77折", { exact: false });
    expect(discount).toBeInTheDocument();
  });

  test("simulates the clicking left side svg for scroll bar", async () => {
    render(<HomePage saleableClasses={mockData} />);

    const svg = await screen.findByRole("leftSvg");
    userEvent.click(svg);

    const scrollContainer = screen.getByRole("scrollContainer");
    expect(scrollContainer.scrollLeft).toEqual(-150);

    // *** cannot test functions within functional components ***
    // const homePage = require("./index");
    // homePage.scrollLeft = jest.fn();
    // console.log("homepage:", homePage.scrollLeft);
    // expect(homePage.scrollLeft).toHaveBeenCalled();
  });

  test("simulates the clicking right side svg for scroll bar", async () => {
    render(<HomePage saleableClasses={mockData} />);

    const svg = await screen.findByRole("rightSvg");
    userEvent.click(svg);

    const scrollContainer = screen.getByRole("scrollContainer");
    expect(scrollContainer.scrollLeft).toEqual(150);
  });
});
