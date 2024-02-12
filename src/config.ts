import { IHeaderContent, IContactLink, IIconItem, IProject } from 'types/types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import html from 'images/icons/html5.png';
import css from 'images/icons/css3.png';
import sass from 'images/icons/sass.png';
import js from 'images/icons/js.png';
import ts from 'images/icons/ts.png';
import react from 'images/icons/react.png';
import git from 'images/icons/git.png';
import node from 'images/icons/nodejs.png';
import mongodb from 'images/icons/mongodb.png';
import angular from 'images/icons/angular.png';
import rxjs from 'images/icons/rxjs.png';
import posgresql from 'images/icons/postgresql.png';
import sequelize from 'images/icons/sequelize.webp';
import cypress from 'images/icons/cypress.png';
import slots from 'images/projects/slots.png';
import portfolio from 'images/projects/portfolio.png';
import saper from 'images/projects/saper.png';
import kursyWalut from 'images/projects/kursyWalut.png';
import otoauto from 'images/projects/otoauto.png';
import alekino from 'images/projects/alekino.png';

export const headerContent: IHeaderContent = {
  title: 'Damian Kubecki',
  subtitle: 'Frontend developer',
  description:
    'Jestem developerem sumiennie zaangażowanym w każdy etap prac przy wykonywanym projekcie. Posiadam zmysł estetyczny, umiejętność komunikacji i pracy w zespole, a także zdolność do  analitycznego myślenia. Z chęcią przyjmuję konstruktywną krytykę i sugestie dotyczące  tworzonego przeze mnie kodu. Motywuje mnie chęć poszerzania umiejętności, dzięki czemu  stale rozwijam swoje kompetenecje.',
};

export const githubIcon: IconProp = ['fab', 'github'];
export const facebookIcon: IconProp = ['fab', 'facebook'];
export const linkedinIcon: IconProp = ['fab', 'linkedin-in'];
export const liveIcon: IconProp = ['fas', 'globe'];
export const arrowDownIcon: IconProp = ['fas', 'angles-down'];

export const contactList: IContactLink[] = [
  {
    name: 'github',
    link: 'https://github.com/damiankubecki',
    icon: githubIcon,
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/damian.kubecki111',
    icon: facebookIcon,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/damiankubecki/',
    icon: linkedinIcon,
  },
];

export const skillsList: IIconItem[] = [
  { name: 'html', src: html },
  { name: 'css', src: css },
  { name: 'sass', src: sass },
  { name: 'node', src: node },
  { name: 'javascript', src: js },
  { name: 'typescript', src: ts },
  { name: 'react', src: react },
  { name: 'angular', src: angular },
  { name: 'rxjs', src: rxjs },
  { name: 'mongodb', src: mongodb },
  { name: 'postgresql', src: posgresql },
  { name: 'sequelize', src: sequelize },
  { name: 'cypress', src: cypress },
  { name: 'git', src: git },
];

export const projectsList: IProject[] = [
  {
    name: 'alekino',
    note: 'Aolikacja do zarządzania kinem. Alekino daje administratorowi możliwość zarządania filmami, repertuarem, salami kinowymi oraz kodami zniżkowmi. Dla klienta udostępniony został interfejs pozwalający przejść przez cały proces od rezerwacji wybranego miejsca na seans do zakupu biletu. Projekt powstał przy użyciu Angulara w wersji 15 oraz RxJs. Baza danych została zasymulowana przez json-server oraz json-server-auth. W celu podglądu apliakcji należy ją skonfigurować lokalnie.',
    codeLink: 'https://github.com/damiankubecki/ale-kino',
    technologies: ['sass', 'typescript', 'rxjs', 'angular'],
    image: alekino,
  },
  {
    name: 'otoauto',
    note: 'Fullstackowy serwis ogłoszeniowy kupna/sprzedaży samochodów. Aplikacja posiada przerzysty interfejs, z poziomu którego możemy utworzyć konto użytkownika/zalogować się, dodawać ogłoszenia oraz przeglądać istniejące. Frontend aplikacji stworzyłem przy użyciu TypeScript + React, natomiast na backendzie wykorzostałem: Node.js, Express, MongoDB oraz Mongoose.',
    liveLink: 'https://otoauto-website.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/otoauto',
    technologies: ['styled-components', 'typescript', 'react', 'redux', 'node', 'mongodb'],
    image: otoauto,
  },
  {
    name: 'Slots',
    note: 'Aplikacja napisana w czystym TypeScript. Jest to gra (slots/jednoręki bandyta) zaprogramowana obiektowo. Użytkownik w prosty sposób może zmenić stawkę zakładu, a także stan swojego wirtualnego portfela. Wyświetlane są również ostatnie aktywności gracza oraz statystyki rozgrywki.',
    liveLink: 'https://slots-online.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/Slots',
    technologies: ['html', 'sass', 'typescript'],
    image: slots,
  },
  {
    name: 'Portfolio',
    note: 'Strona, na której się znajdujesz jest moim pierwszym opublikowanym projektem napisanym w TypeScript + React. Duży nacisk położyłem na skalowalność projektu.',
    codeLink: 'https://github.com/damiankubecki/Portfolio',
    technologies: ['styled-components', 'typescript', 'react'],
    image: portfolio,
  },
  {
    name: 'Saper',
    note: 'Jest to rozbudowana gra Saper, która oferuje takie opcje jak: dostosowanie liczby komórek oraz bomb, zmianę rozmiaru komórek, ustawienie trudności przy rozpoczynaniu rozgrywki oraz wybór jednego z czterech motywów planszy. Gra stworzona została przy użyciu obiektowego JavaScript.',
    liveLink: 'https://saper-online.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/Saper',
    technologies: ['html', 'sass', 'javascript'],
    image: saper,
  },
  {
    name: 'Kursy walut online',
    note: 'Aplikacja udostępniająca notowania walut z całego świata, dzięki danym pobranym z API NBP przy użyciu axios, dodatkowo rozszerzając bazę danych o statyczne informacje na temat walut. Aplikacja umożliwia sporządzenie trendu wybranej waluty, kalkulację wymiany walut oraz dostęp do ciekawostek o walutach.',
    liveLink: 'https://kursywalutonline.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/KursyWalut',
    technologies: ['sass', 'javascript', 'react'],
    image: kursyWalut,
  },
];
