import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';
import colors from '../../config/colors';

const AboutHeading = styled.p`
  width: 60%;
  text-align: left;
  color: ${colors.white};
  line-height: 20px;
  margin: 45px 30px 80px;
  font-size: 16px;
  line-height: 30px;

  ${mq.tabletPortrait_up`
  margin: 140px auto 180px;
  font-size: 35px;
  line-height: 40px;
  `}
`;

const About = () => (
  <AboutHeading>
    My name’s Tom. I’m a JavaScript developer based in South London. If you’re
    interested in seeing some of my work then please follow the links below.
  </AboutHeading>
);

export default About;
