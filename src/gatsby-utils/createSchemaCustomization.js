const {
    homeDefs,
    contentDefs,
    generalDefs,
    siteDefs,
    articleDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        homeDefs,
        contentDefs,
        generalDefs,
        siteDefs,
        articleDefs,
    ];

    createTypes(allTypeDefs);
};
