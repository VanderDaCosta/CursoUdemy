function some(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Cabaço, você não passou um numero, como tu quer somar um numero com uma letra?');
    }

    return x + y;
}

try {
    console.log(some(8, 2));
    console.log(some(8, 'a'));
} catch (err) {
    console.log('Proibidopara o usuario');
}
