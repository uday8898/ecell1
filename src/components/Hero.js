import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export const Hero = () => {
  return (
    <section id="hero" style={{ position: "relative", top: "0px", left: "0px" }}>

      <div className="carousel-content" style={{ marginBottom: "90px", zIndex: "2" }}>
        <div className='text-center ml-auto mr-auto'>

          <h1 className="hero-title mt-0 text-center"><span
            style={{ color: "#e86105", display: "inline", textAlign: "center" }}>E</span>ntrepreneurship <span style={{ color: "#e86105" }}>Cell</span></h1>
          <p style={{ marginBottom: "0px", marginTop: "2px" }}>IDEAS. ACTIONS. RESULTS.</p>
          <h1>GLA University, Mathura</h1>
        </div>
      </div>
      <Swiper id="carouselExampleControls" className="carousel slide carousel-fade" style={{height: "100vh"}} data-bs-ride="carousel" data-interval="2000"
        loop={true} autoplay={{ delay: 2500 }} centeredSlides={true} modules={[Autoplay]}>
        <SwiperSlide style={{ backgroundColor: "#000000" }}>
          <img className="d-block w-100" src="assets/images/frontpage1.JPG" alt="First slide" style={{ opacity: "0.4", width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#000000" }}>
          <img className="d-block w-100" src="assets/images/frontpage5.JPG" alt="Second slide" style={{ opacity: "0.4", width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#000000" }}>
          <img className="d-block w-100" src="assets/images/frontpage2.jpg" alt="Third slide" style={{ opacity: "0.4", width: "100%" }} />
        </SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "#000000" }}>
          <img className="d-block w-100" src="assets/images/frontpage3.JPG" alt="Third slide" style={{ opacity: "0.4", width: "100%" }} />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
