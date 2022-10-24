import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function RightArrow({style, color}) {
  return (
    <Svg 
      viewBox="0 0 49.656 49.656" 
      width={40} 
      height={40}
      style={[{marginLeft: -27}, style && style]}>
      <Path
        style={{
          fill: color
        }}
        d="m14.535 48.242-2.828-2.828 20.585-20.586L11.707 4.242l2.828-2.828 23.414 23.414z"/>
      <Path
        style={{
          fill: color
        }}
        d="m14.535 49.656-4.242-4.242 20.585-20.586L10.293 4.242 14.535 0l24.829 24.828-24.829 24.828zm-1.414-4.242 1.414 1.414 22-22-22-22-1.414 1.414 20.585 20.586-20.585 20.586z"/>
    </Svg>
  );
}

export default RightArrow;
