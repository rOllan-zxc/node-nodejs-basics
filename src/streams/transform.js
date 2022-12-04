import {Transform, pipeline} from 'stream'

const transform = async () => {
    const tr_stream = new Transform({
        transform(chunk, enc, callback) {
            callback(null, String(chunk).split('').reverse().join('')+'\n')
        }
    })
    pipeline(process.stdin, tr_stream, process.stdout, err => {throw new Error()})
};

await transform();