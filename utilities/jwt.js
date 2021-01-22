import { sign, verify } from 'jsonwebtoken'
import secret from './secret'

export const getCredential = (subject, userEmail) => {

    const claims = {
        sub: subject,
        userEmail: userEmail
    }

    return sign(claims, secret, { expiresIn: '1h'});
}

export const isAuthenticated = (requestHandler) => async (req, res) =>{
    
    let token
    if(req.cookies.cred)
    {
        token = req.cookies.cred
    }
    else
    {
        const [, token] = req.headers.cookie.split('=')
    }

    if(token)
    {
        const decoded = await verify(token, secret)
        if(decoded)
        {
            return await requestHandler(req, res)
        }
    }
    
    res.status(500).json({message: 'user not authenticated'})
}