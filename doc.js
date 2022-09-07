const es_primo = (number) => {
    let iteration = 2;

    let rule = Math.floor(Math.sqrt(number));
  
    for (iteration; iteration <= rule; ++iteration) {
      if (number % iteration === 0) 

      return false
    }
    return true
}

let numbers = [9,47,1007,3738,209,637,4141,1050703]

numbers.forEach((number) => {
    if(es_primo(number)){
        console.log(`${number} si es primo`);
    }else{
        console.log(`${number} no es primo`);
    }
})