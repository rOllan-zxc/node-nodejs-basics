import {fileURLToPath} from "url"
import {dirname} from 'path'
import {createGunzip, createGzip} from 'zlib'
import {createReadStream, createWriteStream} from "fs";
import {pipeline} from "stream";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const decompress = async () => {
    const file_to_write = __dirname + '/files/fileToCompress.txt'
    const file_to_read = __dirname + '/files/archive.gz'

    const gzip = createGunzip();
    const inp = createReadStream(file_to_read)
    const out = createWriteStream(file_to_write)
    pipeline(inp, gzip, out, (err) => {
        if (err){
            console.error('decompress operation failed')
        }
    })
};

await decompress();