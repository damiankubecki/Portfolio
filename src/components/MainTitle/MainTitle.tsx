import React from 'react';
import { Title } from './MainTitleElements';

interface MainTitleProps {
  children: string;
}

const MainTitle = ({ children }: MainTitleProps) => <Title>{children}</Title>;

export default MainTitle;
