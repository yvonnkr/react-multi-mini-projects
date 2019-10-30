import React from 'react';
import ReactDOM from 'react-dom';
// import JsxApp from './projects/jsx/JsxApp';
// import CommentsApp from './projects/comments/CommentsApp';
// import SeasonsApp from './projects/seasons/SeasonsApp';
// import PicsApp from './projects/pics/components/PicsApp';
// import VideosApp from './projects/videos/components/VideosApp';
// import TranslateApp from './projects/translate/components/TranslateApp';
// import HooksSimpleApp from './projects/hooksSimple/components/HooksSimpleApp';
import SeasonsApp from './projects/seasonsWithHooks/SeasonsApp';

const App = () => {
  return <SeasonsApp />;
};

ReactDOM.render(<App />, document.querySelector('#root'));
