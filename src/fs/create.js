import  {writeFile} from "fs/promises"
import {__dirname} from "./consts.js";

const create = async () => {
    const filePath = __dirname + '/files/fresh.txt'
            try{
                await writeFile(filePath,'I am fresh and young', {flag: 'wx'})
                        console.log('Файл создан');
                    }catch (err){
                throw new Error('FS operation failed')
            }
}
await create();