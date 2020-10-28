//Exercise 47: Map Practice
function cleanNames (array) {
    return array.map((names) => names.trim());
}

//Exercise 48: Arrow Function Exercise
const greet = (name) => `Hey ${name}!`;

//Exercise 49: Filter Exercise
const validUserNames = (names) => {
    return names.filter(name => name.length < 10);
  };

//Exercise 50: Some/Every Exercise
const allEvens = nums => {
    return nums.every(num => (num %2 === 0));
};