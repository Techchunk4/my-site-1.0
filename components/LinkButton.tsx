// LinkButton.tsx
import React from 'react';

interface LinkButtonProps {
  url: string;
  text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button>{text}</button>
    </a>
  );
};

export default LinkButton;
