const path = require('path');  // usamos para o projeto rodar em qualquer SO
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //__dirname é uma constante definida pelo node para dizermos os diretorio aue iremos usar
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];

