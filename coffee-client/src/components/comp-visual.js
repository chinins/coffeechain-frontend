import React from 'react';
import { DefaultButton, SmallButton, LightButton } from './buttons';

export default function CompVisual (props) {
  return (
    <div>
      <DefaultButton>default btn</DefaultButton>
      <SmallButton>small</SmallButton>
      <LightButton>light btn</LightButton>
    </div>
  );
}
