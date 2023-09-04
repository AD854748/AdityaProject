import React from 'react';
import Config from 'react-native-config';
import {icons} from '../assets/svgs';
export function Logos(props) {
  const {styles, icon, fill, accessibilityLabel} = props;

  const SVGIcon = icons[icon].default ? icons[icon].default : icons[icon];

  return (
    <SVGIcon
      style={styles}
      fill={fill}
      {...props}
      accessibilityLabel={accessibilityLabel}
    />
  );
}
export default Logos;
