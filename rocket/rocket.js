class rocket1 extends HTMLElement {
    constructor(){
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
                        <div id="load">${data[0].name}</div>
                    </div>
                `
            });
        });
    };
}

customElements.define('mi-header', rocket1)


class barraderecha1 extends HTMLElement {
    constructor(){
        super();

        document.getElementById('uno').addEventListener('click', () => {
            
        })
    }
}
    


class rocket2 extends HTMLElement {
    constructor(){
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
    constructor(){
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
    constructor(){
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