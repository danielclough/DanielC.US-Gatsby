import React from 'react';
import YoutubeIcon from '../assets/images/svg/icons/youtube.svg';
import TwitterIcon from '../assets/images/svg/icons/twitter.svg';
import GithubIcon from '../assets/images/svg/icons/github.svg';
import LinkedinIcon from '../assets/images/svg/icons/linkedin.svg';
import FacebookIcon from '../assets/images/svg/icons/facebook.svg';
import InstagramIcon from '../assets/images/svg/icons/instagram.svg';
import BehanceIcon from '../assets/images/svg/icons/behance.svg';
import DribbbleIcon from '../assets/images/svg/icons/dribbble.svg';
import AngelIcon from '../assets/images/svg/icons/angellist.svg';

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinIcon className="footer-social-icon" />;
    case 'twitter':
      return <TwitterIcon className="footer-social-icon" />;
    case 'facebook':
      return <FacebookIcon className="footer-social-icon" />;
    case 'youtube':
      return <YoutubeIcon className="footer-social-icon" />;
    case 'instagram':
      return <InstagramIcon className="footer-social-icon" />;
    case 'github':
      return <GithubIcon className="footer-social-icon" />;
    case 'behance':
      return <BehanceIcon className="footer-social-icon" />;
    case 'dribbble':
      return <DribbbleIcon className="footer-social-icon" />;
    case 'angellist':
      return <AngelIcon className="footer-social-icon" />;
    default:
      return null;
  }
};

export default SocialIcon;
