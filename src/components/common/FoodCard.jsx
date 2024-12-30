
const FoodCard = ({ item }) => {
	const { image, name, recipe } = item;
	return (
		<div className=" bg-[#F3F3F3] rounded-lg shadow-md overflow-hidden">
			{/* Image Section */}
			<img
				src={image} 
				alt="Caesar Salad"
				className="w-full  object-cover"
			/>

			{/* Content Section */}
			<div className="p-4 text-center">
				{/* Title */}
				<h2 className="text-xl font-semibold text-gray-800">{name}</h2>

				{/* Description */}
				<p className="text-sm text-gray-600 mt-2">
					{recipe}
				</p>

				{/* Button */}
				<button className="py-3 px-5 font-bold text-[#BB8506] border-b-4 rounded-md border-[#BB8506] hover:bg-[#1F2937] mt-4 ">
					ADD TO CART
				</button>
			</div>
		</div>
	);
};

export default FoodCard;