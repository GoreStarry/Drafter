import Wimmie from '../components/Wimmie/Wimmie.jsx';
import Bum from '../components/Bum/Bum.jsx';

const regexDecoratorCreator = reg => function(contentBlock, callback, contentState) {
  const text = contentBlock.getText();
  let matchArr,
    start;
  while ((matchArr = reg.exec(text)) !== null) {
    start = matchArr.index;
    callback(start, start + matchArr[0].length);
  }
}

export default [{
  strategy: regexDecoratorCreator(/\u7dad\u5c3c/g),
  component: Wimmie,
}, {
  strategy: regexDecoratorCreator(/\u5305\u5b50/g),
  component: Bum,
}]
