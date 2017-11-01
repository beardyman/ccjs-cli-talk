



// when piping to another cmd this handles truncated output
process.stdout.on('error', function(err) {
  if (err.code === 'EPIPE') {
    process.exit(0);
  }
});



console.log('hi');
console.log('hello');
console.log('this is cool');