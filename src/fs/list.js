import {__dirname} from "./consts.js"
import {readdir} from "fs/promises"

const list = async () => {
    const files = __dirname + '/files'
    try{
        const files_arr = []
        const dir_files = await readdir(files)
        await Promise.all(dir_files.map(n=>files_arr.push(`${n}`)))
        console.log(files_arr)
    } catch (err){
        throw new Error('FS operation failed')
    }
};

await list()