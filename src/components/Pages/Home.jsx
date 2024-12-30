import Banner from "../HomeComponents/Banner";
import Bistro from "../HomeComponents/Bistro";
import Category from "../HomeComponents/Category";
import ChefRecommends from "../HomeComponents/ChefRecommends";
import FeaturedItem from "../HomeComponents/FeaturedItem";
import PopularMenu from "../HomeComponents/PopularMenu";
import Testimonials from "../HomeComponents/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner> 
            <Category></Category>
            <Bistro></Bistro>
            <PopularMenu></PopularMenu>
            <ChefRecommends></ChefRecommends>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;