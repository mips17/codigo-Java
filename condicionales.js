let edad=2
if(edad>0&&edad<18){
    console.log("sos un niño")
}else if (edad>18&&edad<50) {
    console.log("sos un adulto")
} else
    {console.log("sos un abuelito")
}


switch(edad){
    case 60:
        console.log("es 60")
            break;
    case 20:
        console.log ("es 20")
            break;
    default: console.log("saber")
        break;        
}

let marca="margaritas"
switch(marca){
    case "Diana":
        console.log("es Diana")
            break;
    case "tortrix":
        console.log("es tortrix")     
            break;
    case "margaritas":
        console.log("es margaritas")
            break;
     default: 
        console.log("no coincide")  
            break;
    
}