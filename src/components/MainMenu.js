import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';

const MainMenu = () => (
    <StaticQuery query={graphql`
        {
            allWordpressWpApiMenusMenusItems{
                edges{
                    node{
                        items{
                            title
                object_slug
                }
            }
            }
        }
        }
    ` } render={props => (
        <div>
            {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                // If you see the 'to' prop without the prefixed forward slash, add it in before the
                // object slug.
                <Link to={`/${item.object_slug}`} key={item.title}>
                    {item.title} 
                </Link>
            ))}
        </div>
    )} />
);

export default MainMenu;