import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Section from '../components/Section/Section';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';
import colors from '../config/colors';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      heading="About me."
      headingColor={colors.black}
      backgroundColor={colors.sectionBlue}
    >
      <About />
    </Section>
    <Section
      style={{ position: 'relative', zIndex: '1' }}
      heading="Say hi."
      headingColor={colors.white}
      backgroundColor={colors.sectionGreen}
    >
      <Contact />
    </Section>
  </Layout>
);

export default IndexPage;
