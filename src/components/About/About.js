import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';

const AboutHeading = styled.p`
  width: 100%;
  text-align: left;
  color: #fefbf5;
  line-height: 20px;
  margin: 100px 20px;

  ${mq.tabletPortrait_up`
  margin: 180px 20px;
  font-size: 35px;
  line-height: 40px;
  `}
`;

const About = () => (
  <AboutHeading>
    Hello! I&apos;m Tom, a front-end developer living and working in London.
    I&apos;m working at made.com as a Javascript Developer.
  </AboutHeading>
);

export default About;
