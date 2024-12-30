import { useEffect, useState } from "react";
import FoodCard from "../common/FoodCard";
import SectionHeading from "../common/SectionHeading";

const ChefRecommends = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenu(data.filter(item => item.category === 'salad')))
    }, [])
    return (
        <section className="my-10">
            <SectionHeading subHeading="Should Try" heading="CHEF RECOMMENDS"></SectionHeading>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    menu.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
        </section>
    );
};

export default ChefRecommends;