import fs from 'fs';
import {rename as rename_file} from 'fs/promises'
import {__dirname} from "./consts.js";

const rename= async () => {
    const wrongFile = __dirname + '/files/wrongFilename.txt';
    const properFile = __dirname + '/files/properFilename.md';
    try {
        await rename_file(wrongFile, properFile)
    } catch (err){
            throw new Error('FS operation failed')
        }
};

await rename();