import React from 'react';
import { Title } from './MainTitleElements';

interface Props {
  children: string;
}

const MainTitle = ({ children }: Props) => <Title>{children}</Title>;

export default MainTitle;
