import { fork } from 'node:child_process'
import { fileURLToPath } from 'url';
import {dirname} from 'path'

const args = process.argv.slice(2)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const spawnChildProcess = async (args) => {
    const file_path = __dirname + '/files/script.js'
    fork(file_path, args)
};

spawnChildProcess(args);

