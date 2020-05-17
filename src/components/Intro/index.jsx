import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Button } from '../common'
import Dev from '../../assets/images/svg/illustrations/dev.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'
import config from  '../../utils/siteConfig'

const Intro = () => (
  <Wrapper>
    <IntroWrapper>
      <Details>
        <h1>Hi There!</h1>
        <h4>{config.defaultDescription}</h4>
        <Button as={AnchorLink} href="#contact">
          Hire me
        </Button>
      </Details>
      <Thumbnail>
        <Dev />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);

export default Intro