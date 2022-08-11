import React, { useState } from 'react';
import useMediaQueries from 'hooks/useMediaQueries';
import { debounce } from 'lodash';
import { IIconItem } from 'types/types';
import { Wrapper, Img, Text } from './HeaderSkillsItemElements';

const HeaderSkillsItem = ({ name, src }: IIconItem) => {
  const { isTabletS } = useMediaQueries();
  const [isTextDisplayed, setTextActivity] = useState(false);

  const handleClick = () => setTextActivity(true);
  const debounceMouseLeave = debounce(() => setTextActivity(false), 500);

  return (
    <Wrapper onClick={isTabletS ? undefined : handleClick} onMouseLeave={debounceMouseLeave}>
      {isTextDisplayed ? <Text>{name}</Text> : <Img src={src} alt={name} />}
    </Wrapper>
  );
};

export default HeaderSkillsItem;
