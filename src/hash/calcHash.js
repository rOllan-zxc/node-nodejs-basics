import {fileURLToPath} from "url"
import {dirname} from 'path'
import {createHash} from 'crypto'
import {readFile} from "fs/promises";

const __filename = fileURLToPath(import.meta.url) ;
const __dirname = dirname(__filename);

const calculateHash = async () => {
    const file_to_hash = __dirname + '/files/fileToCalculateHashFor.txt'
    try {
        const str_to_hash = await readFile(file_to_hash, {encoding:'utf8'})
        const hash = await createHash('sha3-256').update(str_to_hash).digest('hex');
        console.log(hash)
    } catch (err){
        throw new Error('Hash operation failed')
    }
};

await calculateHash();