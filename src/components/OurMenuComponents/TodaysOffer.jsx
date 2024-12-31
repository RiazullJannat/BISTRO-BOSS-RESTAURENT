import useFilterMenu from "../../Hooks/useFilterMenu";
import ItemsSection from "../common/ItemsSection";
import SectionHeading from "../common/SectionHeading";

const TodaysOffer = () => {
    const filteredMenu = useFilterMenu('popular');
    return (
        <div className="my-10">
            <SectionHeading subHeading="Don't miss" heading="TODAY'S OFFER"></SectionHeading>
            <ItemsSection menu={filteredMenu} btn={"ORDER YOUR FAVOURITE FOOD"}></ItemsSection>
        </div>
    );
};

export default TodaysOffer;