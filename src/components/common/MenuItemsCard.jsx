
const MenuItemsCard = ({ item }) => {
    return (
        <div className="flex items-center space-x-4 p-4 bg-white rounded-md shadow-md ">
            {/* Icon / Image */}
            <div className=" flex items-center justify-center">
                <img src={item.image} alt="" className="rounded-r-full rounded-b-full w-[118px] h-[104px]" />
            </div>

            {/* Text Content */}
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    {/* Title */}
                    <h3 className="text-lg font-semibold tracking-wide uppercase text-gray-800">
                        {item.name}--------------
                    </h3>

                    {/* Price */}
                    <p className="text-gold font-bold">$14.5</p>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm">
                    {item.recipe}
                </p>
            </div>
        </div>
    );
};

export default MenuItemsCard;