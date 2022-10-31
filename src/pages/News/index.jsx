import Layout from '../../components/templates'
import Aside from '../../components/molecules/aside'
import Card from '../../components/molecules/Card';
import './News.scss'
import { newCards } from '../../Data/objectData';
import { elegants } from '../../Data/objectData';


const News = () => {
  const NewsAside1 = {
    "margin-top": "5.8125rem",
    "margin-right": "16.625rem",
    "font-family": "Poppins",
    "font-style": "normal",
    "font-weight": "700",
    "font-size": "3rem",
    "line-height": "4rem",
    "letter-spacing": "0.09375rem",
    "text-transform": "uppercase",
    color: "#00717D",
    width: "24.5625rem",
  };

  const NewsAside2 = {
    background: "#00717D",
    border: "1px solid #FFFFFF",
    color: " #FFFFFF",
    "mix-blend-mode": "normal",
    "padding-left": "1.5rem",
    "padding-bottom": "2.375rem",
    width: "fit-content",
  };

  return (
    <Layout>
      <div className="NewsTop">
        <Aside style={NewsAside1} letters="Latest news & discussions" />
        
          {elegants.map((elegant, index) => (
            <Aside style={NewsAside2} key={index} {...elegant} />
          ))}
        </div>
      {newCards.map((newCard, index) => (
        <Card key={index} {...newCard} />
      ))}
    </Layout>
  );
}

export default News