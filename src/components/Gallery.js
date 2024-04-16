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
                            <img src="assets/images/gallery/246.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/127.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/176.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/176.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/247.JPG" className="img-fluid" alt="" />
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
                            <img src="assets/images/gallery/210.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/210.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/222.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/222.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/206.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/206.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/90.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/90.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/67.JPG" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                        <a href="assets/images/gallery/67.JPG" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">

                        <div style={{background: "rgba(17, 17, 17, 0.897)", position: "relative"}}>
                            <img src="assets/images/gallery/18.JPG" className="img-fluid" alt="" style={{opacity: "0.3"}} />
                            <Link to="/gallery" data-gallery="portfolioGallery"
                                style={{position:"absolute",right: "40%",top: "45%",color: "white",fontSize: "20px"}}>View More</Link>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}
