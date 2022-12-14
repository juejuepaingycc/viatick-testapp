import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Approved() {
  return (
    <Svg  
      viewBox="0 0 24 24" 
      width={17} 
      height={17}>
      <Path
        d="M17.53 9.53a.75.75 0 0 0-1.06-1.06l1.06 1.06ZM10 16l-.53.53a.75.75 0 0 0 1.06 0L10 16Zm-2.47-3.53a.75.75 0 0 0-1.06 1.06l1.06-1.06Zm8.94-4-7 7 1.06 1.06 7-7-1.06-1.06Zm-10 5.06 3 3 1.06-1.06-3-3-1.06 1.06ZM20.25 12A8.25 8.25 0 0 1 12 20.25v1.5c5.385 0 9.75-4.365 9.75-9.75h-1.5ZM12 20.25A8.25 8.25 0 0 1 3.75 12h-1.5c0 5.385 4.365 9.75 9.75 9.75v-1.5ZM3.75 12A8.25 8.25 0 0 1 12 3.75v-1.5c-5.385 0-9.75 4.365-9.75 9.75h1.5ZM12 3.75A8.25 8.25 0 0 1 20.25 12h1.5c0-5.385-4.365-9.75-9.75-9.75v1.5Z"
        fill="#b9e8b8"/>
    </Svg>
  );
}

export default Approved;
