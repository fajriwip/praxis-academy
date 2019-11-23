let meetups = [
    {name: 'JS', isActive: true, members: 930},
    {name: 'Angular', isActive: true, members: 300},
    {name: 'Node', isActive: false, members: 800}
];

let m;
for (let i = 0; i < meetups.length; i++) {
    if(meetups[i].name == 'Angular'){
        m = meetups[i];
    }
}
console.log(m);

let n;
n = meetups.find((x) => {
    return x.name == 'Node';
});
console.log(n);