import React from 'react';
import { IIconItem } from 'types/types';
import { Wrapper, Item } from './HeaderSkillsElements';

interface HeaderSkillsProps {
  skillsList: IIconItem[];
}

const HeaderSkills = ({ skillsList }: HeaderSkillsProps) => (
  <Wrapper>
    {skillsList.map(item => (
      <Item key={item.name} src={item.src} name={item.name} />
    ))}
  </Wrapper>
);

export default HeaderSkills;
