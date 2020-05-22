import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';
import colors from '../../config/colors';
import { mq } from '../../config/mediaqueries';

const FooterContainer = styled.footer`
  margin: 60px 0 20px;
  width: 115px;
  display: flex;
  justify-content: space-between;

  ${mq.tabletPortrait_up`
    margin-top: 110px;
  `};
`;

const Footer = () => (
  <FooterContainer>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/tjk3o"
    >
      <FaGithub color={colors.white} size="35px" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="mailto:enquiries@tomkeogh.co.uk"
    >
      <FaEnvelope color={colors.white} size="35px" />
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/tom_keogh1/"
    >
      <FaInstagram color={colors.white} size="35px" />
    </a>
  </FooterContainer>
);

export default Footer;
