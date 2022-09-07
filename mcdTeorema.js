/*  ===============================================
validate if is a int number
==================================================*/
const validateInteger = (num) => {
  if (isNaN(num) || !Number.isInteger(num))
    throw TypeError(`El número ${num} debe ser entero`);
};

/*  ===============================================
validate if number id gt 0
==================================================*/
const validateAbsInteger = (num) => {
  if (num < 0) throw TypeError(`El número ${num} debe ser mayor a 0`);
};

/*  ===============================================
validate if is prime number
==================================================*/
const getPrimeNumber = (number) => {
  validateInteger(number);

  let iteration = 2;

  let rule = Math.floor(Math.sqrt(number));

  for (iteration; iteration <= rule; ++iteration) {
    if (number % iteration === 0) return false;
  }
  return true;
};

const mergeArrays = (numbers1, numbers2) => {
  //concat 2 arrays from number1 and number2
  let mergeArrays = numbers1.concat(numbers2);

  const data = new Set(mergeArrays);

  let res = [...data];

  return res;
};

const getPrimeFactors = (number) => {
  //validate number integer
  validateInteger(number);

  validateAbsInteger(number);

  let numbers = [];

  let iteration = 2;

  for (iteration; iteration <= number; ++iteration) {
    while (getPrimeNumber(iteration) && number % iteration === 0) {
      numbers.push(iteration);

      number /= iteration;
    }
  }

  return numbers;
};

const getMCD = (data) => {
  let value = 1;

  data.forEach((register) => {
    let exp = Math.pow(register.number, register.min);

    value *= exp;
  });

  return value;
};

const getMCM = (data) => {
  let value = 1;

  data.forEach((register) => {
    let exp = Math.pow(register.number, register.max);

    value *= exp;
  });

  return value;
};

const getTwoNumbers = (number1, number2) => {
  //array to save objects
  const factors = [];

  //get primes by number 1
  let numbers1 = getPrimeFactors(number1);

  //get primes by number 2
  let numbers2 = getPrimeFactors(number2);

  let merges = mergeArrays(numbers1, numbers2).sort((a, b) => (a > b ? 1 : -1));

  merges.forEach((number) => {
    let firstArray = numbers1.filter((filter) => filter === number);

    let secondArray = numbers2.filter((filter) => filter === number);

    const data = {
      number: number,
      min:
        firstArray.length > secondArray.length
          ? secondArray.length
          : firstArray.length,
      max:
        firstArray.length < secondArray.length
          ? secondArray.length
          : firstArray.length,
    };

    factors.push(data);
  });

  let mcd = getMCD(factors);

  let mcm = getMCM(factors);

  getNumbersForProduct(mcd, mcm);

  const datamcm = document.querySelector('#mcm')

  datamcm.innerHTML = mcm

  const datamcd = document.querySelector('#mcd')

  datamcd.innerHTML = mcd

  return `El MCM de los numeros ${number1} y ${number2} es ${mcm}, el MCD es ${mcd}`;
};

const getNorRepeatDataInArray = (array) => {
  const data = new Set(array);

  let res = [...data];

  return res;
};

const getNumbersForProduct = (number1, number2) => {
  //get primer for number1 (mcd) and number (mcm)

  let primesNumber1 = getPrimeFactors(number1);

  let primesNumber2 = getPrimeFactors(number2);

  console.log(primesNumber1);

  console.log(primesNumber2);



  let noRepeatNumber1 = getNorRepeatDataInArray(primesNumber1);

  let noRepeatNumber2 = getNorRepeatDataInArray(primesNumber2);

  if (noRepeatNumber1.length < noRepeatNumber2.length) {

    getValueSimilarNumbers(primesNumber1, primesNumber2);

  } else {

    getValueSimilarNumbers(primesNumber2, primesNumber1);

  }

};

const getValueSimilarNumbers = (primesNumber1,primesNumber2) => {

  const numberSimilar = [];





  //remove all numbers to belongs to  the 2 initial numbers
  primesNumber1.forEach((number) => {

    let position = primesNumber2.indexOf(number);


    primesNumber2.splice(position, 1);

    numberSimilar.push(number);

  });

  //combinations

  const combinateNumbers = document.getElementById('numbers')

  const bases = document.getElementById('bases')

  if(numberSimilar.length > 0)
  {

    
    let base = numberSimilar.reduce((prev,curr) => prev * curr)
    
    bases.innerText = `Espera la base de MCD y MCM es ${base}! Tenemos una lista de números que puede utilizar para obtener diferentes números de N y M:`
  }

  if(combinateNumbers)
  {
    primesNumber2.forEach((number) => {
      combinateNumbers.innerHTML += `<span class="card text-white bg-secondary mb-3">${number}<span>`
    })
  }


  calculateCombinations(primesNumber2)

  return numberSimilar;
};

const calculateCombinations = (data) => {
  const multNumber1 = [];
  const multNumber2 = [];

  data.forEach((number,index) => {

    let random = Math.random(1,2)


    let obj = {
      number: number,
      position: index,
      numberMultiply:random
    }
  })
}

const getFactorialNumber = (number) => {
  if (number === 0) return 1;

  return number * getFactorialNumber(number - 1);
};

const registerNumber = (value) => {

  const combinateNumbers = document.getElementById('numbers')

  const first = document.getElementById('first')

  const second = document.getElementById('second')

  const button = document.getElementById('atomos')

  const error = document.getElementById('error')

  combinateNumbers.innerText = '';

  error.innerText = '';


  if(first.value !== '' && second.value !== '')
  {
  
    button.disabled = false;
  }else{
    button.disabled = true
  }
}

const atomos = () => {
  try {

    const first = document.getElementById('first')

    const second = document.getElementById('second')

    getTwoNumbers(parseInt(first.value),parseInt(second.value))
  } catch (e) {
    console.log(`Error: ${e.message}`);

    const error = document.getElementById('error')
    error.innerText = e.message
  }
}

/* 
getNumbersForProduct(30008,4)

 */
/* 
opciones/complementarios/solver 
ir / click solvr/ acptar */
