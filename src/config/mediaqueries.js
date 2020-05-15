/* eslint-disable react/jsx-indent */
import styled, { css } from 'styled-components';

export const bp = {
  container: {
    min: 320,
    max: 1440, // iPhone 5
  },
  // design team call this the 375px design
  mobile: {
    min: 0,
    max: 599,
    innerPadding: 15,
  },
  // design team call this the 600px design
  tabletPortrait: {
    min: 600,
    max: 959,
    innerPadding: 15,
  },
  // design team call this the 1024px design
  tabletLandscape: {
    min: 960,
    max: 1199,
    innerPadding: 20,
  },
  // design team call this the 1440px design
  desktop: {
    min: 1200,
    max: 1439,
    innerPadding: 20,
  },
  desktopLarge: {
    min: 1440,
    max: null,
    innerPadding: 60,
  },
};

export const mq = {
  mobile_only: (...args) => css`
    @media (max-width: ${bp.mobile.max}px) {
      ${css(...args)};
    }
  `,
  tabletPortrait_up: (...args) => css`
    @media (min-width: ${bp.tabletPortrait.min}px) {
      ${css(...args)};
    }
  `,
  tabletPortrait_only: (...args) => css`
    @media (min-width: ${bp.tabletPortrait.min}px) and (max-width: ${bp
        .tabletPortrait.max}px) {
      ${css(...args)};
    }
  `,
  tabletLandscape_up: (...args) => css`
    @media (min-width: ${bp.tabletLandscape.min}px) {
      ${css(...args)};
    }
  `,
  tabletLandscape_only: (...args) => css`
    @media (min-width: ${bp.tabletLandscape.min}px) and (max-width: ${bp
        .tabletLandscape.max}px) {
      ${css(...args)};
    }
  `,
  desktop_up: (...args) => css`
    @media (min-width: ${bp.desktop.min}px) {
      ${css(...args)};
    }
  `,
  desktop_only: (...args) => css`
    @media (min-width: ${bp.desktop.min}px) and (max-width: ${bp.desktop
        .max}px) {
      ${css(...args)};
    }
  `,
  desktopLarge_up: (...args) => css`
    @media (min-width: ${bp.desktopLarge.min}px) {
      ${css(...args)};
    }
  `,
};

export const FullWidthContainer = styled.div`
  margin: 0 -5px;
  ${mq.desktop_up`
  margin: 0 -10px;
  `};
`;
