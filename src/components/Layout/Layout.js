import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { mq } from '../../config/mediaqueries';
import colors from '../../config/colors';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${colors.offWhite};
    font-family: sans-serif;
  }
`;

const MainWrapper = styled.div`
  margin: 80px 15px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${mq.tabletPortrait_up`
    margin: 100px 40px 0;
  `};
`;

const Layout = ({ children }) => (
  <>
    <MainWrapper>
      <main>{children}</main>
    </MainWrapper>
    <GlobalStyle />
  </>
);

export default Layout;
