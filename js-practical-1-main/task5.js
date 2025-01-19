var list = [
  "sum",
  "$sum",
  "3sum",
  "sum_3",
  "A5S",
  "avCdf",
  "my-variable",
  "let",
  "-score",
  "hello",
  "world?",
  "world!",
];
console.log
(list[0], "is Valid, because it starts with a letter");
console.log
(list[1], "is Valid, because it starts with a dollar sign");
console.log
(list[2], "is invalid, because it starts with a number");
console.log
(list[3], "is Valid, because it starts with a number");
console.log
(list[4], "is Valid, because it starts with a letter");
console.log
(list[5], "is Valid, because it starts with a letter and is in camelcase");
console.log
(
  list[6],
  "is Valid, because it starts with a letter and has a hyphen which is allowed"
);
console.log
(list[7], "is invalid, because it is a reserved keyword");
console.log
(list[8], "is invalid, because it starts with a hyphen");
console.log
(list[9], "is Valid, because it starts with a letter");
console.log
(list[10], "is invalid, because it ends with a question mark");
console.log
(list[11], "is invalid, because it ends with an exclamation mark");
