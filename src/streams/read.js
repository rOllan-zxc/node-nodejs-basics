import {createReadStream} from 'fs'
import {fileURLToPath} from "url"
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const read = async () => {
    const file_path = __dirname + '/files/fileToRead.txt'
    const stream = createReadStream(file_path, {encoding: 'utf-8'})
    stream.pipe(process.stdout)
};

await read();