import AppLayout from '../components/AppLayout'
import Link from 'next/link'
import {getCookie} from '../utilities/clientCookie'
import redirect from '../utilities/pageRedirection'

const Users = ({users}) => (
    <AppLayout>
        <h1>Users</h1>

        {users.map((u,i) => <div key={i}>{u.name}</div>)}

        <Link href="/"><a className="nav-link">Home</a></Link>
        
    </AppLayout>
)

Users.getInitialProps = async (ctx) =>{

    const cookie = getCookie('cred', ctx.req)
    const resp = await fetch('http://localhost:3000/api/user', {
        headers:{
            cookie: cookie
        }
    })

    if(resp.status === 500){
        console.log('erro. redirecionar para login ')

        redirect(ctx, '/login')
        return
    }
    const users = await resp.json()
    return {users}
}

export default Users