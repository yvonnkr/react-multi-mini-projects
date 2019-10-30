import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';

const LanguageSelector = () => {
  const value = useContext(LanguageContext);
  return (
    <div>
      Select a language
      <i
        className='flag us'
        onClick={() => value.onLanguageChange('english')}
      />
      <i className='flag nl' onClick={() => value.onLanguageChange('dutch')} />
    </div>
  );
};

export default LanguageSelector;

// class LanguageSelector extends React.Component {
//   static contextType = LanguageContext;
//   render() {
//     return (
//       <div>
//         Select a language
//         <i
//           className='flag us'
//           onClick={() => this.context.onLanguageChange('english')}
//         />
//         <i
//           className='flag nl'
//           onClick={() => this.context.onLanguageChange('dutch')}
//         />
//       </div>
//     );
//   }
// }

// export default LanguageSelector;
