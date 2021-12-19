# course notes

Some quick scratch notes to jog my memory should I return to this...

## manually creating pages in Gatsby

can essentially copy the default template from page-2.js, and rename the component...

** NOTE: ** React components are camel cased.

```
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* rename const to new Component name */
const SecondPage = () => ( 
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

/* rename secondPage to new Component name */
export default SecondPage 
```

If we rename the above to TestPage and the filename is testpage.js under the pages directory we could visit http://localhost:8000/testpage.

### definitions

**allWordpressPages** : created by the gatsby-source-wordpress plugin. It's another property that we can query that should return an array of all WordPress pages.

**edges** : Think of it as a reference to an array of pages that we're querying


**nodes** : for each edge we should return a node, in this instance, a particular page. Then within that we could return **title** and **content** and other properties we might see within ![WordPress pages API](http://gatsbyjswptutorial.local/wp-json/wp/v2/pages)

**Example Query within http://localhost:8000/___graphql**

```
{
	allWordpressPage{
		edges{
			node{
				title
        content
      }
    }
  }
}
```

**Example result**

```
{
  "data": {
    "allWordpressPage": {
      "edges": [
        {
          "node": {
            "title": "Sample Page",
            "content": "\n<p>This is an example page. It&#8217;s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>Hi there! I&#8217;m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin&#8217; caught in the rain.)</p></blockquote>\n\n\n\n<p>&#8230;or something like this:</p>\n\n\n\n<blockquote class=\"wp-block-quote\"><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>\n\n\n\n<p>As a new WordPress user, you should go to <a href=\"http://gatsbyjswptutorial.local/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!</p>\n"
          }
        }
      ]
    }
  },
  "extensions": {}
}
```

**Example 2 with custom endpoint through WP REST API Menus**

```
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
```

**Example result**

```
{
  "data": {
    "allWordpressWpApiMenusMenusItems": {
      "edges": [
        {
          "node": {
            "items": [
              {
                "title": "Home",
                "object_slug": "home"
              },
              {
                "title": "Portfolio",
                "object_slug": "portfolio"
              }
            ]
          }
        }
      ]
    }
  },
  "extensions": {}
}
```