import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { useTheme } from 'styled-components';
import { githubIcon, liveIcon } from 'config';
import { ITheme } from 'types/types';
import { Button } from './MainProjectButtonElements';

interface Props {
  type: 'live' | 'code';
  link: string;
}

const MainProjectButton = ({ type, link }: Props) => {
  const { Icon } = useFontAwesome();
  const theme = useTheme() as ITheme;

  return (
    <>
      {type === 'live' ? (
        <Button type={type} href={link} target="_blank">
          <Icon color={theme.fontColor} size="1x" icon={liveIcon} /> {'  '}
          Live
        </Button>
      ) : (
        <Button type={type} href={link} target="_blank">
          <Icon color={theme.fontColor} size="1x" icon={githubIcon} />
          {'  '} Code
        </Button>
      )}
    </>
  );
};

export default MainProjectButton;
