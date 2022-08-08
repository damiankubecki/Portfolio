import React from 'react';
import { contactList, skillsList } from 'config';
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

const Header = () => {
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
        <Title title="Damian Kubecki" subtitle="Frontend developer" />
        <Description>
          Jestem developerem sumiennie zaangażowanym w każdy etap prac przy wykonywanym projekcie.
          Posiadam zmysł estetyczny, umiejętność komunikacji i pracy w zespole, a także zdolność do
          analitycznego myślenia. Z chęcią przyjmuję konstruktywną krytykę i sugestie dotyczące
          tworzonego przeze mnie kodu. Motywuje mnie chęć poszerzania umiejętności, dzięki czemu
          stale rozwijam swoje kompetenecje.
        </Description>
        <Links linksList={contactList} />
      </TopSection>
      <BottomSection>
        <MyPhoto />
        <Skills skillsList={skillsList} />
        <ArrowDown handleClick={scrollToNextSection} />
      </BottomSection>
    </Wrapper>
  );
};

export default Header;
