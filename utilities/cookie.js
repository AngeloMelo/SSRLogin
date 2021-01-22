import cookie from 'cookie'

const setCookie = (res, jwt) =>
{
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV != 'development',
        sameSite: 'strict',
        maxAge: 60 * 60,
        path: '/'
    }
    const serialCookie = cookie.serialize('cred', jwt, options);
    res.setHeader('Set-Cookie', serialCookie)
}

export default setCookie