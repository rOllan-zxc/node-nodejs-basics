import {writeFile} from "fs/promises"
import {__dirname} from "./consts.js"
import {existsSync} from 'fs'


const create = async () => {
    const file_path = __dirname + '/files/fresh.txt'
        if(existsSync(file_path)){
            throw new Error('FS operation failed')
        }else {
            await writeFile(file_path, 'I am fresh and young')
            console.log('Файл создан')
        }
}
await create()
