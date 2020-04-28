import React from 'react';
import { Container } from '../../common';
import { Wrapper, Flex, Links, Details } from './styles';
import config from  '../../../utils/siteConfig'

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <span>
          <a href={config.copyright} rel="noopener noreferrer" target="_blank">
          © {config.author} 
          {' '}
          {new Date().getFullYear()} | Made with{' '}
          <span aria-label="love" role="img">
            💖
          </span>{' '}
          </a>
        </span>
      </Details>
      <Links>
        {config.socialLinks.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
