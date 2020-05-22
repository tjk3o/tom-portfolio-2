import React from 'react';
import styled from 'styled-components';
import { mq, DesktopOnly } from '../../config/mediaqueries';
import colors from '../../config/colors';
import Footer from '../Footer/Footer';
import Image from '../Image/Image';

const ContactLeftContainer = styled.div`
  width: 100%;
  margin: 45px 30px 80px;
  height: 65%;

  ${mq.tabletLandscape_up`
    height: 100%;
    width: calc(50% - 100px);
    padding: 15px 50px 0;
  `};
`;

const ContactHeading = styled.a`
  color: ${colors.white};
  font-weight: 400;
  font-size: 33px;
  overflow-wrap: anywhere;
  margin: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${mq.tabletPortrait_up`
  font-size: 58px;
  `};
`;

const Rule = styled.hr`
  width: 50%;
  margin: 30px 0;
  border: none;
  height: 4px;
  background-color: ${colors.offWhite};
`;

const Paragraph = styled.p`
  color: ${colors.white};
  font-size: 16px;
  line-height: 30px;
  width: 60%;

  ${mq.tabletPortrait_up`
    font-size: 35px;
    line-height: 40px;
    width: 100%;
  `};
`;

const ContactRightContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${mq.tabletLandscape_up`
    width: 440px;
    max-height: 650px;
  `};
`;

const Contact = () => (
  <>
    <ContactLeftContainer>
      <ContactHeading href="mailto:enquiries@tomkeogh.co.uk">
        enquiries@
        <br />
        tomkeogh.co.uk
      </ContactHeading>
      <Rule />
      <Paragraph>
        Please feel free to get in touch with the link above.
      </Paragraph>
      <Footer />
    </ContactLeftContainer>
    <ContactRightContainer>
      <DesktopOnly>
        <Image />
      </DesktopOnly>
    </ContactRightContainer>
  </>
);

export default Contact;
