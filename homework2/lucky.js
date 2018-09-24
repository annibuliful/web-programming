/*
* mock list of numbers that use to create lucky phone number
*/
function mockLuckyNumber(){
  const work = [45, 46, 78, 87, 39, 93, 56];
  const love = [32, 24, 62, 36, 63, 69, 96];
  const wealth = [28, 82, 45, 54, 65, 56, 78];
  const merchandising = [44, 22, 41, 16, 61, 26, 42];
  const technology = [98, 89, 99, 59, 95, 91, 19];
  const educationAndWiseness = [15, 51, 14, 41, 55, 39, 23];

  return [work, love, wealth, merchandising, technology, educationAndWiseness];
}

/*
* generate normal phone from list of lucky number
*/
function generateNormalPhoneNumber(){

  // get all list of lucky numbers
  const listOfLuckyNumber = mockLuckyNumber();

  //first 3 numbers
  let result = '081';

  // contain numbers
  let countOfNumber = 7;

  while(countOfNumber > 0){
    if(countOfNumber === 1){
      const lastNumber = Math.floor(Math.random() * 10);
      result = result + lastNumber;
      countOfNumber -= 1;
      break;
    }else if(countOfNumber > 0){
      const randomIndexOfCategory = Math.floor(Math.random() * 6);
      const randomIndexOfNumber = Math.floor(Math.random() * 7);
      result = result + listOfLuckyNumber[randomIndexOfCategory][randomIndexOfNumber];
      countOfNumber -= 2;
    }
  }
  return result;
}

function onGeneratePhoneNumber(){
  console.log('sss')
  const number = generateNormalPhoneNumber();
  display(['inputNumber'],[number])
}

/*
* display to DOM
* @param listIds {array} list of ids to render datas
* @param data {array} list
*/
function display(listIds , data){
  listIds.forEach((value, index)=>{
    console.log(value)
    document.getElementById(value).value = data[index]
  })
}
