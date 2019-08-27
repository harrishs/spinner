let time = 100;
let array = ["| ", "/", "-", "\\"];
for (let i = 0; i <= array.length * 2; i++) {
  setTimeout(() => {
    process.stdout.write(`\r ${array[i % array.length]}`);
  }, (time += 200));
  if (i === array.length * 2) {
    setTimeout(() => console.log("\n"), (time += 200));
  }
}
