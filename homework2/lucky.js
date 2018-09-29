let listOfLuckNumbers = [45, 46, 78, 87, 39, 93, 56];
/*
 * mock list of numbers that use to create lucky phone number
 */
function mockLuckyNumber() {
  const work = [45, 46, 78, 87, 39, 93, 56];
  const love = [32, 24, 62, 36, 63, 69, 96];
  const wealth = [28, 82, 45, 54, 65, 56, 78];
  const merchandising = [44, 22, 41, 16, 61, 26, 42];
  const technology = [98, 89, 99, 59, 95, 91, 19];
  const educationAndWiseness = [15, 51, 14, 41, 55, 39, 23];

  return [work, love, wealth, merchandising, technology, educationAndWiseness];
}

function unSelectNumber(value, element) {
  if (element.checked === true) {
    const index = listOfLuckNumbers.indexOf(value)
    listOfLuckNumbers.splice(index, 1)
  } else if (element.checked === false) {
    listOfLuckNumbers.push(value)
  }

}

/*
 * display data
 * @param listIds {array} list of ids to render datas
 * @param data {array} list
 */
function display(listIds, data) {
  listIds.forEach((value, index) => {
    document.getElementById(value).value = data[index]
  });
}

/*
 * generate normal phone from list of lucky number
 */
function generateNormalPhoneNumber() {

  //first 3 numbers
  let result = '081-';

  // contain numbers
  let countOfNumber = 7;

  while (countOfNumber > 0) {
    let random = Math.floor(Math.random() * 2)
    if (random === 0) {
      const lastNumber = Math.floor(Math.random() * 10);
      result = result + lastNumber;
      countOfNumber -= 1;
    } else if (random === 1) {
      const randomIndex = Math.floor(Math.random() * listOfLuckNumbers.length)
      result = result + listOfLuckNumbers[randomIndex];
      countOfNumber -= 2;
    }
  }
  if(result.length > 11){
    return result.substr(0,11)
  }
  return result;
}

function generatePhoneNumberFromInput(number) {
  const sumOfThreeNumbers = 9;
  let containNumber = number - sumOfThreeNumbers;
  let result = '081-';
  for (let i = 1; i <= 7; i++) {
    if (containNumber > 0) {
      if(containNumber > 28){
        const nextNumber = Math.floor((Math.random() * 9)+2)
        console.log(nextNumber)
        containNumber -= nextNumber;
        result += nextNumber
      }else if(containNumber <= 28){
        const nextNumber = Math.floor((Math.random() * 9))
        console.log(nextNumber)
        containNumber -= nextNumber;
        result += nextNumber
      }
    } else if (containNumber <= 0) {
      result += '0';
    }
  }
  return result
}
/*
 * get value from user input
 */
function getInput() {
  return document.getElementById('input').value;
}

/*
 * its sum equals to lucky number in the category you choose
 */
function generateFromNumber() {
  const luckyNumber = getInput();
  const listNumbers = [45, 46, 78, 87, 39, 93, 56];
  const indexOfNumber = listNumbers.indexOf(Number(luckyNumber));
  if (indexOfNumber !== -1) {
    const result = generatePhoneNumberFromInput(luckyNumber)
    console.log(result)
  } else if (indexOfNumber !== -1) {

  }
}
/*
 * call this function when use click event to generate
 */
function onGeneratePhoneNumber() {
  const number = generateNormalPhoneNumber();
  display(['inputNumber'], [number])
}
