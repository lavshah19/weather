



// let cityName = "London";
const API_key = "207ee36e5cf154f1340df71ed34b90c7";

let btn=document.querySelector("button");


let Temp=document.querySelector(".temp");
let Location=document.querySelector(".location");
let mintem=document.querySelector(".mintemp");
let maxtem=document.querySelector(".maxtemp");
let des=document.querySelector(".describe");
let Humidity=document.querySelector(".Humidity");
let wind=document.querySelector(".wind");
let lon=document.querySelector(".lon");
let img=document.querySelector("img");

btn.addEventListener("click",()=>{
    cityName=document.querySelector("input").value;
    fetchData();
    document.querySelector("input").value="";
    })

async function fetchData() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`;
    const response = await fetch(url);
   
    try{
        if(!response.ok){
            alert("cannot fetch this place name");
            throw new Error("there is some error ",response.statusText);
        }
        let data=await response.json();
       document.querySelector(".mainbody").style.display="flex";
       document.querySelector(".footer").style.display="flex";
        Temp.innerHTML=`${Math.round( data.main.temp - 273.15)}°C`;
        Location.innerHTML=data.name;
        mintem.innerHTML=`${Math.round( data.main.temp_min - 273.15)}°C`;
        maxtem.innerHTML=`${Math.round( data.main.temp_max - 273.15)}°C`;
        des.innerHTML=data.weather[0].main;
        Humidity.innerHTML=`${data.main.humidity}%`;
        wind.innerHTML=`${Math.round( data.wind.speed)}km/h`;
        lon.innerHTML=data.coord.lon;
        date();
        switch(data.weather[0].main){
            case "Clouds": img.src="strom-unscreen.gif"; breake;
            case "Rain": img.src="rain-unscreen.gif"; breake;
            case "Clear": img.src="rainbow-unscreen.gif"; breake;
            case "Mist": img.src="wind.unscreen.gif"; breake;
        }




    }catch(err){
        console.error('There was a problem with the fetch operation:', err)
       
    }
}

 function date(){
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let month = months[d.getMonth()];
let day = days[d.getDay()];
let din= d.getDate();
document.querySelector(".time").innerHTML=`${day},${month} ${din+1}`;
    


}


