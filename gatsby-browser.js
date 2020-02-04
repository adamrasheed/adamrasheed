import React from 'react';
import SiteProvider from './src/context/SiteProvider'

export const wrapRootElement = ({ element }) => (
  <SiteProvider>{element}</SiteProvider>
)