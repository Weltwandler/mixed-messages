const names = ['Aerron', 'Rosalya', 'Maikhal', 'Daneel', 'Juuleea'];
const profs = ['stable boy', 'cook', 'butcher', 'camp follower', 'innkeeper'];
const houses = ['Baratheon', 'Lannister', 'Stark', 'Targaryen', 'Tyrell', 'Martell'];

let pickRandom = function(arr) {
    const num = Math.floor(Math.random() * arr.length);
    const out = arr[num];
    return out;
};

const prof = pickRandom(profs);

let vowelAdjust;

const vowels = ['a', 'e', 'i', 'o', 'u'];

if (vowels.includes(prof[0])) {
    vowelAdjust = 'an';
} else {
    vowelAdjust = 'a';
}

console.log(`Welcome! You are ${pickRandom(names)}, ${vowelAdjust} ${prof} in the employ of House ${pickRandom(houses)}.`);