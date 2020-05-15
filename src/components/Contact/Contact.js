import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';
import Image from '../Image/Image';

const ContactLeftContainer = styled.div`
  width: 100%;
  padding: 60px 10px 0;
  height: 65%;

  ${mq.tabletLandscape_up`
    height: 100%;
    width: calc(50% - 100px);
    padding: 75px 50px;
  `};
`;

const ContactHeading = styled.a`
  color: #fefbf5;
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
  background-color: #fefbf5;
`;

const Paragraph = styled.p`
  color: #fefbf5;

  ${mq.tabletPortrait_up`
    font-size: 38px;
  `};
`;

const ContactRightContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  overflow: hidden;

  ${mq.tabletLandscape_up`
    width: 50%;
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
    </ContactLeftContainer>
    <ContactRightContainer>
      <Image />
    </ContactRightContainer>
  </>
);

export default Contact;
