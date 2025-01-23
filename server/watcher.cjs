const {spawn} = require('child_process');
const chokidar = require('chokidar');

let serverProcess = null;

const restartServer = () => {
    if (serverProcess) {
        serverProcess.kill(); // Mata el proceso actual
    }

    // Inicia un nuevo proceso para el servidor
    serverProcess = spawn('node', ['server'], {stdio: 'inherit'});

    serverProcess.on('exit', (code) => {
        console.log(`Se detuvo el server`);
    });
};

// Observa cambios en los archivos del servidor
chokidar.watch(['./server.js', "./server"], {ignoreInitial: true}).on('all', () => {
    console.log('Cambios detectados, reiniciando el server...');
    restartServer();
});

// Inicia el servidor por primera vez
restartServer();
