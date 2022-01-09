import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import PortfolioCard from "@components/portfolio-card/layout-01";
import Slider, { SliderItem } from "@ui/slider";
import { ItemType, SectionTitleType } from "@utils/types";

const sliderOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    cssEase: "linear",
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1124,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 868,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const PortfolioArea = ({ data, id }) => {
    return (
        <div
            id={id}
            className="rn-portfolio-area portfolio-style-three rn-section-gap section-separator"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                className="text-center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                data-aos-once="true"
                            />
                        )}
                    </div>
                </div>
                <div className="row mt--25 mt_md--5 mt_sm--5">
                    <div className="col-lg-12">
                        {data?.items && (
                            <Slider
                                options={{ ...sliderOptions }}
                                nextIcon="ArrowRight"
                                PrevIcon="ArrowLeft"
                                className="portfolio-wrapper portfolio-slick-activation slick-arrow-style-one rn-slick-dot-style"
                            >
                                {data?.items?.map((item) => (
                                    <SliderItem
                                        className="rn-portfolio-slick"
                                        key={item.id}
                                    >
                                        <PortfolioCard
                                            title={item.title}
                                            category={item.category}
                                            path={item.path}
                                            likeCount={item.likeCount}
                                            image={item.images?.[0]}
                                            texts={item.texts}
                                        />
                                    </SliderItem>
                                ))}
                            </Slider>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

PortfolioArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    }),
};

PortfolioArea.defaultProps = {
    id: "portfolio",
};

export default PortfolioArea;
