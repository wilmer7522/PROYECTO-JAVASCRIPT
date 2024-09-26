class intro extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = `

                <div id="black"></div>
                <div id="fondito"></div>
                <div id="shadow"></div>
                <div id="shadow2"></div>
                <div id="fondo">
                    <img id="granos" src="../storage/img/Fondos/Noise.png" alt="">
                </div>
                <h2>Exploring the Future of Space</h2>
                <p id="description">At SpaceX, our mission is to revolutionize access to space to make it possible for humanity to colonize other planets.  From launching reusable rockets to creating spacecraft for interplanetary missions, we're working at the frontier of space technology.  Join us on this journey to the stars, where the future of space exploration begins today.</p>

                <img id="astronauta" src="../storage/img/Fondos/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg" alt="">
                <img id="space" src="../storage/img/Fondos/SpaceX-White-Dark-Background-Logo.wine.svg" alt="">
                
                <button id="btn" class="btn">Vive la Xperiencia</button>
                <button id="boton" class="boton"><img id="img" src="./rocket-regular-72.png" alt=""></button>

        `
    }

}

customElements.define("mi-cont", intro)

document.getElementById('btn').addEventListener('click', () => {
    window.location.href = '../Rocket/Rocket.html';
})

document.getElementById('boton').addEventListener('click', () => {
    window.location.href = '../Rocket/Rocket.html';
})