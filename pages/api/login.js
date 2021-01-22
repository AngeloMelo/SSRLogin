import { users } from './user'
import { getCredential } from '../../utilities/jwt'
import setCookie from '../../utilities/cookie'
import { compare } from 'bcryptjs'

const login = async (req, res) =>{
    
    if(req.method === 'POST')
    {
        const user = users.find(u => u.email === req.body.email)

        if(!user)
        {
            res.status(401).json({message: 'User not found'})
            return
        }

        const matches = await compare(req.body.password, user.pass)
        if(!matches)
        {
            res.status(401).json({message: 'Password incorrect'})
            return
        }
        
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        const userInfo = { userName : user.name, userEmail : user.email }

        const token = getCredential(user.id, user.email)
        setCookie(res, token)

        res.end(JSON.stringify(userInfo))
    }
    else
    {
        res.status(405).json({message: 'Unsupported method'})
    }
}

export default login