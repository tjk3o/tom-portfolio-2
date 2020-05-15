import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FEFBF5;
    font-family: sans-serif;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '40px',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <main>{children}</main>
      </div>
      <Footer>©{new Date().getFullYear()}, Built by me</Footer>
      <GlobalStyle />
    </>
  );
};

export default Layout;
