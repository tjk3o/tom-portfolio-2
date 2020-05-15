import React from 'react';
import styled from 'styled-components';
import { mq } from '../../config/mediaqueries';
import Image from '../Image/Image';

const ContactLeftContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 110px 10px 0;

  ${mq.tabletLandscape_up`
  width: calc(50% - 100px);
  padding: 75px 50px;
  `};
`;

const ContactHeading = styled.h1`
  color: #fefbf5;
  font-weight: 400;
  font-size: 35px;
  overflow-wrap: anywhere;

  ${mq.tabletLandscape_up`
  font-size: 58px;
  `};
`;

const ContactRightContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  overflow: hidden;

  ${mq.tabletLandscape_up`
    width: 50%;
  `};
`;

const Contact = () => (
  <>
    <ContactLeftContainer>
      <ContactHeading>
        enquiries@
        <br />
        tomkeogh.co.uk
      </ContactHeading>
    </ContactLeftContainer>
    <ContactRightContainer>
      <Image />
    </ContactRightContainer>
  </>
);

export default Contact;
