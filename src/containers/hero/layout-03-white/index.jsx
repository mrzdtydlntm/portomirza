import React from "react";
import PropTypes from "prop-types";
import Typed from "react-typed";
import Particles from "react-particles-js";
import Button from "@ui/button";
import Image from "@ui/image";
import { ImageType, HeadingType, ButtonType } from "@utils/types";

const HeroArea = ({ data, id }) => {
    return (
        <section
            id={id}
            className="slider-style-5 rn-section-gap pb--110 align-items-center with-particles"
        >
            <Particles
                className="particles"
                params={{
                    particles: {
                        number: {
                            value: 20,
                            density: {
                                enable: true,
                                value_area: 800,
                            },
                        },
                        color: {
                            value: ["#ff014f"],
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 0,
                                color: "#000000",
                            },
                            polygon: {
                                nb_sides: 4,
                            },
                            image: {
                                src: "img/github.svg",
                                width: 100,
                                height: 100,
                            },
                        },
                        opacity: {
                            value: 0.8,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: false,
                            },
                        },
                        size: {
                            value: 4,
                            random: true,
                            anim: {
                                enable: false,
                                speed: 40,
                                size_min: 0.1,
                                sync: false,
                            },
                        },
                        line_linked: {
                            enable: false,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            out_mode: "out",
                            attract: {
                                enable: false,
                                rotateX: 600,
                                rotateY: 1200,
                            },
                        },
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                            onclick: {
                                enable: true,
                                mode: "push",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 800,
                                size: 40,
                                duration: 2,
                                opacity: 8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 200,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                        },
                    },
                    retina_detect: true,
                    config_demo: {
                        hide_card: false,
                        background_color: "#b61924",
                        background_image: "",
                        background_position: "50% 50%",
                        background_repeat: "no-repeat",
                        background_size: "cover",
                    },
                }}
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-inner">
                            {data?.images?.[0]?.src && (
                                <div className="thumbnail gradient-border gradient-animation">
                                    <Image
                                        src={data.images[0].src}
                                        alt={
                                            data.images[0]?.alt ||
                                            "Al-Amin Bali"
                                        }
                                        id="border"
                                        className="gradient-border"
                                    />
                                </div>
                            )}

                            {data?.headings?.[0] && (
                                <h1>{data.headings[0]?.content}</h1>
                            )}

                            <span className="cd-headline clip is-full-width">
                                {data?.headings?.[1] && (
                                    <span>{data.headings[1]?.content}</span>
                                )}{" "}
                                {data?.animated_texts && (
                                    <Typed
                                        className="animated-text"
                                        strings={data.animated_texts}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        backDelay={1}
                                        loop
                                        smartBackspace
                                    />
                                )}
                            </span>

                            <div className="button-area">
                                {data?.buttons?.map(({ id, path, content }) => (
                                    <Button key={id} path={path}>
                                        <span>{content}</span>
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

HeroArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        animated_texts: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        buttons: PropTypes.arrayOf(PropTypes.shape(ButtonType)),
    }),
};

HeroArea.defaultProps = {
    id: "home",
};

export default HeroArea;
