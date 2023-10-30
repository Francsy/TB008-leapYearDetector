//Hacemos que la variable year sea designada a través del prompt

let year = prompt("Introduce tu año favorito");

//El primer if es para filtrar que sea un número:

if (year >= 0 || year <= 0) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 4 == 0 && year % 400 == 0)) {
        console.log(`Puedes estar seguro: el año ${year} es bisiest`)
    } else {
        console.log(`El ${year} es un año normalísimo`)
    }
} else { console.log(`${year} no es un año`); }

/* En el primer if ponemos una disyunción de dos proposiciones:
- Que sea múltiplo de 4 mientras no sea de 100.
- Que sea múltiplo de 4 y que también lo sea de 400.
Si al menos una es verdadera, se imprimirá que es bisiesto



/* Otra forma:

let year = prompt("Introduce año")

while(year>=0 || year<=0){
        
    if ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)) {
        console.log("Bisiesto");
        break;
    }
    
    if (year) {
        console.log("no bisiesto")
        break;
    }
            
}
 */



/* Otra forma:

if (year >= 0 || year <= 0) {
    switch (year) {
        case ((year%4==0 && year%100!=0) || (year%4==0 && year%400==0)):
            console.log("Puedes estar seguro: es bisiesto");
            break;
        default:
            console.log("Es un año normalísimo");
            break;
    }
} else {
    console.log("Eso no es un año");
} 
*/




/* Última opción vista

function bisiesto(year) {
    return year%100===0 ? year%400===0 : year%4=== 0;
}
bisiesto(year) === true ? console.log("El año " + year + " es bisiesto") : console.log("El año " + year + " es normalísimo"); */