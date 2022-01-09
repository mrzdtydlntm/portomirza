import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Logo from "@components/logo";
import Icon from "@ui/icon";
import Social, { SocialLink } from "@ui/social";
import WidgetBox from "@components/widgets/widget-box";
import WidgeTitle from "@components/widgets/widget-title";
import WidgetMenu from "@components/widgets/widget-menu";
import { ImageType, MenuType, SocialType } from "@utils/types";

const Footer = ({ className, data }) => {
    return (
        <div
            id="footer"
            className={cn(
                "rn-footer-area footer-style-2 rn-section-gapTop section-separator",
                className
            )}
        >
            <div className="container pb--80 pb_sm--40 plr_sm--20">
                <div className="row">
                    <div className="col-xl-3 col-12 col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="logo-thumbnail">
                            {data?.logo?.[0]?.src && (
                                <Logo image={data.logo[0]} />
                            )}
                        </div>
                        {data?.socials && (
                            <div className="social-icone-wrapper">
                                <Social>
                                    {data.socials?.map((social) => (
                                        <SocialLink
                                            key={social.id}
                                            path={social.path}
                                        >
                                            <Icon name={social.icon} />
                                        </SocialLink>
                                    ))}
                                </Social>
                            </div>
                        )}
                    </div>
                    {data?.widgets?.map((widget) => (
                        <div
                            key={widget.id}
                            className="col-sl-3 col-12 mt_sm--20 col-lg-3 col-md-6 col-sm-6 col-12"
                        >
                            <WidgetBox className="menu-wrapper">
                                {widget?.title && (
                                    <WidgeTitle>{widget.title}</WidgeTitle>
                                )}
                                {widget?.menu && (
                                    <WidgetMenu menu={widget.menu} />
                                )}
                            </WidgetBox>
                        </div>
                    ))}
                </div>
            </div>
            <div className="copyright text-center ptb--40 section-separator">
                <p className="description">
                    &copy; {new Date().getFullYear()}.{" "}
                    {data?.copyright_text && (
                        <span
                            dangerouslySetInnerHTML={{
                                __html: data.copyright_text,
                            }}
                        />
                    )}
                </p>
            </div>
        </div>
    );
};

Footer.propTypes = {
    className: PropTypes.string,
    data: PropTypes.shape({
        logo: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        copyright_text: PropTypes.string,
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
        widgets: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string,
                menu: PropTypes.arrayOf(PropTypes.shape(MenuType)),
            })
        ),
    }),
};

export default Footer;
