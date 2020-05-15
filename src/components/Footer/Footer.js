import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import { mq } from '../../config/mediaqueries';

const FooterContainer = styled.footer`
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;

  ${mq.tabletPortrait_up`
    margin-top: 110px;
  `};
`;

const Footer = () => (
  <FooterContainer>
    <FaGithub color="brown" size="30px" />
  </FooterContainer>
);

export default Footer;
