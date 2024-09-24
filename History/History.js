let container = document.getElementById('container')

fetch('https://api.spacexdata.com/v4/history')
.then(res => res.json())
.then(data => {

    container.innerHTML = `

        <img id = "logo" src = "../storage/img/Fondos/SpaceX-White-Dark-Background-Logo.wine.svg">
        <img id = "imagen" src = "./historyImg/52724298933_b47c3a847f_o.jpg">
        <p id = "titulo">${data[0].title}</p>
        
        <div id = "tabla">
            <div><p id = "descripcion">${data[0].details}</p></div>
            <div><p id = "descripcion">${data[0].event_date_utc}</p></div>
            <div><p id = "descripcion">${data[0].event_date_unix}</p></div>
            <div><p id = "descripcion"><a href = "${data[0].links.article}">Web Page</p></div>
        </div>

        <div id ="page"><iframe src = "${data[0].links.article}" scrolling = "no"></div>

    `
    let titulo = document.getElementById('titulo')
    let imagen = document.getElementById('imagen')
    document.getElementById('titulo').addEventListener('click', () => {
        titulo.style.top = "2vw"
        imagen.style.display = "none"
    })

})

