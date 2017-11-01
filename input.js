#!/usr/bin/env node

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`\n\n\n\n\ndata: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('end');
});