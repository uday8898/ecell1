import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import { TeamOne } from "../components/Teams/Team-01";
import { TeamTwo } from "../components/Teams/Team-02";
import { TeamThree } from "../components/Teams/Team-03";
import { TeamFour } from "../components/Teams/Team-04";
import { TeamFive } from "../components/Teams/Team-05";
import { TeamSix } from "../components/Teams/Team-06";
import { TeamSeven } from "../components/Teams/Team-07";
import { TeamNine } from "../components/Teams/Team-09";



export const TeamCouncil = () => {
    const [activeSlider, setActiveSlider] = useState("1");
    const [councilText, setCouncilText] = useState("Meet E-Cell 1.0");
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const splitHash = hash.split("-");
            if (splitHash[1] !== "1") {
                setActiveSlider(splitHash[1]);
                setCouncilText(`Meet E-Cell ${splitHash[1]}.0`)
            }

        }
    }, [])
    const changeTeam = (team) => {
        switch (team) {
            case '1':
                setActiveSlider("1");
                setCouncilText("Meet E-Cell 1.0");
                break;
            case '2':
                setActiveSlider("2");
                setCouncilText("Meet E-Cell 2.0");
                break;
            case '3':
                setActiveSlider("3");
                setCouncilText("Meet E-Cell 3.0");
                break;
            case '4':
                setActiveSlider("4");
                setCouncilText("Meet E-Cell 4.0");
                break;
            case '5':
                setActiveSlider("5");
                setCouncilText("Meet E-Cell 5.0");
                break;
            case '6':
                setActiveSlider("6");
                setCouncilText("Meet E-Cell 6.0");
                break;
            case '7':
                setActiveSlider("7");
                setCouncilText("Meet E-Cell 7.0");
                break;
            case '9':
                setActiveSlider("9");
                setCouncilText("Meet E-Cell 9.0");
                break;

            default:
                break;
        }

    }


    return (
        <>
            <nav id="council-nav" className="team-council order-last order-lg-0" style={{marginTop: "8rem" }}>
                <ul>
                    <li><a onClick={()=>{changeTeam('1')}} style={{ fontFamily: "Arial,Helvetica,sans-serif", cursor: "pointer"}} className={`${activeSlider=='1' && 'active'}`}>E-Cell 1.0</a></li>
                    <li><a onClick={()=>{changeTeam('2')}} style={{ fontFamily: "Arial, Helvetica, sans-serif", cursor: "pointer"}} className={`${activeSlider=='2' && 'active'}`}>E-Cell 2.0</a></li>
                    <li><a onClick={()=>{changeTeam('3')}} style={{ fontFamily: "Arial,Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='3' && 'active'}`}>E-Cell 3.0</a></li>
                    <li><a onClick={()=>{changeTeam('4')}} style={{ fontFamily: "Arial, Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='4' && 'active'}`}>E-Cell 4.0</a></li>
                    <li><a onClick={()=>{changeTeam('5')}} style={{ fontFamily: "Arial, Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='5' && 'active'}`}>E-Cell 5.0</a></li>
                    <li><a onClick={()=>{changeTeam('6')}} style={{ fontFamily: "Arial, Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='6' && 'active'}`}>E-Cell 6.0</a></li>
                    <li><a onClick={()=>{changeTeam('7')}} style={{ fontFamily: "Arial, Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='7' && 'active'}`}>E-Cell 7.0</a></li>
                    <li><a onClick={()=>{changeTeam('9')}} style={{ fontFamily: "Arial, Helvetica ,sans-serif", cursor: "pointer"}} className={`${activeSlider=='9' && 'active'}`}>E-Cell 9.0</a></li>
                </ul>
            </nav>

            <section id="team" className="team section-bg" >
                <div>
                    <div >
                        <div>
                            <Swiper className="container ml-5 d-flex flex-column-reverse" data-aos="fade-up" navigation={false} loop={false} autoplay={{ delay: 2500 }} centeredSlides={true} modules={[Autoplay, Navigation]} breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 20
                                },
                                1200: {
                                    slidesPerView: 4,
                                    spaceBetween: 20
                                }
                            }} >
                                <div className="section-title">
                                    <h2>{councilText}</h2>
                                </div>

                                {
                                    activeSlider === "1" && <div className="row">
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Mohit Divyansh Tripathi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/mohit-tripathi-7a98746b/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Mohit Divyansh Tripathi</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Ravi Shankar Dubey-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/rsdubey/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ravi Shankar Dubey</h4>
                                                    <span>Head, Data Analysis</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Aayush Singhal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/aayushsinghal24/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Aayush Singhal</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Prankur Chaturvedi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/prankur/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Prankur Chaturvedi</h4>
                                                    <span>Head, Event Management</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Siddhant Agrawal-01.png" className="img-fluid" alt="" />

                                                </div>
                                                <div className="member-info">
                                                    <h4>Siddhant Agrawal</h4>
                                                    <span>Head, Fianance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Anindya Singh-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/anindyasingh/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Anindya Singh</h4>
                                                    <span>Head, Media and Publicity</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Dhruv Dhingra-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/dhruv-dhingra-a7502067/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Dhruv Dhingra</h4>
                                                    <span>Head, Design And Development</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Amit Mishra-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/amit-mishra-1b7610103/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Amit Mishra</h4>
                                                    <span>Head, Campus Affairs</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                }

                                {
                                    activeSlider === "2" && <div className="row">

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Prankur Chaturvedi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/prankur" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Prankur Chaturvedi</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Jay Kattyayan-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/jay-kattyayan" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Jay Kattyayan</h4>
                                                    <span>Vice President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Parth Dutt-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/parth-dutt-38b793167" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Parth Dutt</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Karan Bhardwaj-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/karanbhardwaj619" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Karan Bhardwaj</h4>
                                                    <span>Head, Event Management</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Bhavya Hardasani-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/bhavya-hardasani-937153118" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Bhavya Hardasani</h4>
                                                    <span>Head, Finance & Hospitality</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Amit Mishra-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/amit-mishra-1b7610103" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Amit Mishra</h4>
                                                    <span>Head, Media and Publicity</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Akansha Verma-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="#" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Akansha Verma</h4>
                                                    <span>Head, Design And Development</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/2.0/Siddhartha Bajpai-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/sid95" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Siddhartha Bajpai</h4>
                                                    <span>Head, Campus Affairs</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Ravi Shankar Dubey-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/rsdubey/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ravi Shankar Dubey</h4>
                                                    <span>Head, Data Analysis</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Aayush Singhal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/aayushsinghal24/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Aayush Singhal</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Prankur Chaturvedi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/prankur/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Prankur Chaturvedi</h4>
                                                    <span>Head, Event Management</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Siddhant Agrawal-01.png" className="img-fluid" alt="" />

                                                </div>
                                                <div className="member-info">
                                                    <h4>Siddhant Agrawal</h4>
                                                    <span>Head, Fianance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Anindya Singh-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/anindyasingh/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Anindya Singh</h4>
                                                    <span>Head, Media and Publicity</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Dhruv Dhingra-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/dhruv-dhingra-a7502067/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Dhruv Dhingra</h4>
                                                    <span>Head, Design And Development</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/1.0/Amit Mishra-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/amit-mishra-1b7610103/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Amit Mishra</h4>
                                                    <span>Head, Campus Affairs</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                }

                                {
                                    activeSlider === "3" && <div className="row">
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Siddhartha Bajpai-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/sid95/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Siddhartha Bajpai</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Pranao Sinha-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/pranao/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Pranao Sinha</h4>
                                                    <span>Vice President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Ashay Vishnoi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/ashay-vishnoi/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ashay Vishnoi</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Sharad Pal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="#" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Sharad Pal</h4>
                                                    <span>Head, Event Management</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Nirmal Kumar-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/nknirmal/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Nirmal Kumar</h4>
                                                    <span>Head, Fianance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Shivam Tureha-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/shivam0000" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Shivam Tureha</h4>
                                                    <span>Head, Publicity and Promotions</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Rishabh Srivastava-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/rishabhsrivastava0205" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Rishabh Srivastava</h4>
                                                    <span>Head, Design And Development</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/3.0/Prashun Dalmia-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/prashun-dalmia" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Prashun Dalmia</h4>
                                                    <span>Head, Web Development</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>



                                    </div>
                                }

                                {
                                    activeSlider === "4" && <div className="row">
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Sagar Gupta-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/sagav-gupta" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Sagar Gupta</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Nihit Jain-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="#" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Nihit Jain</h4>
                                                    <span>Head, Data Analysis</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Ashay Vishnoi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/ashay-vishnoi" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ashay Vishnoi</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Shubham Ratani-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/shubham-ratani-76baa5131" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Shubham Ratani</h4>
                                                    <span>Head, Hospitality</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Krishan Agrawal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/krishanag98" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Krishan Agrawal</h4>
                                                    <span>Head, Finance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Nakul Kaushal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/nakulkaushal" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Nakul Kaushal</h4>
                                                    <span>Head, Public Realtions</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/4.0/Nilesh Singh-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/nilesh97" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Nilesh Singh</h4>
                                                    <span>Head, Operations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                    </div>
                                }

                                {
                                    activeSlider === "5" && <div className="row">
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Sankalp Chaturvedi-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/sankalp-chaturvedi-7002514b" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Sankalp Chaturvedi</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Kashish Sahu-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/kashish-sahu-07b240163" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Kashish Sahu</h4>
                                                    <span>General Secretary</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Shubhangi Singh-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/singhshubhangi" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Shubhangi Singh</h4>
                                                    <span>Head, Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Adesh Chauhan-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/adesh-chauhan" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Adesh Chauhan</h4>
                                                    <span>Head, Design</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>


                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Ayush Gupta-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="http://linkedin.com/in/ayush-gupta-200907172" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ayush Gupta</h4>
                                                    <span>Head, Fianance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Riya Narain-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/98rs13" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Riya Narain</h4>
                                                    <span>Head, Public Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Mayank Gupta-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/mayank-gupta-430259188" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Mayank Gupta</h4>
                                                    <span>Head, Technical</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/5.0/Gitansh Sehgal-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/gitansh-sehgal-23264a166/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Gitansh Sehgal</h4>
                                                    <span>Head, Marketing & Sponsership</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                }

                                {
                                    activeSlider === "6" && <div className="row">

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Naman-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/gandhinaman" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Naman Gandhi</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Jaideep-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/jai12/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Jaideep Lalchandani</h4>
                                                    <span>VP, Marketing</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Deeksha-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/deeksha-valecha-1931b4176/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Deeksha Valecha</h4>
                                                    <span>VP, Incubation</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Shailja-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/shailja-tripathi-104168177/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Shailja Tripathi</h4>
                                                    <span>Head, Finance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Naman-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/gandhinaman" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Naman Gandhi</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Jaideep-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/jai12/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Jaideep Lalchandani</h4>
                                                    <span>VP, Marketing</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Deeksha-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/deeksha-valecha-1931b4176/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Deeksha Valecha</h4>
                                                    <span>VP, Incubation</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/6.0/Shailja-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/shailja-tripathi-104168177/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Shailja Tripathi</h4>
                                                    <span>Head, Finance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                }

                                {
                                    activeSlider === "7" && <div className="row">

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Alok-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/______.ojha.______/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Alok K. Ojha</h4>
                                                    <span>President & VP, Operations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Gaurang-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="http://linkedin.com/in/gaurangk30" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/__.gaurang.__/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Gaurang Khanna</h4>
                                                    <span>Co-President & VP, Marketing</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Muskan-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/muskan-bansal-9047551b2" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/muskan8850?utm_medium=copy_link" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Muskan Bansal</h4>
                                                    <span>VP, Incubation</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Pratima-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/pratima-singh-48713b155" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/pratima.singh2896" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Pratima Singh</h4>
                                                    <span>Head, Finance</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Keshav-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/amit-mishra-1b7610103/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/muskan8850?utm_medium=copy_link" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Keshav Shakti Singh</h4>
                                                    <span>Head, Investor Networking</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Yahskant-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/keshav-shakti-singh-83a462201" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/ikeshavshakti/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Yashkant Bajpai</h4>
                                                    <span>Head, Events & Logistics</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Ishan-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/ishan-joshi-432093212" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/_ishan_702_?utm_medium=copy_link" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Ishan Joshi</h4>
                                                    <span>Co-Head, Events & Logistics</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/7.0/Pragya-01.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/pragya-singh-6a7235206" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/_.pragya_singh._/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Pragya Singh</h4>
                                                    <span>Associate Head, Events & Logistics</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                }

                                {
                                    activeSlider === "9" && <div className="row">


                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Uday.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="http://linkedin.com/in/udayy" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/belikeeuday/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Uday Gupta</h4>
                                                    <span>President</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Animesh.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/animesh-gautam-961421251/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Animesh Gautam</h4>
                                                    <span>Team Data Analysis & Event Reporting</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/hardik.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Hardik Gaur</h4>
                                                    <span>Team Data Analysis & Event Reporting</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="400">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Divyansh.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/divyanshsharma99/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/divyansh.994" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Divyansh Sharma</h4>
                                                    <span>Team Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="100">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Drashya.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/drashyakathuria/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/drashya.jpg" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Drashya Kathuria</h4>
                                                    <span>Team Corporate Relations</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="200">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Abhishek.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/abhishek-chaudhary-311806262/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/abhishekkk_.21/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Abhishek Chaudhary</h4>
                                                    <span>Team Graphics & Design</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Tanisha.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/tanisha-agarwal-1aa694242/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://instagram.com/tanyyy_sha" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Tanisha Agarwal</h4>
                                                    <span>Team Media & Publicity</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide className="col-lg-3 col-md-6 d-flex align-items-stretch">
                                            <div className="member" data-aos="fade-up" data-aos-delay="300">
                                                <div className="member-img">
                                                    <img src="assets/images/StudentCouncil/9.0/Bhavya.png" className="img-fluid" alt="" />
                                                    <div className="social">
                                                        <a href="https://www.linkedin.com/in/bhavya-goyal-553886262/" target="blank"><i className="bi bi-linkedin"></i></a>
                                                        <a href="https://www.instagram.com/bhavyaaaa___12/" target="blank"><i className="bi bi-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div className="member-info">
                                                    <h4>Bhavya Goyal</h4>
                                                    <span>Team Media & Publicity</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </div>

                                }

                            </Swiper>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}