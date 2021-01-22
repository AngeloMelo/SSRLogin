import cookie from 'cookie'

const logout = async (req, res) =>{
    
    if(req.method === 'GET')
    {
        const options = {
            httpOnly: true,
            secure: false,
            sameSite: 'strict',
            maxAge: -1,
            path: '/'
        }
        const serialCookie = cookie.serialize('cred', '', options);
        res.setHeader('Set-Cookie', serialCookie)
        res.statusCode = 200
        res.end();
    }
    else
    {
        res.status(405).json({message: 'Unsupported method'})
    }
}

export default logout