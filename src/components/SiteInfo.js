import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

// flex-grow: 1 - container stretches all across before the next elements are rendered
const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: white;
    margin: auto 0;
`

const SiteTitle = styled.div`
    font-weight: bold;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
        {
            allWordpressSiteMetadata{
                edges{
                    node{
                        name
                description
                }
            }
            }
        }
      
    `} render={ props => (
        <SiteInfoWrapper>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            <div>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </div>
        </SiteInfoWrapper>
    )} />
);

export default SiteInfo