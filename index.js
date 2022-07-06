function sum(...args) {
  if(args.length==0){
    return "atleast Two argument are Require"
  }
  if(args.length===1){
    return "Atleast Two Arguments Require"
  }
  const sumvalue = [...args].reduce((a, b) => a + Number(b), 0);
  return Number(sumvalue.toFixed(1));
}

module.exports = sum;
