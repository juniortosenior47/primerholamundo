import { cpus as _cpus, hostname, platform, release, arch } from 'node:os';

function cpus() {
    // [] is a bugfix for a regression introduced in 51cea61
    const data = _cpus() || [];
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
console.log('Nombre del host: ' + hostname)
console.log('Nombre del sistema: ' + platform)
console.log('Version sistema: ' + release)
console.log('Arquitectura: ' + arch)
console.log('Cpus :' + _cpus())