import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

// ******* Using useContext Hook (function not class) *************************

const Button = () => {
  const color = useContext(ColorContext);
  const value = useContext(LanguageContext);
  const text = value.language === 'english' ? 'Submit' : 'Voorleggen';
  return <button className={`ui button ${color}`}>{text}</button>;
};

export default Button;

// ******* Using static contextType (best for accessing a single context object)*************************

// export default class Button extends Component {
//   static contextType = LanguageContext;
//   render() {
//     const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen';
//     return <button className='ui button primary'>{text}</button>;
//   }
// }

// ******* Using Consumer (best for accessing a multiple context objects) *************************

// export default class Button extends React.Component {
//   render() {
//     return (
//       <ColorContext.Consumer>
//         {color => (
//           <button className={`ui button ${color}`}>
//             <LanguageContext.Consumer>
//               {value => (value.language === 'english' ? 'Submit' : 'Voorleggen')}
//             </LanguageContext.Consumer>
//           </button>
//         )}
//       </ColorContext.Consumer>
//     );
//   }
// }
