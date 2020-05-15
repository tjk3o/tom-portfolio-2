/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header/Header';

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
        {/* <footer style={{ width: '100%' }}>
          ©{new Date().getFullYear()}, Built by me
        </footer> */}
      </div>
      <GlobalStyle />
    </>
  );
};

export default Layout;
