import React from 'react';
import classNames from 'classnames';

interface TitleProps {
  className?: string;
  children: any;
  size?: '1' | '2' | '3' | '4' | '5';
  [x: string]: any;
}

const Title: React.FC<TitleProps> = ({
  className,
  size = 1,
  children,
  ...attrs
}) => {
  const classes = classNames(`ui-title-${size}`, className);

  return (
    <p
      contentEditable
      suppressContentEditableWarning
      className={classes}
      spellCheck={false}
      {...attrs}
    >
      {children}
    </p>
  );
};

export default Title;
