import React from 'react';
import classNames from 'classnames';

interface TextProps {
  className?: string;
  children: any;
  isSecondary?: boolean;
  isPrimary?: boolean;
  [x: string]: any;
}

const Text: React.FC<TextProps> = ({
  className,
  isSecondary,
  isPrimary,
  children,
  ...attrs
}) => {
  const classes = classNames('ui-text', className, {
    isSecondary,
    isPrimary,
  });

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

export default Text;
