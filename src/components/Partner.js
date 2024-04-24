import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


export const Partner = () => {
    return (
        <section id="partners" className="partners">
            <div className="container" data-aos="zoom-in">

                <Swiper className="clients-slider align-items-center d-flex flex-column-reverse" loop={true}  breakpoints={{
                                320: {
                                    slidesPerView: 2,
                                    spaceBetween: 100
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 100
                                },
                                1200: {
                                    slidesPerView: 6,
                                    spaceBetween: 100
                                }
                            }}>
                    <div className="section-title">
                        <h2>Our Partners</h2>
                    </div>
                    <div className='img-container'  >
                        <SwiperSlide><img src="assets/images/gla-university-logo.jpg" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/images/logo tagline (png).png" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/images/upstart_logo (1).png" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/images/IIC LOGO.png" className="img-fluid" alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/images/Startup_Launchpad_withoutbg-01-02.png" className="img-fluid"
                            alt="" /></SwiperSlide>
                        <SwiperSlide><img src="assets/images/GenieLogo-01.png" className="img-fluid" alt="" /></SwiperSlide>
                    </div>
                </Swiper>
            </div>
        </section>
    )
};
