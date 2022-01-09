import { graphql } from "gatsby";

export const query = graphql`
    fragment Header01 on General {
        slogan
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
        button {
            ...Button
        }
    }
`;
