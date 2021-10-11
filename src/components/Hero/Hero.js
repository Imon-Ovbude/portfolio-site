import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row noPadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, Welcome To <br />
        Imon Ovbude's Portfolio
      </SectionTitle>
      <SectionText>Front-End Web Developer</SectionText>
      <Button
        target='_blank'
        onClick={() => (window.location = 'https://google.com')}
      >
        Contact Me
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
