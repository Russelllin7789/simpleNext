// domain.com/demo
import Card from "../../components/card/Card";
import Title from "../../components/title/title";
import classes from "./demo.module.css";
import { useRef, useState } from "react";

const ORIGINAL_CLASS = [
  {
    id: "picked_product_flash_sale",
    type: "picked_product_list",
    attributes: {
      name: "本⽉熱銷推薦",
      custom: [
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
        {
          id: "2",
          type: "saleable_product",
          attributes: {
            productable_id: "2",
            name: "Cindy 情境式多益單字課",
            slogan: "專屬進度表+線上讀書會，⽤零碎時間攻佔多益⾼分榜!",
            learn_with: null,
            shop_cover_image_url:
              "https://public.wordup.com.tw/shop/books/VClass/Cover_vclass_cindy_P.png",
            students_count: 150,
            currency: "NT",
            list_price: "4900",
            sale_price: "2450",
            tags: ["線上課程", "單字", "多益", "影⽚"],
            average_rating: 4.51,
            rating_count: 50,
          },
        },
        {
          id: "3",
          type: "saleable_product",
          attributes: {
            productable_id: "3",
            name: "iBT 新托福學術字彙「勝」經：必背精華版",
            slogan: "單字死背記不住？透過閱讀來加強你的單字量吧！",
            shop_cover_image_url:
              "https://public.wordup.com.tw/shop/books/best-new_toefl_vocab/Cover_best-new_toefl_vocab_new_D.png",
            students_count: 300,
            currency: "NT",
            list_price: "420",
            sale_price: "330",
            tags: ["⽂章", "閱讀", "托福", "單字"],
            average_rating: 4.46,
            rating_count: 10000,
          },
        },
        {
          id: "4",
          type: "saleable_product",
          attributes: {
            productable_type: "Course",
            productable_id: "4",
            name: "怪物講師教學團隊的7000「單字」＋「⽂法」",
            slogan: "只背單字不夠⽤？⼀本書讓你學會7000單字+⽂法",
            shop_cover_image_url:
              "https://public.wordup.com.tw/shop/books/monster_7000/Cover_monster_7000_new_D.png",
            students_count: 5900,
            currency: "NT",
            list_price: "449",
            sale_price: "390",
            tags: ["英⽂基礎", "⽂法", "單字", "多益", "7000單"],
            average_rating: 4.2,
            rating_count: 99,
          },
        },
      ],
    },
  },
];

const HomePage = (props) => {
  // const [originalClass, setOriginalClass] = useState([])
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 150;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 150;
  };

  return (
    <section className={classes.all_container}>
      <div className={classes.title_container}>
        <Title />
      </div>
      <div className={classes.all_card_container}>
        <div>
          <svg
            className={classes.card_left}
            viewBox="0 0 320 512"
            onClick={scrollLeft}
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            />
          </svg>
          <div className={classes.card_container}>
            <div className={classes.scroll} ref={scrollRef}>
              <div className={classes.scroll_container}>
                {props.saleableClasses.map((renderedClass) => (
                  <Card
                    key={renderedClass.id}
                    singleClass={renderedClass.attributes}
                  />
                ))}
              </div>
            </div>
          </div>
          <svg
            className={classes.card_right}
            viewBox="0 0 320 512"
            onClick={scrollRight}
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // TODO: fetch classes from API
  // const endPointDomain = 'https://backend-domain.com/API/'

  // const response = await fetch(`${endPointDomain}/products/recommend/:recommendation_id`, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });

  // const data = await response.json()
  // const { data: ORIGINAL_CLASS } = data
  // setOriginalClass(ORIGINAL_CLASS);

  const saleableClasses = ORIGINAL_CLASS[0].attributes.custom.filter(
    (item) => item.type === "saleable_product"
  );

  return {
    props: {
      saleableClasses: saleableClasses,
    },
  };
}

export default HomePage;
