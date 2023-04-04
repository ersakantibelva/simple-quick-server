import bcrypt from 'bcrypt'

export const hashPass = (pass: string) => bcrypt.hashSync(pass, 8)

export const comparePass = (hashed: string, pass: string) => bcrypt.compareSync(hashed, pass) 