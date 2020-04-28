import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from '../../common';
import Dev from '../../../svg/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import config from  '../../../utils/siteConfig'

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <Dev />
      </Thumbnail>
      <Details>
        <h1>Hi There!</h1>
        <p>
          {config.defaultDescription}
        </p>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
