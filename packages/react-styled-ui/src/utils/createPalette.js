import _get from 'lodash.get';
import _merge from 'lodash.merge';

const createPalette = (paletteMap, theme) => {
  const colorStyle = _merge({}, paletteMap);
  const regex = /([a-zA-Z]+:\w+)/g;
  (function parserColorPalette(obj) {
    Object.keys(obj).map((key) => {
      const value = obj[key];
      if (typeof value === 'string') {
        obj[key] = obj[key].replace(regex, match => _get(theme, `colors.${match}`, match));
      } else {
        parserColorPalette(obj[key]);
      }
      return;
    });
  }(colorStyle));

  return colorStyle;
};

export default createPalette;
