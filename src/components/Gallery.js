import { Link } from "react-router-dom"

export const Gallery = () => {
    return (
        <section id="gallery" className="portfolio">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Gallery</h2>
                </div>



                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/IMG_2937.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/2967(front).jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/IMG_2967.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/DSC_3150.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/173.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/3164.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/3164.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/3161.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/3161.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/3308.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/3308.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/3261.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/tenure-10.0/3261.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/tenure-10.0/3353.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                        <a href="assets/images/gallery/tenure-10.0/3353.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">

                        <div style={{background: "rgba(17, 17, 17, 0.897)", position: "relative"}}>
                            <img src="assets/images/gallery/tenure-10.0/3210.JPG" className="img-fluid" alt="" style={{opacity: "0.3"}} />
                            <Link to="/gallery" data-gallery="portfolioGallery"
                                style={{position:"absolute",right: "40%",top: "45%",color: "white",fontSize: "20px"}}>View More</Link>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
