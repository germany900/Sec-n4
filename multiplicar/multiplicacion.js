const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('=============================='.green);
    console.log(`======= Table del ${base} =======`.red);
    console.log('=============================='.yellow);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }
}



let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido '${ base }' no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido '${ limite }' no es un numero`);
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(colors.green(`tabla-${base}-al-${limite}.txt`))
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}