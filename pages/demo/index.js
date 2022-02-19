// domain.com/demo
import Card from "../../components/card/Card";
import Title from "../../components/title/title";
import classes from "./demo.module.css";

const HomePage = () => {
  return (
    <section className={classes.all_container}>
      <Title />
      <Card />
    </section>
  );
};

export default HomePage;
