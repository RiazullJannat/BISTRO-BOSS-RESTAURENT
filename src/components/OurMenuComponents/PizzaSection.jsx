import CommonCover from "../common/CommonCover";
import bg from "../../assets/menu/pizza-bg.jpg";
import useFilterMenu from "../../Hooks/useFilterMenu";
import ItemsSection from "../common/ItemsSection";

const PizzaSection = () => {
    const pizzaMenu = useFilterMenu('pizza');
    const details = {
        img:bg,
        header:"PIZZA",
        des:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        banner:false
    }
    return (
        <div className="my-10">
            <CommonCover details={details}></CommonCover>
            <ItemsSection menu={pizzaMenu} btn={'ORDER YOUR FAVOURITE FOOD'}></ItemsSection>
        </div>
    );
};

export default PizzaSection;