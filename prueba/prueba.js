let boton = document.getElementById('uno', 'dos', 'tres', 'cuatro')
let tops = document.getElementById('topbar')
let right = document.getElementById('rightbar')
let left = document.getElementById('leftbar')
let center = document.getElementById('centerbar')
let supcenter = document.getElementById('supcenter')
let rightcenter = document.getElementById('rightcenterbar')
let leftcenter = document.getElementById('leftcenterbar')
    
boton.addEventListener('click', () => {
    boton.style.backgroundColor = '#14162C'
    right.style.background = 'transparent'
    tops.style.background = 'transparent'
    left.style.background = 'transparent'
    center.style.background = 'transparent'
    supcenter.style.background = 'transparent'
    rightcenter.style.background = 'transparent'
    leftcenter.style.background = 'transparent'
})

class rocket1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            // document.getElementById('first').style.display = `block`;
            // document.getElementById('second').style.display = `none`;
            // document.getElementById('third').style.display = `none`;
            // document.getElementById('fourth').style.display = `none`;

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML = `

                        <div>${data[0].name}</div>

                    `
                });
        });
    };
}

customElements.define('mi-top', rocket1)


class barraderecha1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML = `
        

                        <img id= "icono1" src="../storage/img/icons/mech.svg" alt="">
                        <p id = "country">${data[0].country}</p><br>
                        <p id = "descripcion">${data[0].description}</p><br>
                        <img id= "icono2" src="../storage/img/icons/mech.svg" alt="">
                        <p id = "tittledes"> The estimated cost per rocket launch</p><br>
                        <p id = "costo">$ ${data[0].cost_per_launch}</p><br>
                        <img id= "icono3" src="../storage/img/icons/mech.svg" alt="">
                        <p id = "tittlecost"> The date of the first flight of the rocket</p>
                        <p id = "fly">${data[0].first_flight}</p><br>
                        <img id= "icono4" src="../storage/img/icons/mech.svg" alt="">
                        <p id = "tittlelink"> Read more about the coete</p><br>
                        <a id = "link" href = "https://en.wikipedia.org/wiki/Falcon_1">Wikipedia</a>

                    `
                });

        })
    }
}

customElements.define('mi-right', barraderecha1)

class barraizquierda1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML = `

                        <div id = "barras">
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="1420788" value="${data[0].mass.kg}"></progress>
                            </div>
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="150000" value="${data[0].payload_weights[0].kg}"></progress>
                            </div>
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="118" value="${data[0].height.meters}"></progress>
                            </div>
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="12.2" value="${data[0].diameter.meters}"></progress>
                            </div>
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="5.2" value="${data[0].second_stage.payloads.composite_fairing.diameter.meters}"></progress>
                            </div>
                            <div>
                                <label for="">Rocket weight :</label><br>
                                <progress max="13.1" value="${data[0].second_stage.payloads.composite_fairing.height.meters}"></progress>
                            </div>
                        </div>

                        <div id = "valores">
                            <div>
                                ${data[0].mass.kg} kg<br>
                                ${data[0].mass.lb} lb<br>
                            </div>
                            <div>
                                ${data[0].payload_weights[0].kg} kg<br>
                                ${data[0].payload_weights[0].lb} lb<br>
                            </div>
                            <div>
                                ${data[0].height.meters} M<br>
                                ${data[0].height.feet} F<br>
                            </div>
                            <div>
                                ${data[0].diameter.meters} M<br>
                                ${data[0].diameter.feet} F<br>
                            </div>
                            <div>
                                ${data[0].second_stage.payloads.composite_fairing.diameter.meters} M<br>
                                ${data[0].second_stage.payloads.composite_fairing.diameter.feet} F<br>
                            </div>
                            <div>
                                ${data[0].second_stage.payloads.composite_fairing.height.meters} M<br>
                                ${data[0].second_stage.payloads.composite_fairing.height.feet} F
                            </div>
                        </div>


                    `
                });

        })
    }
}

customElements.define('mi-left', barraizquierda1)

class barracentral1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = `

                    <img src = "${data[0].flickr_images[0]}">
                    <img src = "${data[0].flickr_images[1]}">

                    `
                });

        });
    };
};

customElements.define('mi-center', barracentral1);

class barrasupcentral1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            this.innerHTML = `
                <div class="item__progress__bar" style= "background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) 23.59550561797753%, transparent 0);"><div class="progress__value"><strong>Atmospheric acceleration</strong><br><small>23.60 %</small><br><small>420 kN <br> 94.000 Lbf</small></div></div>
                <div class="item__progress__bar" style="background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) 24.489795918367346%, transparent 0);"><div class="progress__value"><strong>Speed in space</strong><br><small>24.49 %</small><br><small>480 kN <br> 110.000 Lbf</small></div></div>
            `
        })
    }
}

customElements.define('mi-supcenter', barrasupcentral1)

class barrasrightcentral1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = `
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
                        <p>${data[0].type}</p>
                        <p>${data[0].active}</p>
                        <p>${data[0].stages}</p>
                        <p>2</p>
                        <p>${data[0].landing_legs.number}</p>
                        <p>${data[0].landing_legs.material}</p>
                    </div>

                    `
                })
        })
    }
}

customElements.define('mi-rightcenter', barrasrightcentral1)

class barrasleftcentral1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = `
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
                            <p>${data[0].engines.type} ${data[0].engines.version}</p>
                            <p>${data[0].engines.engine_loss_max}</p>
                            <p>${data[0].engines.layout}</p>
                            <p>${data[0].engines.number}</p>
                            <p>${data[0].engines.propellant_1}</p>
                            <p>${data[0].engines.propellant_2}</p>
                        </div>
                    `
                })
        })
    }
}

customElements.define('mi-leftcenter', barrasleftcentral1)

// class rocket2 extends HTMLElement {
//     constructor() {
//         super();

//         document.getElementById('dos').addEventListener('click', () => {

//             document.getElementById('second').style.display = `block`;
//             document.getElementById('first').style.display = `none`;
//             document.getElementById('third').style.display = `none`;
//             document.getElementById('fourth').style.display = `none`;

//             fetch('https://api.spacexdata.com/v4/rockets')
//                 .then(res => res.json())
//                 .then(data => {


//                     this.innerHTML = `
//                     <div id="header__title" class="header__title">
//                         <div id="load">${data[1].name}</div>
//                     </div>
//                     `

//                 });
//         });

//     };
// }

// customElements.define('mi-second', rocket2)

// class rocket3 extends HTMLElement {
//     constructor() {
//         super();

//         document.getElementById('tres').addEventListener('click', () => {

//             document.getElementById('third').style.display = `block`;
//             document.getElementById('first').style.display = `none`;
//             document.getElementById('second').style.display = `none`;
//             document.getElementById('fourth').style.display = `none`;

//             fetch('https://api.spacexdata.com/v4/rockets')
//                 .then(res => res.json())
//                 .then(data => {

//                     this.innerHTML = ""
//                     this.innerHTML += `
//                 <div id="header__title" class="header__title">
//                     <div id="load">${data[2].name}</div>
//                 </div>
//             `

//                 });
//         });
//     }
// }

// customElements.define('mi-third', rocket3)


// class rocket4 extends HTMLElement {
//     constructor() {
//         super();

//         document.getElementById('cuatro').addEventListener('click', () => {

//             document.getElementById('fourth').style.display = `block`;
//             document.getElementById('first').style.display = `none`;
//             document.getElementById('second').style.display = `none`;
//             document.getElementById('third').style.display = `none`;

//             fetch('https://api.spacexdata.com/v4/rockets')
//                 .then(res => res.json())
//                 .then(data => {

//                     this.innerHTML = ""
//                     this.innerHTML += `
//                 <div id="header__title" class="header__title">
//                     <div id="load">${data[3].name}</div>
//                 </div>
//             `

//                 });
//         });
//     }
// }

// customElements.define('mi-fourth', rocket4)

