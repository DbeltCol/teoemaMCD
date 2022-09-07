const integer1 = 10418;
const integer2 = 6321;


/*  ===============================================
Validar si son numeros enteros
==================================================*/


const validateInteger = (num) => {
    if(isNaN(num) || !Number.isInteger(num)) throw TypeError(`El número ${num} debe ser entero`);
}


/*  ===============================================
Funcion de MCD validando el teorema 2 <= d <= raiz 2 
==================================================*/

const mcd = (num1,num2) => 
{
    validateInteger(num1);

    validateInteger(num2);


    num1 = Math.abs(num1);

    num2 = Math.abs(num2);

    while(num2)
    {
        let num3 = num2;

        num2 = num1%num2;
        
        num1 = num3;

    }

    return num1;

}

try{
console.log(mcd(integer1,integer2));

}catch(e)
{
console.log(e);
} 


/*  ===============================================
Funcion de MCD validando el teorema 2 <= d <= raiz 2 
==================================================*/



const getSqrt = (number) => 
{
    validateInteger(number);

    return Math.floor(Math.sqrt(number))
}




/*  ===============================================
 Funcion de MCD num2 MCM validando el teorema de Euclides
==================================================*/

const getMCD = (num1,num2) => {
    if(num1 == 0) return num2;

    return getMCD(num2 % num1, num1);
}

const getMCM = (num1,num2,num3) => {
    return (num1*num2)/num3;
}

try{    
    let mcd = getMCD(integer1,integer2);
    let mcm = getMCM(integer1,integer2,mcd);

    console.log(`El valor es MCD  por metodo de Euclides es ${mcd}`);
    console.log(`El valor es MCM  por metodo de Euclides es ${mcm}`);
}catch(e)
{
console.log(e);
}