// eslint-disable-line
export default () => {
  let imgs = require.context('./assets/groups/svg/', false, /\.(svg)$/);
  let imgArray = imgs.keys().map(imgs);
  let imgObj = imgArray.reduce((accumulator, current) => {
    const group = current.substring(current.lastIndexOf('/')+1, current.indexOf('.'));
    accumulator[group] = current;
    return accumulator;
  }, {});
  return imgObj;
}