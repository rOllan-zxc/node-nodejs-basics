
import {__dirname} from "./consts.js";
import {copyFile, mkdir, readdir} from 'fs/promises'

const copy = async () => {
    const files = __dirname + '/files';
    const files_copy = __dirname + '/files_copy';
    try {
        const dir_files = await readdir(files);
        await mkdir(files_copy);
        await Promise.all(dir_files.map(f => copyFile(`${files}/${f}`, `${files_copy}/${f}`)));
        console.log('Файлы скопированы в files_copy')
    } catch (err) {
        throw new Error('FS operation failed')
    }
};

copy();