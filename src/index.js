const cities = ['Paris', 'CDMX', 'Tokyo', 'Berlín', 'Berlgrado'];

const randomString  = () =>{
    const string = cities[Math.floor(Math.random() * cities.length)];
    return string;
};


const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if(!str){
            reject (Error('error'))
        }
        resolve(str.split("").reverse().join(""))
    })
}

const cityIsExist  = city => cities.includes(city); 

module.exports = {
    randomString,
    cityIsExist,
    reverseString2
};