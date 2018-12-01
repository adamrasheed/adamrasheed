import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
class PostSidebar extends React.Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query OtherPosts {
            allWordpressPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <aside className="sidebar">
            <h4 className="preview-title preview-title--extra-small sidebar__title">
              Other Posts
            </h4>
            <ul className="sidebar__posts">
              {data.allWordpressPost.edges.map(({ node }, i) => (
                <li className="sidebar__post">
                  <Link
                    key={i}
                    to={`blog/${node.slug}`}
                    className="sidebar__post-link"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />
                </li>
              ))}
            </ul>
          </aside>
        )}
      />
    )
  }
}

export default PostSidebar
