// for (let i = 0; i < 10; i++)  {
//     console.log(i);
// }

// console.log('whatever is next');

// for (let i = 0; i < 20; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    } 
// }

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


let a = 110;

while (a < 10) {     // checks condition first
    console.log(a);
    a++;
}


do {                 // runs, then checks condition
    console.log(a);
}  while (a < 10)


for (i in names) {
    console.log(names[i]);
}


for (i of names) {
    console.log(i);
}

for (name of names) {
    console.log(name);
}