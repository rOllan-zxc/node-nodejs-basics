const parseArgs = () => {
    const args = process.argv.slice(2)
    let str_res=''
    for (let arg of args) {
        if (arg.includes('--')) {
            str_res += `${arg.slice(2)} is `
        } else {
            str_res += `${arg}, `
        }
    }
    console.log(str_res.slice(0, -2))
}

parseArgs();