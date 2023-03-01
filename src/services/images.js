function importAll(r) {
  let images = {};
  let key;
  r.keys().map((item, index) => { 
    key = item.replace('../', '').split('/');
    key = key[key.length - 1]
    images[key] = r(item);
  });
  return images;
}

const images = importAll(require.context('../assets/', true, /\.(png|jpe?g|svg)$/));

export default images;