var args = process.argv;
console.log(args[2]);
console.log('A');
console.log('B');
if(args[2] == 0) {
    console.log('C1');
} else {
    console.log('C2');
}
console.log('D');