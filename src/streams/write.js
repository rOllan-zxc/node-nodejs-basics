import {createWriteStream} from 'fs'
import {fileURLToPath} from "url"
import {dirname} from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const write = async () => {
    const file_path = __dirname + '/files/fileToWrite.txt'
    const stream = createWriteStream(file_path, {encoding: 'utf-8'})
    process.stdin.on("data", (data) => stream.write(data))
};

await write();