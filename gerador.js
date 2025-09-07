const saida = document.querySelector("#Infos-poke")
const details = document.querySelector("#Poke-details")
const btn_saida = document.createElement("button")

for (let pokemon = 1; pokemon <= 204; pokemon++) {
    fetch(`https://pokeapi.co/api/v2/pokemon-form/${pokemon}/`)
        .then(poke => poke.json())
        .then(dados => {
            const element_click = document.createElement("div")
            const element_info = document.createElement("div")
            const img_poke = document.createElement("img")
            const p = document.createElement("p")
            const h2_name = document.createElement("h2")
            const h3_type = document.createElement("h3")
            const h3_type1 = document.createElement("h3")

            element_info.className = "element_info"

            element_click.classList.add("separe_poke")


            img_poke.classList.add("imgpoke")
            img_poke.style.backgroundImage = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png)`
            element_click.appendChild(img_poke)

            p.textContent = `N° ${pokemon}`
            element_info.appendChild(p)

            h2_name.textContent = dados.pokemon.name
            element_info.appendChild(h2_name)


            // Primeiro type

            if (dados.types[0].type.name === "grass") {
                h3_type.classList.add("type_green")
            }
            if (dados.types[0].type.name === "fire") {
                h3_type.classList.add("type_fire")
            }
            if (dados.types[0].type.name === "water") {
                h3_type.classList.add("type_water")
            }
            if (dados.types[0].type.name === "bug") {
                h3_type.classList.add("type_bug")
            }
            if (dados.types[0].type.name === "normal") {
                h3_type.classList.add("type_normal")
            }
            if (dados.types[0].type.name === "poison") {
                h3_type.className = "type_poison"
            }
            if (dados.types[0].type.name === "electric") {
                h3_type.classList.add("type_eletric")
            }
            if (dados.types[0].type.name === "ground") {
                h3_type.classList.add("type_ground")
            }
            if (dados.types[0].type.name === "fairy") {
                h3_type.classList.add("type_fairy")
            }
            if (dados.types[0].type.name === "flying") {
                h3_type.classList.add("type_flying")
            }
            if (dados.types[0].type.name === "psychic") {
                h3_type.classList.add("type_psychic")
            }
            if (dados.types[0].type.name === "dragon") {
                h3_type.classList.add("type_dragon")
            }
            if (dados.types[0].type.name === "rock") {
                h3_type.classList.add("type_rock")
            }
            if (dados.types[0].type.name === "steel") {
                h3_type.classList.add("type_steel")
            }
            if (dados.types[0].type.name === "fighting") {
                h3_type.classList.add("type_fighting")
            }
            if (dados.types[0].type.name === "ice") {
                h3_type.classList.add("type_ice")
            }
            if (dados.types[0].type.name === "ghost") {
                h3_type.classList.add("type_ghost")
            }
            if (dados.types[0].type.name === "dark") {
                h3_type.classList.add("type_dark")
            }


            if (dados.types.length > 1) {
                const element_types = document.createElement("div")
                element_types.className = "typesClass"


                // Segundo type
                if (dados.types[1].type.name === "poison") {
                    h3_type1.classList.add("type_poison")
                }
                if (dados.types[1].type.name === "grass") {
                    h3_type1.classList.add("type_green")
                }
                if (dados.types[1].type.name === "water") {
                    h3_type1.classList.add("type_water")
                }
                if (dados.types[1].type.name === "bug") {
                    h3_type1.classList.add("type_bug")
                }
                if (dados.types[1].type.name === "normal") {
                    h3_type1.classList.add("type_normal")
                }
                if (dados.types[1].type.name === "electric") {
                    h3_type1.classList.add("type_eletric")
                }
                if (dados.types[1].type.name === "ground") {
                    h3_type1.classList.add("type_ground")
                }
                if (dados.types[1].type.name === "fairy") {
                    h3_type1.classList.add("type_fairy")
                }
                if (dados.types[1].type.name === "flying") {
                    h3_type1.classList.add("type_flying")
                }
                if (dados.types[1].type.name === "psychic") {
                    h3_type1.classList.add("type_psychic")
                }
                if (dados.types[1].type.name === "dragon") {
                    h3_type1.classList.add("type_dragon")
                }
                if (dados.types[1].type.name === "rock") {
                    h3_type1.classList.add("type_rock")
                }
                if (dados.types[1].type.name === "steel") {
                    h3_type1.classList.add("type_steel")
                }
                if (dados.types[1].type.name === "fighting") {
                    h3_type1.classList.add("type_fighting")
                }
                if (dados.types[1].type.name === "ice") {
                    h3_type1.classList.add("type_ice")
                }
                if (dados.types[1].type.name === "ghost") {
                    h3_type1.classList.add("type_ghost")
                }
                if (dados.types[1].type.name === "dark") {
                    h3_type1.classList.add("type_dark")
                }

                h3_type.textContent = dados.types[0].type.name
                h3_type1.textContent = dados.types[1].type.name
                element_types.appendChild(h3_type)
                element_types.appendChild(h3_type1)
                element_info.appendChild(element_types)

            } else {
                h3_type.textContent = dados.types[0].type.name
                element_info.appendChild(h3_type)
            }

            element_click.appendChild(element_info)
            saida.appendChild(element_click)
        })
}