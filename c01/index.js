console.time('label');
console.log('Zdravo svetu!');

console.error('Greshka!')

let obj = {ime: 'Pero', prezime: 'Perovski'};
console.dir(obj);

let tbl = [
    {ime: 'Pero', prezime: 'Perovski'},
    {ime: 'Pero', prezime: 'Perovski'},
    {ime: 'Pero', prezime: 'Perovski'},
    {ime: 'Pero', prezime: 'Perovski'},
    {ime: 'Pero', prezime: 'Perovski'}
]
console.table(tbl);
console.timeEnd('label');

console.log("Zdravo \nzdravo");
console.log('Zdravo \nzdravo');
console.log(`Zdravo \nzdravo`);


let ime = 'Bojan'; // prost tip - pass by value
let godini = 38;  // prost tip - pass by value
let programer = true; // prost tip - pass by value

let lokacija = {grad: 'Skopje', drzava: 'Makedonija'}; // slozen tip - pass by reference

function change(ime, godini, programer, lokacija) {
    ime = 'Vancho';
    godini = 40;
    programer = false;

    lokacija.grad = 'Bitola';
}
change(ime, godini, programer, lokacija);

console.log(ime);
console.log(godini);
console.log(programer);
console.log(lokacija);

function sampleFn(param) {
    console.log('Funkcija 1');
};

const sampleFn2 = function() {
    console.log('Funkcija 2');
};

const sampleFatFn = () => {
    console.log('Funkcija 3!!!');
};