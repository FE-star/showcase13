/*
 * @Author: kael 
 * @Date: 2018-02-14 17:50:28 
 * @Last Modified by: kael
 * @Last Modified time: 2018-07-03 23:18:10
 */

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

module.exports = {
  // lookaround
  // https://github.com/FE-star/2018.6/issues/13
  case1: (str) => {
    return /^(([img])(?!.*\2))+$/.test(str);
  },
  case2: () => {
    console.log('\t----------------------------');
    [
      '.',
      '*+?',
      '^$',
      '{}()[]',
      '|',
      '\\',
    ].forEach(str => {
      let regStr = escapeRegExp(str);
      console.log('\tbefore:', str);
      console.log('\tafter:', regStr);
      console.log('\tregexp:', new RegExp(regStr));
      console.log('\t----------------------------');
    });
  }
};