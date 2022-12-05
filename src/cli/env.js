const parseEnv = () => {
   const prefix = 'RSS_'
   const prop_with_prefix = Object.keys(process.env).filter((prop) => prop.includes(prefix))
       .map((el)=>`${el}=${process.env[el]}`)
   console.log(prop_with_prefix.join('; '))
};

parseEnv();