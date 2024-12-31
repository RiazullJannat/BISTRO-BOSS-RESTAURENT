import { Parallax } from 'react-parallax';

const CommonCover = ({ details }) => {
    const { img, header, des, banner } = details;
    console.log(img, header, des, banner)
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt={header}
            strength={-200}
        >
            <div
                className={`hero ${banner?"h-[800px]":'h-[700px]'}`}
            >
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content text-center w-[60%] bg-black py-20 px-20 bg-opacity-45">
                    <div className="max-w-md text-white">
                        <h1 className={`mb-5 ${banner ? "text-6xl font-bold" : "text-3xl font-semibold"} `}>{header}</h1>
                        <p className="mb-5 font-semibold">
                            {des}
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default CommonCover;