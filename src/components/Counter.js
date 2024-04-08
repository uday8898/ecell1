import { useState } from "react";
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger";



export const Counter = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)}>
            <section id="counts" className="counts" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <div className="container" data-aos="fade-up">
                    <div className="section-title" style={{ paddingBottom: "10px" }}>
                        <h2 style={{ marginBottom: "50px" }}>Let the numbers peak</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"></i>
                                {
                                    counterOn &&
                                    <CountUp start={0} end={2500} duration={6} />
                                }
                                <h1 style={{ display: "inline-block" }}>+</h1>
                                <p>Members</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                {
                                    counterOn &&
                                    <CountUp start={0} end={36} duration={6} />
                                }
                                <h1 style={{ display: "inline-block" }}>+</h1>
                                <p>Events</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                {
                                    counterOn &&
                                    <CountUp start={0} end={60} duration={6} />
                                }
                                <h1 style={{ display: "inline-block" }}>+</h1>
                                <p>Talks</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                            <div className="count-box">
                                <i className="bi bi-people"></i>
                                {
                                    counterOn &&
                                    <CountUp start={0} end={40} duration={6} />
                                }
                                <h1 style={{ display: "inline-block" }}>+</h1>
                                <p>StartUps</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </ScrollTrigger>
    )
}