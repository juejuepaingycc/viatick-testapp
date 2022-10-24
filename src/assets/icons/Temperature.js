
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Temperature() {
  return (
    <Svg  
      viewBox="0 0 512 512" 
      width={14} 
      height={14}
      >
    <Path 
      fill='#9ca396' 
      d="M59 467.7c-3.9 0-8-1.7-11.4-5.1-6-6-6.8-14.5-1.9-19.4l38.7-38.7c15.2-15.2 57.4-62.5 66.8-81.2l26.2-52.2c15.9-31.7 36.1-60.3 60-84.9 1.4-1.4 2.8-2.9 4.2-4.3l130-130c8.5-8.5 21.3-11.4 35.9-8.2 13.4 3 27.1 10.9 38.5 22.3s19.3 25.1 22.3 38.5c3.2 14.6.3 27.4-8.2 35.9l-129 129c-27.4 27.3-59.5 49.8-95.4 66.8l-45.4 21.5c-20.4 9.7-69.8 53.2-85.5 68.9l-37.8 38c-2.2 2.1-5 3.1-8 3.1zm-.8-15.7c0 .1.1.1 0 0l36-35.8c15.4-15.4 66.3-60.8 89.6-71.9l45.4-21.5c34.3-16.2 65-37.7 91.2-63.8l.6-.6L449.4 130c4.8-4.8 6.3-12.6 4.2-22.1-2.3-10.7-8.8-21.7-18.2-31.1-9.4-9.4-20.5-15.9-31.1-18.2-9.5-2.1-17.3-.6-22.1 4.2l-130 130-4.1 4.1c-22.8 23.5-42.1 50.8-57.3 81.1l-26.2 52.2c-10.7 21.4-54.7 70.1-69.6 85L58.2 452z" />
    <Path
      className="st0" 
      fill='#9ca396'
      d="m83.4 439.3-10.6-10.5M433.1 156.9c13.7-13.7 7.5-42.3-14.1-63.8-21.4-21.5-50-27.8-63.8-14.1"
    />
    <Path 
      fill='#9ca396' 
      d="M433.1 164.4c-1.9 0-3.8-.7-5.3-2.2-2.9-2.9-2.9-7.7 0-10.6 4.8-4.8 6.3-12.6 4.2-22.1-2.4-10.7-8.8-21.7-18.2-31.1-9.4-9.4-20.5-15.9-31.1-18.2-9.5-2.1-17.3-.6-22.1 4.2-2.9 2.9-7.7 2.9-10.6 0s-2.9-7.7 0-10.6c8.5-8.5 21.3-11.4 35.9-8.2 13.4 3 27.1 10.9 38.5 22.3s19.3 25.1 22.3 38.5c3.2 14.6.3 27.4-8.2 35.9-1.5 1.4-3.5 2.1-5.4 2.1zM299 259.7c-5.1 0-10-2-13.6-5.6L258 226.7c-3.6-3.6-5.6-8.4-5.6-13.6 0-5.1 2-9.9 5.6-13.6l17.2-17.2c2.9-2.9 7.7-2.9 10.6 0s2.9 7.7 0 10.6l-17.2 17.2c-.8.8-1.2 1.8-1.2 3 0 1.1.4 2.2 1.2 3l27.4 27.4c.8.8 1.8 1.2 3 1.2s2.2-.4 3-1.2l65.9-66c2.9-2.9 7.7-2.9 10.6 0s2.9 7.7 0 10.6l-66 66c-3.5 3.6-8.3 5.6-13.5 5.6z" />
    <Path 
      fill='#9ca396' 
      d="M295.9 178.8c-1.9 0-3.9-.7-5.3-2.2-2.9-3-2.9-7.7.1-10.6l54.6-53.7c7.5-7.4 19.6-7.3 27 .1l27.4 27.4c3.6 3.6 5.6 8.4 5.6 13.6 0 5.1-2 9.9-5.6 13.6l-3.1 3.1c-2.9 2.9-7.7 2.9-10.6 0s-2.9-7.7 0-10.6l3.1-3.1c.8-.8 1.2-1.8 1.2-3 0-1.1-.4-2.2-1.2-3L361.6 123c-1.6-1.6-4.3-1.6-5.9 0l-54.6 53.7c-1.4 1.4-3.3 2.1-5.2 2.1z" />
    </Svg>
  );
}

export default Temperature;
