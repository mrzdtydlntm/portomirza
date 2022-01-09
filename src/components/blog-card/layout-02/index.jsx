import React, { useState } from "react";
import PropTypes from "prop-types";
import { CardListItem } from "@ui/card-list";
import BlogModal from "@components/modal-blog";
import { ImageType } from "@utils/types";

const BlogCard = ({ title, image, date, content }) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <CardListItem
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
            >
                {title}
            </CardListItem>
            <BlogModal
                show={show}
                setShow={setShow}
                title={title}
                date={date}
                image={image}
                content={content}
            />
        </>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default BlogCard;
