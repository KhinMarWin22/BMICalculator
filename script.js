




const btn = document.getElementById("btn");
  const height = document.getElementById("height");
  const weight = document.getElementById("weight");
  const result = document.getElementById("result");
  const clear = document.getElementById("clear")

  btn.onclick= () =>{
   
  
    const bmi = (weight.value / ((height.value * height.value) / 10000)).toFixed(2);
    if( bmi < 18.5 ){
      result.innerText = `Under weight : ${bmi}`;
    }else if( bmi >= 18.5 && bmi < 24.9 ){
      result.innerText = `Normal weight : ${bmi}`;
    }else if( bmi >= 25 && bmi < 29.9 ){
      result.innerText = `Over weight : ${bmi}`;
    }else if( bmi >= 30 && bmi < 34.9 ){
      result.innerText = `Obesity (class I) : ${bmi}`;
    }else if( bmi >= 35.5 && bmi < 39.9 ){
      result.innerText = `Obesity (class II): ${bmi}`;
    }else if( bmi > 40){
      result.innerText = `Extreme obesity : ${bmi}`;
    }
    weight.value = height.value = null;

  
  }
clear.onclick = () =>{
  result.innerText = null;
}

// function convertToCentimeters() {
//   // Get values from the input fields
//   const feet = parseFloat(document.getElementById('feet').value);
//   const inches = parseFloat(document.getElementById('inches').value);

//   // Calculate total inches
//   const totalInches = feet * 12 + inches;

//   // Calculate centimeters (1 inch = 2.54 cm)
//   const centimeters = totalInches * 2.54;

//   // Display the result
//   const resultElement = document.getElementById('result');
//   resultElement.innerHTML = `${feet} feet and ${inches} inches is equal to ${centimeters.toFixed(2)} centimeters.`;
// }

const feet = document.querySelector("#feet");
const inches = document.querySelector("#inches");
const tocm = document.querySelector("#tocm");
const totalcm = document.querySelector("#totalcm");
const pound = document.querySelector("#pound");
const tokg = document.querySelector("#tokg");
const totalkg = document.querySelector("#totalkg");

tocm.addEventListener("click" ,()=>{

  // calculate ft in to cm
const converttocm = feet.value * 30.48 + inches.value;
 totalcm.innerText = `${converttocm} cm`;
 feet.value = inches.value=null;




});
tokg.addEventListener("click", ()=>{
  const converttokg = pound.value / 2.2046 ;
  totalkg.innerText = `${converttokg.toFixed(2)} kg`;
  pound.value = null;
})









