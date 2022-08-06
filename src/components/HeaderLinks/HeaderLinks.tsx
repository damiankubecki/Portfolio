import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { githubLink, facebookLink, linkedinLink } from 'config';
import { IContactLink } from 'types/types';
import { Wrapper, Item } from './HeaderLinksElements';

const HeaderLinks = () => {
  const { Icon } = useFontAwesome();

  const itemsCollection: IContactLink[] = [
    {
      link: githubLink,
      icon: ['fab', 'github'],
    },
    {
      link: facebookLink,
      icon: ['fab', 'facebook'],
    },
    {
      link: linkedinLink,
      icon: ['fab', 'linkedin-in'],
    },
  ];

  return (
    <Wrapper>
      {itemsCollection.map(item => (
        <Item href={item.link} key={item.link} target="_blank">
          <Icon color="#ababab" size="3x" icon={item.icon} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default HeaderLinks;
