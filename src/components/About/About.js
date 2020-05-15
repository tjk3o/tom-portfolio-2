import React from 'react';
import styled from 'styled-components';

const AboutHeading = styled.p`
  width: 100%;
  text-align: center;
  color: #fefbf5;
  line-height: 20px;
  margin: 130px 20px;
`;

const About = () => (
  <AboutHeading>
    Hello! I&apos;m Tom, a front-end developer living and working in London. I'm
    working at made.com as a Javascript Developer.
  </AboutHeading>
);

export default About;
