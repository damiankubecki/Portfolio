import React from 'react';
import { IIconItem } from 'types/types';
import { Wrapper, Item } from './HeaderSkillsElements';

interface Props {
  skillsList: IIconItem[];
}

const HeaderSkills = ({ skillsList }: Props) => (
  <Wrapper>
    {skillsList.map(item => (
      <Item key={item.name} src={item.src} name={item.name} />
    ))}
  </Wrapper>
);

export default HeaderSkills;
