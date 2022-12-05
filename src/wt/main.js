import {fileURLToPath} from "url"
import {dirname} from 'path'
import {Worker} from 'worker_threads'
import {cpus} from 'os'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const performCalculations = async () => {
    const worker_path = __dirname + '/worker.js'
    const promises = []

    for (let i = 0; i< cpus().length; i++){
        promises.push(
            new Promise((resolve, reject)=>{
                const worker = new Worker(worker_path, {workerData: 10 + i})

                worker.on('message', result => {
                    resolve({
                        'status': 'resolved',
                        'data': result
                    })
                })
                worker.on('message', error => {
                    resolve({
                        'status': 'resolved',
                        'data': null
                    })
                })

            })
        )
    }
    Promise.all(promises).then((result) => console.log(result))
};

await performCalculations();