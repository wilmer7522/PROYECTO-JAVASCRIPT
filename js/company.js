let url = `https://api.spacexdata.com/v4/company`

fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data.headquarters);
        
    })