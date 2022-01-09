const { slugify } = require("../utils");

module.exports = ({ node, actions, createNodeId }) => {
    const { createNode } = actions;
    if (node.internal.type === "HomepagesJson") {
        createNode({
            id: createNodeId(`HomePage-${node.id}`),
            parent: node.id,
            title: node.title,
            content: node.content,
            internal: {
                type: "HomePage",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    if (node.internal.type === "GeneralJson") {
        createNode({
            id: createNodeId(`General-${node.id}`),
            parent: node.id,
            section: node.section,
            button: node.button,
            menu: node.menu,
            copyright_text: node.copyright_text,
            logo: node.logo,
            slogan: node.slogan,
            title: node.title,
            widgets: node.widgets,
            internal: {
                type: "General",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
    if (node.internal.type === "MarkdownRemark") {
        createNode({
            id: createNodeId(`Article-${node.id}`),
            parent: node.id,
            title: node.frontmatter.title,
            slug: slugify(node.frontmatter.title),
            date: node.frontmatter.date,
            image: node.frontmatter.image,
            category: node.frontmatter.category,
            readingTime: node.fields.readingTime.text,
            internal: {
                type: "Article",
                contentDigest: node.internal.contentDigest,
            },
        });
    }
};
