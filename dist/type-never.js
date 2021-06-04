function handleError(code, message) {
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'Not Found');
}
catch (Error) {
    console.log('E: ', Error);
}
function sumNumbers(limit) {
    let sum = 0;
    while (true) {
        sum++;
    }
}
