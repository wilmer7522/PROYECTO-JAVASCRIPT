document.getElementById('iconrocket').addEventListener('click', () => {
    window.location.href = '../Rocket/Rocket.html';
})

document.getElementById('iconcapsule').addEventListener('click', () => {
    window.location.href = '../capsules.html';
})

document.getElementById('iconhistory').addEventListener('click', () => {
    window.location.href = '../History/History.html';
})

document.getElementById('iconcompany').addEventListener('click', () => {
    window.location.href = '../company.html';
})

let container = document.getElementById('container')

fetch('https://api.spacexdata.com/v4/history')
.then(res => res.json())
.then(data => {


    let listaItems = ""
    data.forEach(element => {
        let nombres = element.title

        listaItems += `
            <li data-id = "${element.id}">${nombres}</li>
        `
    });

    container.innerHTML = `

        <img id = "logo" src = "../storage/img/Fondos/SpaceX-White-Dark-Background-Logo.wine.svg">
        <div id = "lista">
            <ul>
                ${listaItems}
            </ul>
        </div>
        <div id = "contenedor"></div>

    `

    let lista = document.getElementById('lista')
    let contenedor = document.getElementById('contenedor')

    lista.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            let id = e.target.getAttribute('data-id');
            let element = data.find((item) => item.id === id);
        

            contenedor.innerHTML = `

            <p id = "titulo">${element.title}</p>
            <img id = "page" src = "./historyImg/52724298933_b47c3a847f_o.jpg">
        
            <div id = "tabla">
                <div id = "caja1">
                    <p id = "titles">Description</p>
                    <p id = "descripcion">${element.details}</p>
                </div>

                <div id = "caja">
                    <div id = "caja2">
                        <p id = "titles">Event date</p>
                        <p id = "descripcion">${element.event_date_utc}</p>
                    </div>
                    <div id = "caja3">
                        <p id = "titles">Event date Unix</p>
                        <p id = "descripcion">${element.event_date_unix}</p>
                    </div>
                    <div id = "caja4">
                        <p id = "titles">Web page</p>
                        <p id = "descripcion"><a href = "${element.links.article}">Web Page</p>
                    </div>
                </div>
            </div>

            

        `
        }
    })

    

})
