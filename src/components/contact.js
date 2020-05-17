import React from 'react';
import MailIcon from '../assets/images/svg/icons/mail.svg';
import MobileIcon from '../assets/images/svg/icons/mobile.svg';
import GlobeIcon from '../assets/images/svg/icons/globe.svg';
import LocationIcon from '../assets/images/svg/icons/location.svg';

const Contact = ({ field, value }) => (
  <span className="flex my-2 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <MailIcon className="contact-icon" />
        <a className="contact-link" href={`mailto:${value}`} title="email">
          {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <MobileIcon className="contact-icon" />
        <a className="contact-link" href={`tel:${value}`} title="phone">
          {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <GlobeIcon className="contact-icon" />
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          Personal Site
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <LocationIcon className="contact-icon" />
        <span className="contact-link">{value}</span>
      </>
    )}
  </span>
);

export default Contact;
