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

let iconRocket = document.getElementById('iconrocket')
let iconCapsule = document.getElementById('iconcapsule')
let iconHistory = document.getElementById('iconhistory')
let iconCompany = document.getElementById('iconcompany')

document.getElementById("iconrocket").addEventListener("click", () => {
    iconRocket.style.borderBottom = '0.3vw solid white'
    iconCapsule.style.borderBottom = 'none'
    iconHistory.style.borderBottom = 'none'
    iconCompany.style.borderBottom = 'none'
})

document.getElementById("iconcapsule").addEventListener("click", () => {
    iconCapsule.style.borderBottom = '0.3vw solid white'
    iconRocket.style.borderBottom = 'none'
    iconHistory.style.borderBottom = 'none'
    iconCompany.style.borderBottom = 'none'
})

document.getElementById("iconhistory").addEventListener("click", () => {
    iconHistory.style.borderBottom = '0.3vw solid white'
    iconCapsule.style.borderBottom = 'none'
    iconRocket.style.borderBottom = 'none'
    iconCompany.style.borderBottom = 'none'
})

document.getElementById("iconcompany").addEventListener("click", () => {
    iconCompany.style.borderBottom = '0.3vw solid white'
    iconHistory.style.borderBottom = 'none'
    iconCapsule.style.borderBottom = 'none'
    iconRocket.style.borderBottom = 'none'
})

let boton1 = document.getElementById('uno')
let boton2 = document.getElementById('dos')
let boton3 = document.getElementById('tres')
let boton4 = document.getElementById('cuatro')

let variable = 0

document.addEventListener("DOMContentLoaded", () =>{
    boton1.style.backgroundColor = '#14162C'
    let variable = 0
    variable = 0
    unique(variable)
})

document.getElementById("uno").addEventListener("click", () => {
    boton1.style.backgroundColor = '#14162C'
    boton2.style.backgroundColor = 'transparent'
    boton3.style.backgroundColor = 'transparent'
    boton4.style.backgroundColor = 'transparent'
    let variable = 0
    variable = 0
    unique(variable)

})

document.getElementById("dos").addEventListener("click", () => {
    boton2.style.backgroundColor = '#14162C'
    boton1.style.backgroundColor = 'transparent'
    boton3.style.backgroundColor = 'transparent'
    boton4.style.backgroundColor = 'transparent'
    let variable = 0
    variable =  1
    unique(variable)

})

document.getElementById("tres").addEventListener("click", () => {
    boton3.style.backgroundColor = '#14162C'
    boton2.style.backgroundColor = 'transparent'
    boton1.style.backgroundColor = 'transparent'
    boton4.style.backgroundColor = 'transparent'
    let variable = 0
    variable =  2
    unique(variable)

})

document.getElementById("cuatro").addEventListener("click", () => {
    boton4.style.backgroundColor = '#14162C'
    boton2.style.backgroundColor = 'transparent'
    boton1.style.backgroundColor = 'transparent'
    boton3.style.backgroundColor = 'transparent'
    let variable = 0
    variable =  3
    unique(variable)

})

let container = document.getElementById('container')
let container2 = document.getElementById('container2')

function unique(variable) {
    fetch('https://api.spacexdata.com/v4/rockets')
    .then(res => res.json())
    .then(data => {

        let imagesHTML = '';
        let images = data[variable].flickr_images;

        for (let i = 0; i < images.length && i < 6; i++) {
            imagesHTML += `<img src="${images[i]}" alt="Rocket image">`;
        }

        let acceleration = data[variable].engines.thrust_sea_level.kN
        let speed = data[variable].engines.thrust_vacuum.kN

        let maxAcceleration = 1780
        let maxSpeed = 1960

        let porcentajeAcceleration = (acceleration/maxAcceleration) * 100
        let porcentajeSpeed = (speed/maxSpeed) * 100

        container.innerHTML = `
        
            <mi-top id="topbar">
                <div>${data[variable].name}</div>
            </mi-top>

            <mi-right id="rightbar" class="no">
                <img id= "icono1" src="../storage/img/icons/mech.svg" alt="">
                <p id = "country">${data[variable].country}</p><br>
                <p id = "descripcion">${data[variable].description}</p><br>
                <img id= "icono2" src="../storage/img/icons/mech.svg" alt="">
                <p id = "tittledes"> The estimated cost per rocket launch</p><br>
                <p id = "costo">$ ${data[variable].cost_per_launch}</p><br>
                <img id= "icono3" src="../storage/img/icons/mech.svg" alt="">
                <p id = "tittlecost"> The date of the first flight of the rocket</p>
                <p id = "fly">${data[variable].first_flight}</p><br>
                <img id= "icono4" src="../storage/img/icons/mech.svg" alt="">
                <p id = "tittlelink"> Read more about the coete</p><br>
            </mi-right>

            <mi-left id="leftbar" class="no">
                <div id = "barras">
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress1" max="1420788" value="${data[variable].mass.kg}"></progress>
                    </div>
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress2" max="150000" value="${data[variable].payload_weights[0].kg}"></progress>
                    </div>
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress3" max="118" value="${data[variable].height.meters}"></progress>
                    </div>
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress4" max="12.2" value="${data[variable].diameter.meters}"></progress>
                    </div>
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress5" max="5.2" value="${data[variable].second_stage.payloads.composite_fairing.diameter.meters}"></progress>
                    </div>
                    <div>
                        <label for="">Rocket weight :</label><br>
                        <progress id="progress6" max="13.1" value="${data[variable].second_stage.payloads.composite_fairing.height.meters}"></progress>
                    </div>
                </div>

                <div id = "valores">
                    <div>
                        ${data[variable].mass.kg} kg<br>
                        ${data[variable].mass.lb} lb<br>
                    </div>
                    <div>
                        ${data[variable].payload_weights[0].kg} kg<br>
                        ${data[variable].payload_weights[0].lb} lb<br>
                    </div>
                    <div>
                        ${data[variable].height.meters} M<br>
                        ${data[variable].height.feet} F<br>
                    </div>
                    <div>
                        ${data[variable].diameter.meters} M<br>
                        ${data[variable].diameter.feet} F<br>
                    </div>
                    <div>
                        ${data[variable].second_stage.payloads.composite_fairing.diameter.meters} M<br>
                        ${data[variable].second_stage.payloads.composite_fairing.diameter.feet} F<br>
                    </div>
                    <div>
                        ${data[variable].second_stage.payloads.composite_fairing.height.meters} M<br>
                        ${data[variable].second_stage.payloads.composite_fairing.height.feet} F
                    </div>
                </div>
            </mi-left>

            <mi-center id="centerbar">
                ${imagesHTML}
            </mi-center>

            <mi-supcenter id="supcenter">
                <div id="item_progress1" class="item__progress__bar" style= "background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--six) ${porcentajeAcceleration}%, transparent 0);"><div class="progress__value"><strong>Atmospheric acceleration</strong><br><small>${porcentajeAcceleration.toFixed(2)} %</small><br><small>${acceleration} kN <br> ${data[variable].engines.thrust_sea_level.lbf} Lbf</small></div></div>
                <div id="item_progress2" class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--four) ${porcentajeSpeed}%, transparent 0);"><div class="progress__value"><strong>Speed in space</strong><br><small>${porcentajeSpeed.toFixed(2)} %</small><br><small>${speed} kN <br> ${data[variable].engines.thrust_vacuum.lbf} Lbf</small></div></div>
            </mi-supcenter>

            <mi-rightcenter id="rightcenterbar">
                <p id = "information">Information rocket</p>

                <div id = "types">
                    <p>Types</p>
                    <p>Rocket in service</p>
                    <p>Number of stages</p>
                    <p>Number of propellants</p>
                    <p>Landing legs</p>
                    <p>Leg material</p>
                </div>

                <div id = "values">
                    <p>${data[variable].type}</p>
                    <p>${data[variable].active}</p>
                    <p>${data[variable].stages}</p>
                    <p>2</p>
                    <p>${data[variable].landing_legs.number}</p>
                    <p>${data[variable].landing_legs.material}</p>
                </div>
            </mi-rightcenter>

            <mi-leftcenter id="leftcenterbar">
                <p id = "engine">Engine information</p>

                <div id = "types">
                    <p>Type</p>
                    <p>Maximum power loss</p>
                    <p>Engine availability</p>
                    <p>Number of engines</p>
                    <p>Stage 1 fuel</p>
                    <p>Stage 2 fuel</p>
                </div>

                <div id = "values">
                    <p>${data[variable].engines.type} ${data[variable].engines.version}</p>
                    <p>${data[variable].engines.engine_loss_max}</p>
                    <p>${data[variable].engines.layout}</p>
                    <p>${data[variable].engines.number}</p>
                    <p>${data[variable].engines.propellant_1}</p>
                    <p>${data[variable].engines.propellant_2}</p>
                </div>
            </mi-leftcenter>
        
            `
            let wiki = data[variable].wikipedia

            document.getElementById('link').addEventListener('click', () => {
                window.location.href = wiki;
            })
    })
}