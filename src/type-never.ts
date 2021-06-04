// Type never
// nUnca retorna un valor sino que propaga un error
// Representa funciones que lanzan excepciones o nunca retornan un valor.

function handleError ( code : number, message: string) : never {
  // Process your code here
  // Generate a message
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (Error) {
  console.log('E: ', Error);
}


function sumNumbers ( limit : number) : never {
  let sum = 0;
  while(true) {
    sum ++;
  }
  // return sum:
}

// sumNumbers(10);
