function promese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Ei sou a promese.');
            resolve();
        }, 2000);
    });
};

export default async function () {
    await promese();
    console.log('terminou!');
}