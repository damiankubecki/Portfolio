import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { IContactLink } from 'types/types';
import { Wrapper, Item } from './HeaderLinksElements';

interface HeaderLinksProps {
  linksList: IContactLink[];
}

const HeaderLinks = ({ linksList }: HeaderLinksProps) => {
  const { Icon } = useFontAwesome();

  return (
    <Wrapper>
      {linksList.map(item => (
        <Item href={item.link} key={item.link} target="_blank">
          <Icon color="#ababab" size="3x" icon={item.icon} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default HeaderLinks;
