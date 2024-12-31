import { Helmet } from "react-helmet-async";
import CommonCover from "../common/CommonCover";
import bannerBg from "../../assets/menu/banner3.jpg"
import TodaysOffer from "../OurMenuComponents/TodaysOffer";
import DessertSection from "../OurMenuComponents/DessertSection";
import PizzaSection from "../OurMenuComponents/PizzaSection";
import SaladSection from "../OurMenuComponents/SaladsSection";
import SoupSection from "../OurMenuComponents/Soups";

const OurMenu = () => {
    const bannerDetails = {
        img : bannerBg,
        header : "OUR MENU",
        des:"WOULD YOU LIKE TO TRY DISH?",
        banner : true
    }
    return (
        <div>
            <Helmet><title>Bistro | Menu</title></Helmet>
            <CommonCover details={bannerDetails}></CommonCover>
            <TodaysOffer></TodaysOffer>
            <DessertSection></DessertSection>
            <PizzaSection></PizzaSection>
            <SaladSection></SaladSection>
            <SoupSection></SoupSection>
        </div>
    );
};

export default OurMenu;