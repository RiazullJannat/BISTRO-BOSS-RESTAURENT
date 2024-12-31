import MenuItemsCard from "./MenuItemsCard";

const ItemsSection = ({menu, btn}) => {
    return (
        <div>
            <div className='grid md:grid-cols-2 gap-5 my-10'>
                {
                    menu.map((item, ind) => <MenuItemsCard key={ind} item={item}></MenuItemsCard>)
                }
            </div>
            <div className='text-center'><button className='py-4 px-2 rounded-md border-b-4 '>{btn}</button></div>
        </div>
    );
};

export default ItemsSection;