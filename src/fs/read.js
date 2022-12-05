import {__dirname} from "./consts.js";
import {readFile} from 'fs/promises';

const read = async () => {
    const file_path = __dirname + '/files/fileToRead.txt'
    try{
        const data = await readFile(file_path, {encoding:'utf8'})
        console.log(data)
    }catch (err){
        throw new Error('FS operation failed')
    }
};

await read()