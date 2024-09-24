document.addEventListener("DOMContentLoaded", () =>{
    let variable = 0
    todo(variable)
    

})

document.getElementById("uno").addEventListener("click", () => {
    let variable = 0
    todo(variable)
    console.log("jesus " + variable);
    
    })







document.getElementById("dos").addEventListener("click", () => {
let variable = 0
variable =  1
todo(variable)
console.log("jesus " + variable);


})

document.getElementById("tres").addEventListener("click", () => {

let variable = 0
variable =  2

todo(variable)
console.log(variable);

})

document.getElementById("cuatro").addEventListener("click", () => {

    let variable = 0
variable =  3

todo(variable)
console.log(variable);

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
                    <div class="load">${data[variable].serial}</div>
                </div>
                </mi-header>


                <main class="main">
        <nav class="nav__description">
            <div id="description__item" class="description__item">
                <div class="load">${data[variable].type}</div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load">${data[variable].reuse_count}</div>
            </div>
            <div class="description__buttom">
                <!-- <a href="#">a</a>
                <a href="#">b</a> -->
            </div>
        </nav>
        <section class="main__section">

                    <mi-top>
                        <article id="section__information__1" class="section__information__1">
                            <div class="load" style="height: 150px;">${data[variable].status}</div>
                        </article>
                    </mi-top>

            <article class="section__information__container">
                <div class="section__information__2">
                    <div>
                        <div class="load" style="height: 150px;"></div>
                    </div>
                    <div id="information__table__1" class="information__table__1">
                        <div class="load" style="height: 160px;"></div>
                    </div>
                </div>
                <div id="section__image" class="section__image">
                    <div class="load" style="height: 350px">${data[variable].last_update}</div>
                </div>
                <div class="section__information__3">
                    <div>
                        <div class="load" style="height: 150px;"></div>
                    </div>
                    <div id="information__table__2" class="information__table__2">
                        <div class="load" style="height: 160px;"></div>
                    </div>
                </div>
            </article>
            <footer class="footer">
                <ul>
                    <li id="rocket">
                        <a  href="#">
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
                        <a  href="#">
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
            <div id="information__2" class="information__item">
                <div class="load">${data[variable].water_landings}</div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load"></div>
                <div class="load">${data[variable].land_landings}</div>
            </div>
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




    



