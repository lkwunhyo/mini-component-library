/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--border-radius': '4px',
    '--padding': '0',
    '--content-border-radius': '0',
  },
  medium: {
    '--height': '12px',
    '--border-radius': '4px',
    '--padding': '0',
    '--content-border-radius': '0',
  },
  large: {
    '--height': '24px',
    '--border-radius': '8px',
    '--padding': '4px',
    '--content-border-radius': '4px',
  },
};

const Wrapper = styled.div`
  height: var(--height);
  width: 370px;
  border-radius: var(--border-radius);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;

  padding: var(--padding);
`;

const ProgressWrapper = styled.div`
  height: 100%;
  border-radius: var(--content-border-radius);
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.value + '%'};
  background: ${COLORS.primary};
`;

const ProgressBar = ({ value, size }) => {
  const sizes = SIZES[size];

  if (!size) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  return (
    <Wrapper role='progressbar' aria-valuenow={value} aria-valuemin='0' aria-valuemax='100' style={sizes} size={size}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <ProgressWrapper>
        <Progress value={value}></Progress>
      </ProgressWrapper>
    </Wrapper>
  );
};

export default ProgressBar;
