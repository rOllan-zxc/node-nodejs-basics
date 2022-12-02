import  {writeFile} from "fs/promises"
import * as url from 'url';
import path from "path"
const filePath = url.fileURLToPath(new URL('.', import.meta.url));

const create = async () => {
            try{
                await writeFile(
                    path.join(filePath, 'files', 'fresh.txt'),
                    'I am fresh and young',
                    {flag: 'wx'})
                        console.log('Файл создан');
                    }catch (err){
                throw new Error('FS operation failed')
            }
}

await create();