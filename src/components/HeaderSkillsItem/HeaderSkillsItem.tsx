import React, { useState } from 'react';
import { debounce } from 'lodash';
import { IIconItem } from 'types/types';
import { Wrapper, Img, Text } from './HeaderSkillsItemElements';

const HeaderSkillsItem = ({ name, src }: IIconItem) => {
  const [isTextDisplayed, setTextActivity] = useState(false);

  const handleClick = () => setTextActivity(true);
  const debounceMouseLeave = debounce(() => setTextActivity(false), 500);

  return (
    <Wrapper onClick={handleClick} onMouseLeave={debounceMouseLeave}>
      {isTextDisplayed ? <Text>{name}</Text> : <Img src={src} alt={name} />}
    </Wrapper>
  );
};

export default HeaderSkillsItem;
