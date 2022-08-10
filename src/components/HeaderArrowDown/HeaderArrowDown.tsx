import React from 'react';
import useFontAwesome from 'hooks/useFontAwesome';
import { useTheme } from 'styled-components';
import { arrowDownIcon } from 'config';
import { ITheme } from 'types/types';
import { Wrapper } from './HeaderArrowDownElements';

interface Props {
  handleClick: () => void;
}

const HeaderArrowDown = ({ handleClick }: Props) => {
  const { Icon } = useFontAwesome();
  const theme = useTheme() as ITheme;

  return (
    <Wrapper onClick={handleClick}>
      <Icon color={theme.additional} size="3x" icon={arrowDownIcon} />
    </Wrapper>
  );
};

export default HeaderArrowDown;
