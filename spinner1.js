let time = 100;
for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    process.stdout.write("\r|  ");
  }, (time += 200));
  setTimeout(() => {
    process.stdout.write("\r/   ");
  }, (time += 200));

  setTimeout(() => {
    process.stdout.write("\r-   ");
  }, (time += 200));

  setTimeout(() => {
    process.stdout.write("\r\\   ");
  }, (time += 200));
  setTimeout(() => {
    process.stdout.write("\r|  ");
  }, (time += 200));
  if (i === 1) {
    setTimeout(() => {
      process.stdout.write("\n");
    }, (time += 200));
  }
}
