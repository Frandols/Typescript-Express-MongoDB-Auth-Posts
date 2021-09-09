import bcrypt from 'bcrypt'

export async function compare(bodyPassword: string, userPassword: string){
    return await bcrypt.compare(bodyPassword, userPassword)
}