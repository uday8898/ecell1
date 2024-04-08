import { Link } from "react-router-dom"

export const Gallery = () => {
    return (
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Gallery</h2>
                </div>



                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/127.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/127.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
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
                            <img src="assets/images/gallery/173.JPG" className="img-fluid" alt="" />
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
                            <img src="assets/images/gallery/268.png" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/268.png" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/220.jpeg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/220.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/206.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/207.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/90.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                    <a href="assets/images/gallery/90.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                        <div className="portfolio-wrap">
                            <img src="assets/images/gallery/67.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">

                                <div className="portfolio-links">
                                        <a href="assets/images/gallery/67.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox"><i
                                        className="bx bx-plus"></i></a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-web">

                        <div style={{background: "rgba(17, 17, 17, 0.897)"}}>
                            <img src="assets/images/gallery/18.jpg" className="img-fluid" alt="" style={{opacity: "0.3"}} />
                            <Link to="/gallery" data-gallery="portfolioGallery"
                                style={{position:"absolute",right: "40%",top: "45%",color: "white",fontSize: "20px"}}>View More</Link>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}