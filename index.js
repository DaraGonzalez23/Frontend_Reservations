console.log("Hola mundo"); //Synonym print

//var div = document.getElementById("container");

//Bloque de variables
let hotelList = []; 

fetch ("http://localhost:59506/api/hotels/locations/m")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
/*.then (data=>{
 console.log (data[0].hotelName)
    div.innerHTML+= `<h1>   ${data[0].hotelName} </h1>`
})*/ //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.then (data=>{
    hotelList = data;
    console.log("hotelList", hotelList);
})
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59506/api/hotels/hotelsName/h")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59506/api/hotels/prices/100/200")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59506/api/hotels/checkin/2024-11-01/2024-11-02")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

var div = document.getElementById("container");
fetch ("http://localhost:59779/api/flights/citiesOrigin/m")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>{console.log (data[0].cityOrigin)}) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59779/api/flights/citiesDestination/p")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59779/api/flights/prices/10/200")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction

fetch ("http://localhost:59779/api/flights/departuresTime/2000-01-01T00:00:00/2024-12-31T23:59:59")
.then(response=>response.json()) //Callback is when you introduce a parameter into a fuction FIRST PROMISE
//It arrives a parameter and you convert to format JSON
.then (data=>console.log(data)) // //data is the parameter, Response JSON, SECOND PROMISE, shows the information (Print), the value of the parameter is data
.catch (error=>console.error(error)) //Arrowfuction


//var myName = "Dara";
//var myOldYear = 23;
//let myBreakfast = true; //Is more secure, its more difficult access than var. Bought fuction to set variables
//const pi = 3.1416; //Values never change

