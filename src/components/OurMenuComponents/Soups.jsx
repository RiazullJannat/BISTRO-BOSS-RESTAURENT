import CommonCover from "../common/CommonCover";
import bg from "../../assets/menu/soup-bg.jpg";
import useFilterMenu from "../../Hooks/useFilterMenu";
import ItemsSection from "../common/ItemsSection";

const SoupSection = () => {
    const soupMenu = useFilterMenu('soup');
    const details = {
        img:bg,
        header:"SOUP",
        des:"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        banner:false
    }
    return (
        <div className="my-10">
            <CommonCover details={details}></CommonCover>
            <ItemsSection menu={soupMenu} btn={'ORDER YOUR FAVOURITE FOOD'}></ItemsSection>
        </div>
    );
};

export default SoupSection;