






class companyName extends HTMLElement{
    constructor(){
        super();
fetch(`https://api.spacexdata.com/v4/company`)
    .then(res => res.json())
    .then(data => {
        
                this.innerHTML = `
        
                <div id="header__title" class="header__title">
                    <div class="load">${data.name}</div>
                </div>`
   
        });

    }
}
customElements.define("mi-header", companyName)


class founder extends HTMLElement{
    constructor(){
        super();
        fetch(`https://api.spacexdata.com/v4/company`)
    .then(res => res.json())
    .then(data => {

        this.innerHTML = 
        `
        <div id="description__item" class="description__item">
                
                <div class="load"><p>FOUNDER</p>${data.founder}</div>
                <div class="load"><p>FOUNDED</p>${data.founded}</div>
                <div class="load"><p>employees</p>${data.employees}</div>
                <div class="load"><p>vehicles</p>${data.vehicles}</div>
                <div class="load"><p>launch sites</p>${data.launch_sites}</div>
                <div class="load"><p>test sites</p>${data.launch_sites}</div>
            </div>
            <div class="description__buttom">
                <!-- <a href="#">a</a>
                <a href="#">b</a> -->
            </div>
        `

    })
        
    }

}
customElements.define("mi-nav", founder)




class ceo extends HTMLElement{
    constructor(){
        super();
fetch(`https://api.spacexdata.com/v4/company`)
    .then(res => res.json())
    .then(data => {

        this.innerHTML = 
        `
        <div id="information__2" class="information__item">
                <div class="load"><p>ceo</p>${data.ceo}</div>
                <div class="load"><p>cto</p>${data.cto}</div>
                <div class="load"><p>coo</p>${data.coo}</div>
                <div class="load"><p>cto propulsor</p>${data.cto_propulsion}</div>
                <div class="load"><p>valuation</p>${data.valuation}</div>
                <div class="load summary"><p>summary</p>${data.summary}</div>
            </div>
            <div id="paginacion" class="information__buttom"></div>
        `


    })

       
    }
}

customElements.define("mi-nav2", ceo)



/*class centro extends HTMLElement{
    constructor(){
        super();
fetch(`https://api.spacexdata.com/v4/company`)
    .then(res => res.json())
    .then(data => {


    this.innerHTML = 
    `

    `

    }
}*/
        