import Layout from "../../components/templates";
import Contents from "../../components/organisms/contents";
import Parag from "../../components/atoms/paragraph/Parag";
import FirstHeader from "../../components/atoms/header/FirstHeader";
import Button from "../../components/atoms/buttons";
import { recentJobs } from "../../Data/objectData";
import Content2 from "../../components/organisms/content2nd";

const Home = () => {
  return (
    <Layout
      children={
        <section style={{ display: "flex", "flex-direction": "column" }}>
          <Contents />
          <Parag
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi pellentesque eros nec"
            wi="70.5rem"
            ds="flex"
            as="center"
            ta="left"
            fw="400"
            fz="1.5rem"
            lh="2.25rem"
            co="#00717D"
            ls="-0.025rem"
          />
          <FirstHeader
            words="Recently Posted Jobs"
            ml="22.875rem"
            mt="3.9375rem"
            wi="25.9375rem"
            fw="500"
            fz="2rem"
            lh="2.4375rem"
            tt="uppercase"
            co="#424242"
          />
          {recentJobs.map((recentJob, index) => (
            <Content2 key={index} {...recentJob} />
          ))}
          <Button title="More Updates" customClasses="butat" />
        </section>
      }
    />
  );
};

export default Home;
