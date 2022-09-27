import { IHeaderContent, IContactLink, IIconItem, IProject } from 'types/types';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import html from 'images/icons/html5.png';
import css from 'images/icons/css3.png';
import sass from 'images/icons/sass.png';
import styledComponents from 'images/icons/styled-components.png';
import js from 'images/icons/js.png';
import ts from 'images/icons/ts.png';
import react from 'images/icons/react.png';
import redux from 'images/icons/redux.png';
import npm from 'images/icons/npm.png';
import git from 'images/icons/git.png';
import node from 'images/icons/nodejs.png';
import mongodb from 'images/icons/mongodb.png';
import slots from 'images/projects/slots.png';
import fizjolifting from 'images/projects/fizjolifting.png';
import portfolio from 'images/projects/portfolio.png';
import fruitExplorer from 'images/projects/fruitExplorer.png';
import saper from 'images/projects/saper.png';
import kursyWalut from 'images/projects/kursyWalut.png';
import otoauto from 'images/projects/otoauto.png';

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
  { name: 'styled-components', src: styledComponents },
  { name: 'javascript', src: js },
  { name: 'typescript', src: ts },
  { name: 'react', src: react },
  { name: 'redux', src: redux },
  { name: 'node', src: node },
  { name: 'mongodb', src: mongodb },
  { name: 'npm', src: npm },
  { name: 'git', src: git },
];

export const projectsList: IProject[] = [
  {
    name: 'otoauto',
    note: 'Fullstackowy serwis ogłoszeniowy kupna/sprzedaży samochodów. Aplikacja posiada przerzysty interfejs, z poziomu którego możemy utworzyć konto użytkownika/zalogować się, dodawać ogłoszenia oraz przeglądać istniejące. Frontend aplikacji stworzyłem przy użyciu typescript + react, natomiast na backendzie wykorzostałem: node.js, express, mongoDB, mongoose.',
    liveLink: 'https://otoauto-website.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/otoauto',
    technologies: ['styled-components', 'typescript', 'react', 'redux', 'node', 'mongodb'],
    image: otoauto,
  },
  {
    name: 'Slots',
    note: 'Moja pierwsza aplikacja napisana w typescript. Jest to gra (slots/jednoręki bandyta) zaprogramowana obiektowo. Użytkownik w prosty sposób może zmenić stawkę zakładu, a także stan swojego wirtualnego portfela. Wyświetlane są również ostatnie aktywności gracza oraz statystyki rozgrywki.',
    liveLink: 'https://slots-online.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/Slots',
    technologies: ['html', 'sass', 'typescript'],
    image: slots,
  },
  {
    name: 'FizjoLifting',
    note: 'Strona zaprojektowana oraz wykonana przeze mnie na potrzeby gabinetu rehabilitacyjnego. Schludny i przejrzysty interfejs stworzony został przy użyciu javascript + react oraz styled-components.',
    liveLink: 'https://fizjolifting.pl/',
    technologies: ['styled-components', 'javascript', 'react'],
    image: fizjolifting,
  },
  {
    name: 'FruitExplorer',
    note: 'FruitExplorer jest aplikacją zawierającą informacje o wartościach odżywczych owoców. Aplikacja oferuje możliwość dodawania owoców do bazy, tworzenie mixów owocowych z wyszczególnioną ilością każdego z nich oraz tworzenie listy ulubionych owoców. Dodatkowo użytkownik ma możliwość zmiany motywu apliakcji, a jego działania zapisywane są w pamięci przeglądarki (local storage). Dane przechowywane są za pomocą reduxa, a sama aplikacja napisana została w javascript + react.',
    liveLink: 'https://fruit-explorer.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/FruitExplorer',
    technologies: ['styled-components', 'javascript', 'react', 'redux'],
    image: fruitExplorer,
  },
  {
    name: 'Portfolio',
    note: 'Strona, na której się znajdujesz jest moim pierwszym opublikowanym projektem napisanym w typescript + react. Duży nacisk połozyłem na skalowalność projektu, dzięki czemu wprowadzanie zmian odbywa się w zasadzie w jednym pliku konfiguracyjnym.',
    codeLink: 'https://github.com/damiankubecki/Portfolio',
    technologies: ['styled-components', 'typescript', 'react'],
    image: portfolio,
  },
  {
    name: 'Saper',
    note: 'Jest to rozbudowana gra Saper, która oferuje takie opcje jak: dostosowanie liczby komórek oraz bomb, zmianę rozmiaru komórek, ustawienie trudności przy rozpoczynaniu rozgrywki oraz wybór jednego z czterech motywów planszy. Gra stworzona została przy użyciu obiektowego javascript.',
    liveLink: 'https://saper-online.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/Saper',
    technologies: ['html', 'sass', 'javascript'],
    image: saper,
  },
  {
    name: 'Kursy walut online',
    note: 'Mój pierwszy projekt napisany w react. Aplikacja udostępniająca notowania walut z całego świata, dzięki danym pobranym z API NBP przy użyciu axios, dodatkowo rozszerzając bazę danych o statyczne informacje na temat walut. Aplikacja umożliwia sporządzenie trendu wybranej waluty, kalkulację wymiany walut oraz dostęp do ciekawostek o walutach.',
    liveLink: 'https://kursywalutonline.netlify.app/',
    codeLink: 'https://github.com/damiankubecki/KursyWalut',
    technologies: ['sass', 'javascript', 'react'],
    image: kursyWalut,
  },
];
