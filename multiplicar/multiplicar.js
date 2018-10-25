const fs = require('fs');



let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`el valor introducido ${base } no es un numero`);
            return ;
        }

        let data = '';

        for (let index = 1; index <= 10; index++) {
            data += `${base}  *  ${index}  =  ${base * index}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);

            }
        });
    });
}


module.exports = {
    crearArchivo
}


