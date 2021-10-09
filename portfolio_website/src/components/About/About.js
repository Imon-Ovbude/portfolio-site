import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { Img, GridContainer } from './AboutStyles';

const About = () => (
  <Section id='about' column noPadding>
    <GridContainer>
      <SectionTitle main center>
        <Img src='images/portrait.jpg' />
      </SectionTitle>
      <SectionText>
        Hi, my name is Imon Ovbude. I am a Full Stack Web Developer focused on
        learning and growing. The Lambda School experience as well as the
        experience gained from working as an automotive technician (10+ years)
        helped to develop verbal and written communication, and team work skills
        needed to succeed in a team environment.
      </SectionText>
    </GridContainer>
  </Section>
);

export default About;
