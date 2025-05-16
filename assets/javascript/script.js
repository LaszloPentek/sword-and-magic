let characterName = document.querySelector('.character-name-js');
let characterClass = document.querySelector('.character-class-js')


//let name = prompt("Kérlek add meg a karaktered nevét");
let name = "Kálmán";
characterName.innerHTML= `${name}`;


let choiceClass;

// Addig kérdezzük újra, amíg a felhasználó nem választ érvényes osztályt

//do {
//   choiceClass = prompt("Harcos, Mágus vagy Tolvaj szeretnél lenni?");
//} while (choiceClass !== "Harcos" && choiceClass !== "Mágus" && choiceClass !== "Tolvaj");
choiceClass = "Harcos"

// Beállítjuk az osztályt a HTML-ben
characterClass.innerHTML = choiceClass;




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


// tesztek




function updateStats(stats) {
    document.querySelector('.attributes').innerHTML = `
        <p><strong>Erő:</strong> ${stats.strength}</p>
        <p><strong>Ügyesség:</strong> ${stats.dexterity}</p>
        <p><strong>Állóképesség:</strong> ${stats.constitution}</p>
        <p><strong>Intelligencia:</strong> ${stats.intelligence}</p>
        <p><strong>Bölcsesség:</strong> ${stats.wisdom}</p>
        <p><strong>Karizma:</strong> ${stats.charisma}</p>
    `;
}

updateStats(character.stats);


document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const valasztott = document.querySelector('input[name="valasztas"]:checked');
    
    if (!valasztott) return alert("Válassz egy opciót!");

    const valasz = valasztott.id;

    switch(valasz) {
        case 'fegyverkovacs':
            alert("A fegyverkovács izmos, zord alak. Egy különleges pengét ajánl neked...");
            break;
        case 'varazsital':
            alert("Egy öreg alkimista különös főzeteket kínál. Egyik üveg zölden dereng.");
            break;
        case 'zeneszek':
            alert("A zene megnyugtat. +5 mana visszatöltve.");
            manaSlider.value = Math.min(100, parseInt(manaSlider.value) + 5);
            break;
    }
});

function rollDice(dice, sides) {
    let total = 0;
    for (let i = 0; i < dice; i++) {
      total += Math.floor(Math.random() * sides) + 1;
    }
    return total;
  }
  
  // Példa: 2d6
  let eredmeny = rollDice(2, 6);
  console.log("2d6 dobás:", eredmeny);







const dice = document.querySelector('.die');
dice.classList.add('rolling');

setTimeout(() => {
  const eredmeny = Math.floor(Math.random() * 20) + 1;
  console.log("Dobás eredménye:", eredmeny);
  dice.classList.remove('rolling');
  dice.setAttribute('data-face', eredmeny);
}, 3000); // ugyanannyi, mint az animation duration
