document.addEventListener("DOMContentLoaded", function(e){
    let pokes = [4, 6, 12, 25, 40];
   
   for(let i = 0; i < pokes.length; i ++){
       let pokeNumber = pokes[i];

       let url = "https://pokeapi.co/api/v2/pokemon/"+pokeNumber;
       let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeNumber+".png";

       fetch(url)
           .then(result => result.json())
           .then(data => {
                let ability = data.abilities[0].ability.name;
                let height = data.height;
                let weight = data.weight;
                let name = data.name;

                let pepito = "";

                pepito += `			
                    <div class="table-row">		
                        <div class="table-data" >`+ name +`</div>
                        <div class="table-data" >${ability}</div>
                        <div class="table-data" >`+ height +`</div>
                        <div class="table-data" >${weight}</div>
                        <div class="table-data"><img src=${imgUrl} id="img"></div>
                    </div>
                `
                document.getElementById("id-el-que-quieres").innerHTML += pepito;
   
            })
   }

   document.getElementById("pokeFiltroBtn").onclick = function () {
        let value = document.getElementById("pokeFiltro").value;

        let pokes = [4, 6, 12, 25, 40];
        let pepita = "";
        for(let i = 0; i < pokes.length; i ++){
            let pokeNumber = pokes[i];
    
            let url = "https://pokeapi.co/api/v2/pokemon/"+pokeNumber;
            let imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokeNumber+".png";
    
            fetch(url)
                .then(result => result.json())
                .then(data => {
                    let ability = data.abilities[0].ability.name;
                    let height = data.height;
                    let weight = data.weight;
                    let name = data.name;
    
                    if(weight < value){
    
                        pepita += `			
                            <div class="table-row">		
                                <div class="table-data" >`+ name +`</div>
                                <div class="table-data" >${ability}</div>
                                <div class="table-data" >`+ height +`</div>
                                <div class="table-data" >${weight}</div>
                                <div class="table-data"><img src=${imgUrl} id="img"></div>
                            </div>
                        `

                        document.getElementById("id-el-que-quieres").innerHTML = pepita;
                    }
            })
        }

    }
});