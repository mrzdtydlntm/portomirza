import React, { useState } from "react";
import { X } from "react-feather";
import PropTypes from "prop-types";
import cn from "classnames";
import TabContent from "react-bootstrap/TabContent";
import TabContainer from "react-bootstrap/TabContainer";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import LightDemo from "./light-demo";
import DarkDemo from "./dark-demo";

const DemoArea = ({ isOpen, onClose }) => {
    const [isWhite, setIsWhite] = useState(false);
    return (
        <div
            className={cn(
                "demo-modal-area",
                isOpen ? "open" : "",
                isWhite ? "white-version" : ""
            )}
        >
            <div className="wrapper">
                <div className="close-icon">
                    <button className="demo-close-btn" onClick={onClose}>
                        <X />
                    </button>
                </div>
                <div className="rn-modal-inner">
                    <div className="demo-top text-center">
                        <h4 className="title">InBio</h4>
                        <p className="subtitle">
                            Its a personal portfolio template. You can built any
                            personal website easily.
                        </p>
                    </div>
                    <TabContainer defaultActiveKey="demodark">
                        <Nav as="ul" className="popuptab-area">
                            <Nav.Item as="li">
                                <Nav.Link
                                    eventKey="demodark"
                                    className="demo-dark"
                                    onClick={() => setIsWhite(false)}
                                >
                                    Dark Demo
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link
                                    eventKey="demolight"
                                    className="demo-light"
                                    onClick={() => setIsWhite(true)}
                                >
                                    Light Demo
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <TabPane eventKey="demodark">
                                <DarkDemo />
                            </TabPane>
                            <TabPane eventKey="demolight">
                                <LightDemo />
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                </div>
            </div>
        </div>
    );
};

DemoArea.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default DemoArea;
