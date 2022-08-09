import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { faAnglesDown, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

interface IIconProps {
  color: string;
  size: SizeProp;
  icon: IconProp;
}

const useFontAwesome = () => {
  library.add(faFacebook, faGithub, faLinkedinIn, faAnglesDown, faGlobe);

  const Icon = ({ color, size, icon }: IIconProps): JSX.Element => (
    <FontAwesomeIcon color={color} size={size} icon={icon} />
  );

  return { Icon };
};
export default useFontAwesome;
