import { useEffect, useState } from "react";
import SectionHeading from "../common/SectionHeading";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])
    return (
        <div>
            <SectionHeading subHeading="What our client say" heading="TESTIMONIALS"></SectionHeading>
            <div>
                <div className="flex justify-center my-10"> <FaQuoteLeft size={48} /></div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        testimonial.map(item =>
                            <SwiperSlide key={item._id}>
                                <div className="my-10 ">
                                    <div className="flex justify-center my-5"> <Rating
                                        style={{ maxWidth: 180 }}
                                        value={item.rating}
                                        readOnly
                                    /></div>
                                    <p className=" mb-4 text-center">
                                        {item.details}
                                    </p>

                                    {/* Author Name */}
                                    <p className="text-yellow-500 font-semibold text-lg text-center">{item.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;