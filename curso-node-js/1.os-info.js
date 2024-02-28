const os = require('node:os')

function cpus() {
    // [] is a bugfix for a regression introduced in 51cea61
    const data = os.cpus() || [];
    const result = [];
    let i = 0;
    while (i < data.length) {
      ArrayPrototypePush(result, {
        model: data[i++],
        speed: data[i++],
        times: {
          user: data[i++],
          nice: data[i++],
          sys: data[i++],
          idle: data[i++],
          irq: data[i++],
        },
      });
    }
    return result;
  }

console.log('Informaicon del sistema operativo')
console.log('_________________________________')
console.log('Nombre del host: ' + os.hostname)
console.log('Nombre del sistema: ' + os.platform)
console.log('Version sistema: ' + os.release)
console.log('Arquitectura: ' + os.arch)
console.log('Cpus :' + os.cpus())