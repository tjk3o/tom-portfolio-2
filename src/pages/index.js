import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import Section from '../components/Section/Section';
import Contact from '../components/Contact/Contact';
import About from '../components/About/About';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section index={0} heading="About me." backgroundColor="brown">
      <About />
    </Section>
    <Section
      index={1}
      style={{ position: 'relative', zIndex: '1' }}
      heading="Contact."
      backgroundColor="lightblue"
    >
      <Contact />
    </Section>
  </Layout>
);

export default IndexPage;
