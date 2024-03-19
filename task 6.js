// Task 6
// 1. Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

var request = new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var result = JSON.parse(request.response)
    console.log(result);

// a) Get all the countries from Asia continent /region using Filter function
console.log(" answer a:") // this line is added because we can verify answer easily in ouput window
var res = result.filter((ele)=>ele.continents == 'Asia')
console.log(res.map((ele)=>ele.name.common))

var res = result.filter((ele)=>ele.region == 'Asia')
 console.log(res.map((ele)=>ele.name.common))

// b) Get all the countries with a population of less than 2 lakhs using Filter function.

 var pop = result.filter((ele)=>ele.population < 200000)
 var countries_name = pop.map(ele=>ele.name.common)
 console.log(" answer b:") // this line is added because we can verify answer easily in ouput window
 console.log(countries_name)

// c)Print the following details name, capital, flag, using forEach function
console.log("answer c:") // this line is added because we can verify answer easily in ouput window
var data = result.forEach((ele)=> console.log(ele.name.common, ele.capital, ele.flag))
 
// d) Print the total population of countries using reduce function

var pop_data = result.map((ele)=> ele.population)
var sum_pop = pop_data.reduce((acc,cv)=> acc + cv,0)
console.log("answer d:") // this line is added because we can verify answer easily in ouput window
console.log(sum_pop)

// e)Print the country that uses US dollars as currencY.
var  countriesUsingUSD = result.filter(country => {
    return country.currencies && country.currencies['USD'];
  });
console.log("answer e:") // this line is added because we can verify answer easily in ouput window
countriesUsingUSD.forEach(country => {
      console.log(country.name.common);
    });

}