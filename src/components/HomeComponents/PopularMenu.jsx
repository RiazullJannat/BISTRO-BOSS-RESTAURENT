import { useEffect, useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import MenuItemsCard from '../common/MenuItemsCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>setMenu(data.filter(item=>item.category==="popular")))
    },[])
    console.log(menu)
    return (
        <div className='my-10'>
            <SectionHeading subHeading="Check it out" heading="FROM OUR MENU"></SectionHeading>
            <div className='grid md:grid-cols-2 gap-5 my-10'>
            {
                menu.map((item,ind)=><MenuItemsCard key={ind} item={item}></MenuItemsCard>)
            }
            </div>
            <div className='text-center'><button className='py-4 px-2 rounded-md border-b-4 '>VIEW FULL MENU</button></div>
        </div>
    );
};

export default PopularMenu;