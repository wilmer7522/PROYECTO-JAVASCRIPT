class rocket1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            document.getElementById('first').style.display = `block`;
            document.getElementById('second').style.display = `none`;
            document.getElementById('third').style.display = `none`;
            document.getElementById('fourth').style.display = `none`;

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML = `
                    <div id="header__title" class="header__title">
                        <div>${data[0].name}</div>
                    </div>
                `
                });
        });
    };
}

customElements.define('mi-header', rocket1)


class barraderecha1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML = `
                    <div id="description__item" class="description__item">
                        <div class="load">
                            <img id= "icono" src="../storage/img/icons/mech.svg" alt="">
                            <p id = "country">${data[0].country}</p><br>
                            <p id = "descripcion">${data[0].description}</p><br>
                            <p id = "tittledes"> The estimated cost per rocket launch</p><br>
                            <p id = "costo">${data[0].cost_per_launch}</p><br>
                            <p id = "tittlecost"> The date of the first flight of the rocket</p>
                            <p id = "fly">${data[0].first_flight}</p><br>
                            <p id = "tittlelink"> Read more about the coete</p><br>
                            <a id = "link" href = "https://en.wikipedia.org/wiki/Falcon_1">Wikipedia</a>
                        </div>
                        
                    </div>
                `
                });

        })
    }
}

customElements.define('mi-nav', barraderecha1)

class barracentral1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    data.forEach(foto => {
                        this.innerHTML = `
                    
                        <div id="section__image" class="section__image">
                            <div class="load" style="height: 350px">
                                <div id="imagen">
                                    <img src = "${foto.flickr_images[0]}">
                                    <img src = "${foto.flickr_images[1]}">
                                    <img src = "${foto.flickr_images[2]}">
                                    <img src = "${foto.flickr_images[3]}">
                                </div>
                            </div>
                        </div>

                    `
                    });

                        
                
                    
                });

        })
    }
}

customElements.define('mi-div', barracentral1)

class barracentralderecha1 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('uno').addEventListener('click', () => {

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = `
                        <mi-caja id="information__table__1" class="information__table__1">
                            <div class="load" style="height: 160px;">
                                Type: ${data[0].type}<br>
                                Active: ${data[0].active}<br>
                                Stages: ${data[0].stages}
                            </div>
                        </mi-caja>
                    `
                });

        })
    }
}

customElements.define('mi-caja', barracentralderecha1)

class rocket2 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('dos').addEventListener('click', () => {

            document.getElementById('second').style.display = `block`;
            document.getElementById('first').style.display = `none`;
            document.getElementById('third').style.display = `none`;
            document.getElementById('fourth').style.display = `none`;

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {


                    this.innerHTML = `
                <div id="header__title" class="header__title">
                    <div id="load">${data[1].name}</div>
                </div>
            `

                });
        });

    };
}

customElements.define('mi-second', rocket2)

class rocket3 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('tres').addEventListener('click', () => {

            document.getElementById('third').style.display = `block`;
            document.getElementById('first').style.display = `none`;
            document.getElementById('second').style.display = `none`;
            document.getElementById('fourth').style.display = `none`;

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML += `
                <div id="header__title" class="header__title">
                    <div id="load">${data[2].name}</div>
                </div>
            `

                });
        });
    }
}

customElements.define('mi-third', rocket3)


class rocket4 extends HTMLElement {
    constructor() {
        super();

        document.getElementById('cuatro').addEventListener('click', () => {

            document.getElementById('fourth').style.display = `block`;
            document.getElementById('first').style.display = `none`;
            document.getElementById('second').style.display = `none`;
            document.getElementById('third').style.display = `none`;

            fetch('https://api.spacexdata.com/v4/rockets')
                .then(res => res.json())
                .then(data => {

                    this.innerHTML = ""
                    this.innerHTML += `
                <div id="header__title" class="header__title">
                    <div id="load">${data[3].name}</div>
                </div>
            `

                });
        });
    }
}

customElements.define('mi-fourth', rocket4)