import React, { useState } from 'react';
import styled from 'styled-components'
import Layout from 'src/components/layout';
import { ContainerSize, Color } from 'src/utils/Styles';

const FourOhFour = styled.div`
  max-width: ${ContainerSize['container-size']};
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`

const Button = styled.button`
  display: block;
  margin: 4rem auto;
  padding: 1rem 2rem;
  border: none;
  background: ${Color.Btn.primary.regular};
  cursor: pointer;

  &:hover,
  &:focus {
    outline: 0;
    background: ${Color.Btn.primary.hover}
  }
`

const NotFoundPage = () => {
  const [dark, setDark] = useState(false)

  const handleToggle = () => {
    setDark(!dark)
  }
  return (
    <Layout>
      <FourOhFour className="404-container">
        <h1>You&lsquo;ve reached the secret dark-mode toggle page.</h1>
        <h3>{dark ? `Dark Mode` : `Light Mode`}</h3>
        <p>Toggle dark mode below.</p>
        <Button onClick={handleToggle}>Toggle Dark Mode</Button>
      </FourOhFour>
    </Layout>
  )
}

export default NotFoundPage;
