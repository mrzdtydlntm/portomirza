import { graphql } from "gatsby";

export const query = graphql`
    fragment Item on Item {
        id
        title
        subtitle
        description
        icon
        path
        texts {
            content
        }
        category
        images {
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        formats: WEBP
                        placeholder: TRACED_SVG
                        outputPixelDensities: [0.5, 1, 2]
                    )
                }
            }
            alt
        }
        likeCount
        designation
        rating
        projectTitle
        projectMeta
        timeRange
        stringList
    }
`;
