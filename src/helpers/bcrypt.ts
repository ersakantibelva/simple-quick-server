import bcryptjs from 'bcryptjs'

const hashPass = (pass: string) => bcryptjs.hashSync(pass, 8)

const comparePass = (hashed: string, pass: string) => bcryptjs.compareSync(hashed, pass) 

export default { hashPass, comparePass }