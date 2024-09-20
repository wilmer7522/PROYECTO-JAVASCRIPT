






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



class arriba extends HTMLElement{
    constructor(){
        super();
        fetch(`https://api.spacexdata.com/v4/rockets`)
    .then(res => res.json())
    .then(data => {

        
console.log(data[0].flickr_images[1]);

            
            

            this.innerHTML = 
                `
                        
                    <article id="section__information__1" class="section__information__1">
                        <mi-div class="load" style="height: 150px;">
                            <marquee behavior="" direction="" scrollamount="20"  >

                                
                                

                                <img src="${data[1].flickr_images[0]}"/>
                                <img src="${data[1].flickr_images[1]}"/>
                                <img src="${data[1].flickr_images[2]}"/>
                                <img src="${data[1].flickr_images[3]}"/>
                                <img src="${data[1].flickr_images[4]}"/>

                                <img src="${data[2].flickr_images[0]}"/>
                                <img src="${data[2].flickr_images[1]}"/>
                                <img src="${data[2].flickr_images[2]}"/>
                                <img src="${data[2].flickr_images[3]}"/>
                                
                                <img src="${data[3].flickr_images[0]}"/>
                                <img src="${data[3].flickr_images[1]}"/>
                                <img src="${data[3].flickr_images[2]}"/>
                                <img src="${data[3].flickr_images[3]}"/>
                                <img src="${data[3].flickr_images[4]}"/>
                                
                               
                            </marquee>
                        </mi-div>
                    </article>
                            
                `

            
           

            
            
        
         
    })

    }
}
// <marquee behavior="" direction="" scrollamount="30"  ></marquee>

customElements.define("mi-top", arriba)



class centro extends HTMLElement{
    constructor(){
        super();
fetch(`https://api.spacexdata.com/v4/company`)
    .then(res => res.json())
    .then(data => {


    this.innerHTML = 
    `

    
     <div class="section__information__2">

     
                    <div>
                        <div class="load" style="height: 150px;">2</div>
                    </div>
                    <div id="information__table__1" class="information__table__1">
                        <div class="load" style="height: 160px;"><a href="${data.links.twitter}" class="twitter" >Twitter SpaceX    <img src="storage/img/icons/rocket_mini.svg"></a></div>
                    </div>
                </div>
                <div id="section__image" class="section__image">
                    <div class="load" style="height: 350px"><iframe src="${data.links.website}" width="100%" height="100%"></iframe></div>
                </div>
                <div class="section__information__3">
                    <div>
                        <div class="load" style="height: 150px;">5</div>
                    </div>
                    <div id="information__table__2" class="information__table__2">
                        <div class="load" style="height: 160px;"><a href="${data.links.elon_twitter}" class="twitter" >Elon Twitter    <img src="storage/img/icons/rocket_mini.svg"></a></div>
                    </div>
                </div>

    `
    })
    }
}

customElements.define("mi-article", centro)
        