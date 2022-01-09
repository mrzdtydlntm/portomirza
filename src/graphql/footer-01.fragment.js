import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer01 on General {
        logo {
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        formats: WEBP
                        placeholder: TRACED_SVG
                    )
                }
            }
            alt
        }
        copyright_text
    }
`;
