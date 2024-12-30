import bgImg from "../../assets/home/chef-service.jpg"
const Bistro = () => {
    return (
        <div style={{backgroundImage:`url(${bgImg})`}} className="h-[250px] lg:h-[572px] w-full bg-cover bg-center flex justify-center items-center text-center my-10">
            <div className="bg-blur p-3 lg:p-16 w-[90%] md:w-[70%] bg-white bg-opacity-25 backdrop-blur-md">
                <h1 className="text-2xl font-bold  my-4 text-black">BISTRO BOSS</h1>
                <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt sapiente eos corrupti quis odit recusandae sunt tempora assumenda atque, deleniti illum, eum maxime molestias voluptatem nemo ullam iure harum.</p>
            </div>
        </div>
    );
};

export default Bistro;