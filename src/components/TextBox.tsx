import React, { CSSProperties } from 'react';

interface TextBoxProps {
  count1: number;
  style?: CSSProperties;
}

const romanize = (num: number) => {
  if (isNaN(num)) return '';
  const digits = String(+num).split('');
  const key = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
               '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
               '','I','II','III','IV','V','VI','VII','VIII','IX'];
  let roman = '';
  let i = 3;
  while (i--) roman = (key[+(digits.pop() || 0) + (i * 10)] || '') + roman;
  return Array(+digits.join('') + 1).join('M') + roman;
};

const TextBox: React.FC<TextBoxProps> = ({ count1, style }) => {
  return (
    <input
      type="text"
      value={romanize(count1)}
      readOnly
      style={{ ...style, color: 'white', backgroundColor: "gray" }}
    />
  );
};

export default TextBox;
