import SectionHeading from '../common/SectionHeading';
import MenuItemsCard from '../common/MenuItemsCard';
import useFilterMenu from '../../Hooks/useFilterMenu';

const PopularMenu = () => {
   const filteredMenu = useFilterMenu("popular")
    return (
        <div className='my-10'>
            <SectionHeading subHeading="Check it out" heading="FROM OUR MENU"></SectionHeading>
            <div className='grid md:grid-cols-2 gap-5 my-10'>
            {
                filteredMenu.map((item,ind)=><MenuItemsCard key={ind} item={item}></MenuItemsCard>)
            }
            </div>
            <div className='text-center'><button className='py-4 px-2 rounded-md border-b-4 '>VIEW FULL MENU</button></div>
        </div>
    );
};

export default PopularMenu;