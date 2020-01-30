import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Hero from '../Hero/Hero';

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    query HomeHeroQuery {
      wordpressAcfOptions {
        options {
          title
          tagline
          specialization
          career
          resume
          hide_career
        }
      }
    }
  `)

  const {
    wordpressAcfOptions: {
      options,
    },
  } = data
  return (
    <Hero
      tagline={options.tagline}
      specialize={options.specialization}
      career={options.career}
      resume={options.resume}
      hideCareer={options.hide_career}
    />

  );
}

export default HomeHero;
