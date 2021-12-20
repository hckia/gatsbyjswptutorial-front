import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

// styled.element example styled.span, styled.section, etc.
const MainMenuWrapper = styled.div`
    display: flex;
    background-color: rgb(3,27,77);
`

// styled-components allows you to pass in Components to style as well. 
// 8px top/bottom 16px left/right
const MenuItem = styled(Link)`
    color: white;
    display: block;
    padding 8px 16px;
`

const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems(filter: {
                name: {
                    eq:"Main Menu"
            }
            }) {
            edges {
                node {
                name
                items {
                    title
                    object_slug
                }
                }
            }
            }
        }
    ` } render={props => (
        // edges[0] ensures we only call the first menu
        <MainMenuWrapper>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                // If you see the 'to' prop without the prefixed forward slash, add it in before the
                // object slug.
                <MenuItem to={`/${item.object_slug}`} key={item.title}>
                    {item.title} 
                </MenuItem>
            ))}
        </MainMenuWrapper>
    )} />
);

export default MainMenu;