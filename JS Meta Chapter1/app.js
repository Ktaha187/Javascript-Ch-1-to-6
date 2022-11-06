alert("Hi from a different page");
function a(){
    let a = 10;
    alert("The value of a is "+ a)
}
function purpose(){
    alert("The purpose of this file is to code some javascript syntax here and then apply it to the html page using script tag externally...\nIMPORTANT NOTE!!!... this information will be display after clicking button Display\n Good luck for it :-)")
    
}
function input(){
    let name1 = prompt("Hi What's your name?");
    if(name1 === "Taha"){
        alert("Hello "+ name1 + " hope you're enjoying this test")
    }
    else{
        alert("invalid name try again!!!")
    }

}
function random(){
        let fahrenheit = Math.floor(Math.random()*100);
        let Kelvin = (fahrenheit - 32) * 5/9 + 273.15;
        alert("Random value of Fahrenheit into kelvin "+ Kelvin);
        console.log("Random value of Fahrenheit into kelvin "+ Kelvin); 
}