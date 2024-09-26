let bloque1 = document.getElementById("bloque1")
let bloque2 = document.getElementById("bloque2")
let bloque3 = document.getElementById("bloque3")
let bloque4 = document.getElementById("bloque4")
let bloque5 = document.getElementById("bloque5")

let num = 1



document.addEventListener("DOMContentLoaded", () =>{
    let variable = 0
    todo(variable)
})
//contador de bloques
let bloques = 1;

document.getElementById("flecha2").addEventListener("click", () => {
    document.getElementById(`bloque${bloques}`).style.display = 'none';
    bloques += 1
    if (bloques > 5){ 
        bloques = 1};
    document.getElementById(`bloque${bloques}`).style.display = 'block';

    

})

document.getElementById("flecha1").addEventListener("click", ()=> {
    document.getElementById(`bloque${bloques}`).style.display = 'none';
    bloques -= 1
    if (bloques < 1){
        bloques = 5};
    document.getElementById(`bloque${bloques}`).style.display = 'block';
    
})

//botones con numeros
document.getElementById("uno").addEventListener("click", () => {
    let variable = 0
    todo(variable)
    })
document.getElementById("dos").addEventListener("click", () => {
let variable = 0
variable =  1
todo(variable)
})
document.getElementById("tres").addEventListener("click", () => {
let variable = 0
variable =  2
todo(variable)
})
document.getElementById("cuatro").addEventListener("click", () => {
let variable = 0
variable =  3
todo(variable)
})
document.getElementById("cinco").addEventListener("click", () => {
    let variable = 0
    variable =  4
    todo(variable)
})
document.getElementById("seis").addEventListener("click", () => {
    let variable = 0
    variable =  5
    todo(variable)
})
document.getElementById("siete").addEventListener("click", () => {
    let variable = 0
    variable =  6
    todo(variable)
})
document.getElementById("ocho").addEventListener("click", () => {
    let variable = 0
    variable =  7
    todo(variable)
})
document.getElementById("nueve").addEventListener("click", () => {
    let variable = 0
    variable =  8
    todo(variable)
})
document.getElementById("diez").addEventListener("click", () => {
    let variable = 0
    variable =  9
    todo(variable)
})
document.getElementById("once").addEventListener("click", () => {
    let variable = 0
    variable =  10
    todo(variable)
})
document.getElementById("doce").addEventListener("click", () => {
    let variable = 0
    variable =  11
    todo(variable)
})
document.getElementById("trece").addEventListener("click", () => {
    let variable = 0
    variable =  12
    todo(variable)
})
document.getElementById("catorce").addEventListener("click", () => {
    let variable = 0
    variable =  13
    todo(variable)
})
document.getElementById("quince").addEventListener("click", () => {
    let variable = 0
    variable =  14
    todo(variable)
})
document.getElementById("dieciseis").addEventListener("click", () => {
    let variable = 0
    variable =  15
    todo(variable)
})
document.getElementById("diecisiete").addEventListener("click", () => {
    let variable = 0
    variable =  16
    todo(variable)
})
document.getElementById("dieciocho").addEventListener("click", () => {
    let variable = 0
    variable =  17
    todo(variable)
})
document.getElementById("diecinueve").addEventListener("click", () => {
    let variable = 0
    variable =  18
    todo(variable)
})
document.getElementById("veinte").addEventListener("click", () => {
    let variable = 0
    variable =  19
    todo(variable)
})
document.getElementById("ventiuno").addEventListener("click", () => {
    let variable = 0
    variable =  20
    todo(variable)
})
document.getElementById("ventidos").addEventListener("click", () => {
    let variable = 0
    variable =  21
    todo(variable)
})
document.getElementById("ventitres").addEventListener("click", () => {
    let variable = 0
    variable =  22
    todo(variable)
})
document.getElementById("venticuatro").addEventListener("click", () => {
    let variable = 0
    variable =  23
    todo(variable)
})
document.getElementById("venticinco").addEventListener("click", () => {
    let variable = 0
    variable =  24
    todo(variable)
})

let miheader = document.querySelector(".header")



function todo(variable) {
        
    fetch(`https://api.spacexdata.com/v4/capsules`)
        .then(res => res.json())
        .then(data => {
            console.log("ayuda " + variable);
                
                miheader.innerHTML = 
                `
                <mi-header class="header">
                    <div id="header__title" class="header__title">
                        <div class="load serial"><p>Serial: </p>${data[variable].serial}</div>
                    </div>
                </mi-header>


                <main class="main">
        <nav class="nav__description">
            
            <div class="description__buttom">
                
            </div>
        </nav>
        <section class="main__section">

                    <mi-top>
                        <article id="section__information__1" class="section__information__1">
                            <div class="load" style="height: 150px;"><p>Last Update: </p> ${data[variable].last_update} <p>Status: </p>${data[variable].status}</div>
                        </article>
                    </mi-top>

            <article class="section__information__container">
                <div class="section__information__2">
                    <div>
                        <div class="load water" style="height: 150px;"><p>Water Landings: </p>${data[variable].water_landings}</div>
                    </div>
                    <div id="information__table__1" class="information__table__1">
                        <div class="load type" style="height: 160px;"><p>Type: </p>${data[variable].type}</div>
                    </div>
                </div>
                <div id="section__image" class="section__image">
                    <div class="load" style="height: 350px"><marquee behavior="" direction="" scrollamount="15"  ><video src="./" autoplay muted loop></video></marquee></div>
                </div>
                <div class="section__information__3">
                    <div>
                        <div class="load" style="height: 150px;"><p>Reuse Count: </p>${data[variable].reuse_count}</div>
                    </div>
                    <div id="information__table__2" class="information__table__2">
                        <div class="load" style="height: 160px;"><p>Land Landings: </p>${data[variable].land_landings}</div>
                    </div>
                </div>
            </article>
            <footer class="footer">
                <ul>
                    <li id="rocket">
                        <a  href="./Rocket/Rocket.html">
                            <img src="storage/img/icons/rocket.svg">
                            <span>Rockets</span>
                        </a>
                    </li>
                    <li id="capsules">
                        <a class="select" href="capsules.html">
                            <img src="storage/img/icons/capsule.svg">
                            <span>Capsules</span>
                        </a>
                    </li>
                    <li id="history">
                        <a  href="./History/History.html">
                            <img src="storage/img/icons/history.svg">
                            <span>History</span>
                        </a>
                    </li>
                    <li id="company">
                        <a href="company.html">
                            <img src="storage/img/icons/company.svg">
                            <span>Company</span>
                        </a>
                    </li>
                </ul>
            </footer>
        </section>
        <nav class="nav__information">
            
            <div id="paginacion" class="information__buttom"></div>
        </nav>
                
                `

                
            })
        }

    
    
    
    
   /* class serial extends HTMLElement{
        constructor(){
            super();

    fetch(`https://api.spacexdata.com/v4/capsules`)
            .then(res => res.json())
            .then(data => {
                this.innerHTML = "";
    
                this.innerHTML = 
                `
                    <article id="section__information__1" class="section__information__1">
                        <div class="load" style="height: 150px;">${data[variable].serial}</div>
                    </article>
                `
    
            })
        }
    }
    customElements.define("mi-top",serial)

    
}*/




    



