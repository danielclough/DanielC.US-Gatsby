import React from 'react';
import { Container } from '../common';
import ContactSVG from '../../assets/images/svg/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';
import config from  '../../utils/siteConfig'

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
  </Wrapper>
);

export default Contact