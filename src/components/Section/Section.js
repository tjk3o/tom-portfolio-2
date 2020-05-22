import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';
import colors from '../../config/colors';

const SectionContainer = styled.section`
  margin-bottom: -50px;
  
  ${mq.tabletPortrait_up`
  margin-bottom: -100px;
  width: 500px;
  `}
  ${mq.tabletLandscape_up`
    width: 900px;
  `}
  ${mq.desktop_up`
    width: 1000px;
  `}
  ${mq.desktopLarge_up`
    width: 1200px;
  `};
`;

const Heading = styled.h1`
  font-family: sans-serif;
  font-size: 60px;
  line-height: 30px;
  margin: 0 0 0 8px;
  font-weight: 800;
  position: relative;
  z-index: 2;
  ${// eslint-disable-next-line no-confusing-arrow
  (props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.headingColor
      ? `color: ${props.headingColor}`
      : `color: ${colors.black}`};

  ${mq.tabletPortrait_up`
    font-size: 100px;
    -webkit-text-stroke-width: 3px;
    `}

  ${mq.tabletLandscape_up`
    -webkit-text-stroke-width: 4px;
    font-size: 160px;
    line-height: 80px;
  `}
`;

const SectionSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 15px 15px 0 0;
  overflow: hidden;

  ${// eslint-disable-next-line no-confusing-arrow
  (props) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    props.backgroundColor
      ? `background-color: ${props.backgroundColor}`
      : `background-color: ${colors.white}`};

  ${mq.tabletPortrait_up`
    justify-content: space-between;
  `}
`;

const Section = (props) => {
  const { heading, headingColor, backgroundColor, children } = props;
  return (
    <SectionContainer>
      <Heading headingColor={headingColor}>{heading}</Heading>
      <SectionSubContainer backgroundColor={backgroundColor}>
        {children}
      </SectionSubContainer>
    </SectionContainer>
  );
};

export default Section;
