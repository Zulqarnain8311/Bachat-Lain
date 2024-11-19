import { useContext } from "react";
import HeroFolder from "../../components/heroFolder/HeroFolder";
import HomePageProductCard from "../../components/homeproductcard/HomeProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/tesimonial/Tesimonial";
import Track from "../../components/track/Tracks";
import mycontext from "../../context/MyContext";
import Loader from "../../components/loader/Loader";
import Category from "../../components/category/Category";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <HeroFolder />
        <Category />
        <HomePageProductCard />
        <Track />
        <Testimonial />
      </Layout>
    </div>
  );
};

export default Homepage;
