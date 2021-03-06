const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicacion');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('Comando no reconozido...');
}


// let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]


// console.log(argv2);


// console.log(process.argv);