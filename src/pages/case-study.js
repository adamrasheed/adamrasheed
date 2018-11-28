import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/layout';

class CaseStudy extends React.Component {
    render() {
        // const {data} = this.props;
        return (
            <Layout>
                <h1 className="page-title">Case dff</h1>
            </Layout>
        )
    }
}

export default CaseStudy

// export const query = graphql`
//     query CaseStudyQuery($slug: String!) {
//         wordpressWpCaseStudies(slug: {eq: $slug}) {
//             id
//             title
//             slug
//             content
//     }
// `