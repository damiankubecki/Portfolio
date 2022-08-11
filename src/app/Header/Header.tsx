import React from 'react';
import { headerContent, contactList, skillsList } from 'config';
import {
  Wrapper,
  TopSection,
  BottomSection,
  MyPhoto,
  Title,
  Description,
  Links,
  Skills,
  ArrowDown,
} from './HeaderElements';
import useMediaQueries from 'hooks/useMediaQueries';

const Header = () => {
  const { isTabletS } = useMediaQueries();

  const scrollToNextSection = () => {
    const windowHeight = window.innerHeight;

    window.scrollTo({
      top: windowHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      <TopSection>
        <Title title={headerContent.title} subtitle={headerContent.subtitle} />
        <Description>{headerContent.description}</Description>
        <Links linksList={contactList} />
      </TopSection>
      <BottomSection>
        <MyPhoto />
        <Skills skillsList={skillsList} />
        {!isTabletS && <ArrowDown handleClick={scrollToNextSection} />}
      </BottomSection>
    </Wrapper>
  );
};

export default Header;
