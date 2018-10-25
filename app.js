const argv = require('yargs')
                .command('listar','Imprime en consola la tabla de multipicar ', {
                  base:{
                    demand:true,
                    alias:'b'
                  },
                  limite:{
                    alias: 'l',
                    default:10
                  }
                })
                .help()
                .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
//const fs = require('fs');
//const fs = require('fs');



let comando =  argv._[0];



switch(comando){
  case 'listar':
    console.log('listar');
    break;
  case 'crear':
    console.log('crear');
    crearArchivo(argv.base)
      .then(archivo => console.log(`Archivo creado: ${ archivo }`))
      .catch(error =>console.log(error));
    break;
  default:
    console.log('comando no encontrado');
    
}
//let base ='12';

//console.log(process.argv);

let argv2 = process.argv;

console.log(argv.base);

console.log(argv.limite);



//let parametro = argv[2];

//let base = parametro.split('=')[1];

//console.log(base);


/*
  crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(error =>console.log(error));
    
*/