import React from 'react';
import Header from './Header';

import '../assets/styles/components/layout.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
