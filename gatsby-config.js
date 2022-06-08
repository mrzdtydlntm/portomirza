require("dotenv").config({
    path: `.env`,
});

// const strapiConfig = {
//     apiURL: process.env.STRAPI_API_URL,
//     accessToken: process.env.STRAPI_TOKEN,
//     collectionTypes: ["article", "company", "author"],
//     singleTypes: [],
//     name: `data`,
// };

module.exports = {
    siteMetadata: {
        siteUrl: "https://mrzdtydlntm.my.id",
        title: "Mirza's Portfolio",
        description:
            "This is Mirza's portfolio. In this site you will know better about Mirza's achievement, history and record",
        author: "Mirza Aditya Deliantama",
        siteLanguage: "en",
        image: "banner.jpeg",
        titleTemplate: "mrzdtydlntm",
        twitterUsername: "@mrzdtydlntm",
        getform_url:
            "https://getform.io/f/0d646e66-6ca3-419b-9d1a-6b998852001f",
        socials: [
            {
                id: 1,
                title: "facebook",
                path: "https://facebook.com/mrzdtydlntm",
                icon: "Facebook",
            },
            {
                id: 2,
                title: "instagram",
                path: "https://instagram.com/mrzdtydlntm",
                icon: "Instagram",
            },
            {
                id: 3,
                title: "linkedin",
                path: "https://www.linkedin.com/in/mrzdtydlntm/",
                icon: "Linkedin",
            },
        ],
        contact: {
            phone: "6281394473670",
            email: "mrzdtydlntm@gmail.com",
        },
    },
    plugins: [
        {
            resolve: "gatsby-plugin-sass",
            options: {
                useResolveUrlLoader: {
                    options: {
                        sourceMap: true, //default is false
                    },
                },
            },
        },
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
                ignore: [`**/\.*`],
            },
        },
        // {
        //     resolve: `gatsby-source-strapi`,
        //     options: strapiConfig,
        // },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data`,
                ignore: [`**/\.*`],
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                    "gatsby-remark-reading-time",
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Mirza Aditya Deliantama",
                short_name: "mrzdtydlntm",
                theme_color: "#ff014f",
                background_color: "#ffffff",
                display: "standalone",
                scope: "/",
                start_url: "/",
                icon: "src/assets/images/favicon.png",
            },
        },
    ],
};
