let characterName = document.querySelector('.character-name-js');
let characterClass = document.querySelector('.character-class-js')


let name = prompt("Kérlek add meg a karaktered nevét");
characterName.innerHTML= `${name}`;


let choiceClass = prompt("Harcos, Mágus vagy Tolvaj szeretnél lenni?");
characterClass.innerHTML = `${choiceClass}`
while (characterClass =  true){
    

    if(choiceClass === "Harcos"){
        characterClass.innerHTML = `${choiceClass}`
        break;
    }else if(choiceClass === "Mágus"){
        characterClass.innerHTML = `${choiceClass}`
        break;
    }else if(choiceClass === "Tolvaj"){
        characterClass.innerHTML = `${choiceClass}`
        break;
    }else{
        choiceClass = prompt(`Sajna a(z) ${choiceClass} nem választható osztály :(! \nProbáld meg újra! \nHarcos, Mágus vagy Tolvaj szeretnél lenni?`);
    }
}




function generateCharacter() {
    return {
        name: "Tav",
        class: "Harcos",
        stats: {
            strength: rollStat(),
            dexterity: rollStat(),
            constitution: rollStat(),
            intelligence: rollStat(),
            wisdom: rollStat(),
            charisma: rollStat()
        },
        hp: 100,
        mana: 100
    };
}

function rollStat() {
    return Math.floor(Math.random() * 6) + 10; // Dob egy értéket 10 és 15 között
}

const character = generateCharacter();
console.log(character);



const hpSlider = document.getElementById('hp');
const manaSlider = document.getElementById('mana');

hpSlider.addEventListener('input', () => {
    const value = hpSlider.value;
    hpSlider.style.background = `linear-gradient(to right, red 0%, red ${value}%, #ddd ${value}%, #ddd 100%)`;
});

manaSlider.addEventListener('input', () => {
    const value = manaSlider.value;
    manaSlider.style.background = `linear-gradient(to right, blue 0%, blue ${value}%, #ddd ${value}%, #ddd 100%)`;
});
