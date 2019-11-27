function smaller(num){
    return num < this;
}

function filterArr(x, listNum){
    return listNum.filter(smaller, x);
}

let numb = [9,6,8,5,4,3];

console.log(filterArr(5, numb));

// ===================

let people = [
    {name: "budi", age: 21},
    {name: "tugi", age: 24},
    {name: "sari", age: 19},
];

const oldThan21 = x => x.age > 21;
const over = y => y.filter(oldThan21);
console.log(over(people));

// ====================

let peopleSentences = [];

for(var i = 0; i < people.length; i++){
    var sentence = people[i].name + " berumur " + people[i].age + " tahun";
    peopleSentences.push(sentence);
}

console.log(peopleSentences);

// =====================

const makeSentence = x => x.name +' berumur '+x.age+ ' tahun';
const peopleSent = y => y.map(makeSentence);

console.log(peopleSent(people));

// =====================

let nomor = [-2,-1,0,1,2,3];

const abs = x => x.map(Math.abs);

console.log(abs(nomor));

// ======================

let orders = [
    {nama: "produk 1", jumlah: 10},
    {nama: "produk 1", jumlah: 60},
    {nama: "produk 1", jumlah: 30},
    {nama: "produk 1", jumlah: 40}
];

let total = 0;

for(var i = 0; i < orders.length; i++){
    total = total + orders[i].jumlah;
}

console.log(total);