import React, { useContext } from 'react';
import styled from 'styled-components'
import Layout from 'src/components/layout';
import { SiteContext } from 'src/context/SiteProvider'

const FourOhFour = styled.div`
  max-width: ${({ theme }) => theme.containerSize['container-size']};
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`

const Display = styled.h3`
  margin: 1rem 0;
`

const Button = styled.button`
  display: block;
  margin: 4rem auto;
  padding: 1rem 2rem;
  border: none;
  background: ${({ theme }) => theme.color.btn.primary.regular};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    background: ${({ theme }) => theme.color.btn.primary.hover}
  }
`

const NotFoundPage = () => {
  const { dark, toggleDark } = useContext(SiteContext)

  return (
    <Layout>
      <FourOhFour className="404-container">
        <h1>You&lsquo;ve reached the secret dark-mode toggle page.</h1>
        <Display>{dark ? `Dark Mode` : `Light Mode`}</Display>
        <p>Toggle dark mode below.</p>
        <Button onClick={toggleDark}>Toggle Dark Mode</Button>
      </FourOhFour>
    </Layout>
  )
}

export default NotFoundPage;
