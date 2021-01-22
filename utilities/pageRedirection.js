import Router from 'next/dist/next-server/lib/router/router'

const redirect = (ctx, location) =>{
    if (ctx.req) {
        ctx.res.writeHead(302, { Location: `http://localhost:3000${location}` })
        ctx.res.end()
    } 
    else {
        Router.replace(location)
    }
}

export default redirect