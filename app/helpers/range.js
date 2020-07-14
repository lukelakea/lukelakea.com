import { helper } from '@ember/component/helper';

function rangeHelper(args) {
  var range = [];
  for(var i=args[0]; i < args[1]; ++i){
    range.push(i);
  }
  return range;
};

export default helper(rangeHelper);
