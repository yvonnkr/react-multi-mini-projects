import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

const TranslateApp = () => {
  return (
    <LanguageStore>
      <div className='ui containter'>
        <LanguageSelector />

        <ColorContext.Provider value='green'>
          <UserCreate />
        </ColorContext.Provider>
      </div>
    </LanguageStore>
  );
};

export default TranslateApp;

// class TranslateApp extends React.Component {

//   render() {
//     return (
//       <LanguageStore>
//         <div className='ui containter'>
//           <LanguageSelector onLanguageChange={this.onLanguageChange} />

//           <ColorContext.Provider value='green'>
//             <UserCreate />
//           </ColorContext.Provider>
//         </div>
//       </LanguageStore>
//     );
//   }
// }

// export default TranslateApp;
