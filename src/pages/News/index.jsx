import Layout from "../../components/templates";
import Aside from "../../components/molecules/aside";
import Card from "../../components/molecules/Card";
import "./News.scss";
import { newCards } from "../../Data/objectData";
import { elegants } from "../../Data/objectData";

const News = () => {
  return (
    <Layout>
      <div className="NewsTop">
        <aside className="newside">Latest news & discussions</aside>

        {elegants.map((elegant, index) => (
          <Aside key={index} {...elegant} />
        ))}
      </div>
      {newCards.map((newCard, index) => (
        <Card key={index} {...newCard} />
      ))}
    </Layout>
  );
};

export default News;
