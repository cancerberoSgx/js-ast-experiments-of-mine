const one = 1;
const two = 2;
const four: number = 4;

const myFunc = function():void { };

const myObj = {
  one: one,
  two: two,
  three: one,
  'four': four,
  myFunc: myFunc,
  ['computed' + 'property']: 1,
  method: function() { },
  method2: (): void => { },
  method3: function foo(n: number): number {
    if (n === 0) {
      return n;
    }
    return foo(n - 1) + n;
  },
  method4: function whatever(): string {
    return one+'';
  },
};
