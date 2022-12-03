import {__dirname} from "./consts.js"
import {unlink} from "fs/promises"


const remove = async () => {
    const delFile = __dirname + '/files/fileToRemove.txt'
    try{
        await unlink(delFile);
    } catch (err){
        throw new Error('FS operation failed')
    }
};

await remove()