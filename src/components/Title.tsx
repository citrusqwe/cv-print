import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as MinusIcon } from '../assets/minus.svg';

interface TitleProps {
  className?: string;
  children: any;
  size?: '1' | '2' | '3' | '4' | '5';
  [x: string]: any;
}

const PlusBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  svg {
    width: 14px;
    hegiht: 14px;
  }

  transition: background-color 0.3s;
  &:hover {
    transition: background-color 0.3s;
    background-color: rgb(233, 233, 233);
  }
`;

const P = styled.p`
  display: flex;
  align-items: center;
  button {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s;
  }

  &:hover {
    button {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s;
    }
  }
`;

const Title: React.FC<TitleProps> = ({
  className,
  size = 1,
  children,
  type,
  withPlus,
  withMinus,
  onAdd,
  onDelete,
  ...attrs
}) => {
  const classes = classNames(`ui-title-${size}`, className);

  return (
    <P
      contentEditable
      suppressContentEditableWarning
      className={classes}
      spellCheck={false}
      {...attrs}
    >
      {children}

      {withPlus && (
        <PlusBtn onClick={() => onAdd(type)}>
          <PlusIcon />
        </PlusBtn>
      )}
      {withMinus && (
        <PlusBtn onClick={() => onDelete(type)}>
          <MinusIcon />
        </PlusBtn>
      )}
    </P>
  );
};

export default Title;
