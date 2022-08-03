import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faMapLocationDot,
  faPhone,
  faEnvelope,
  faArrowUp,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

interface IIconProps {
  color: string;
  icon: IconProp;
}

const useFontAwesome = () => {
  const initFontAwesome = () => {
    library.add(
      faFacebook,
      faInstagram,
      faLocationDot,
      faMapLocationDot,
      faPhone,
      faEnvelope,
      faArrowUp,
      faBars
    );
  };

  const Icon = ({ color, icon }: IIconProps): JSX.Element => (
    <FontAwesomeIcon color={color} icon={icon} />
  );

  return { initFontAwesome, Icon };
};
export default useFontAwesome;
