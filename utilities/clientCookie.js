import Cookies from 'js-cookie';

const getCookieFromBrowser = key => Cookies.get(key)

const getCookieFromServer = (key, req) => {

  if (!req.headers.cookie) return false

  const rawCookie = req.headers.cookie
    .split(';')
    .find(c => c.trim().startsWith(`${key}=`))

  if (!rawCookie) return false
  
  const [, token] = rawCookie.split('=')
  if (!token) return false

  return token
}

export const getCookie = (key, req) => {

  if (process.browser) return getCookieFromBrowser(key)
  return getCookieFromServer(key, req)
}