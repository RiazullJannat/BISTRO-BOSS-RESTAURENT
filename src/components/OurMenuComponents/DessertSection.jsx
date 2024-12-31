import CommonCover from "../common/CommonCover";
import bg from "../../assets/menu/dessert-bg.jpeg";
import useFilterMenu from "../../Hooks/useFilterMenu";
import ItemsSection from "../common/ItemsSection";

const DessertSection = () => {
    const dessertMenu = useFilterMenu('dessert');
    const details = {
        img:bg,
        header:"DESSERT",
        des:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        banner:false
    }
    return (
        <div className="my-10">
            <CommonCover details={details}></CommonCover>
            <ItemsSection menu={dessertMenu} btn={'ORDER YOUR FAVOURITE FOOD'}></ItemsSection>
        </div>
    );
};

export default DessertSection;