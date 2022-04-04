import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './Text';

const Wrapper = styled.div`
  width: 25%;
  margin-right: 13px;
  margin-bottom: 13px;
  display: inline-block;
`;

const Input = styled.input`
  width: 97%;
  height: 7px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
  &::-webkit-slider-runnable-track {
    background: #ccc;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 40px;
    background: dodgerblue;
    box-shadow: -100vw 0 0 100vw dodgerblue;
    border: 1px solid #1890ff;
  }
`;

const TextWithRange = () => {
  const [range, setRange] = useState('100');

  return (
    <Wrapper>
      <Text>Name - {range}</Text>
      <Input
        type="range"
        max="100"
        step="10"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      />
    </Wrapper>
  );
};

export default TextWithRange;
