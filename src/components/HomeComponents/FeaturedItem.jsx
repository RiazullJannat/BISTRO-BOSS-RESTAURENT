import bgImg from "../../assets/home/featured.jpg"
import SectionHeading from "../common/SectionHeading";

const FeaturedItem = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgImg})` }}
            className=" h-[848px] w-full bg-fixed bg-cover bg-center"
        >
            <div className=" inset-0 bg-black bg-opacity-50 w-full h-full">
                <div className="py-20">
                    <SectionHeading subHeading="Check it out" heading="FORM OUR MENU"></SectionHeading>
                    <div className="flex flex-col md:flex-row  rounded-lg w-[90%] mx-auto my-10">
                        {/* Image Section */}
                        <div className="w-full md:w-1/2">
                            <img
                                src={bgImg} // Replace with your image URL
                                alt="Food"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 flex items-center p-6 md:p-12 text-white">
                            <div>
                                <p className="text-sm md:text-md mb-2">March 20, 2023</p>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">WHERE CAN I GET SOME?</h2>
                                <p className="text-sm md:text-md mb-4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                                    voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                                    Eaque repellat recusandae ad laudantium tempore consequuntur
                                    consequatur omnis ullam maxime tenetur.
                                </p>
                                <button className="py-3 px-5 font-bold  border-b-4 rounded-md border-white
                                  mt-4 ">
                                    READ MORE 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;