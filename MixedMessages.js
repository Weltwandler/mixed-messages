const names = ['Aerron', 'Rosalya', 'Maikhal', 'Daneel', 'Juuleea'];
const profs = ['stable boy', 'cook', 'butcher', 'camp follower', 'innkeeper'];
const houses = ['Baratheon', 'Lannister', 'Stark', 'Targaryen', 'Tyrell', 'Martell'];

let pickRandom = function(arr) {
    const num = Math.floor(Math.random() * arr.length);
    const out = arr[num];
    return out;
};

console.log(`Welcome! You are ${pickRandom(names)}, a ${pickRandom(profs)} in the employ of House ${pickRandom(houses)}.`);