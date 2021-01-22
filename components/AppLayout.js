import Head from 'next/head'
import Navbar from './navbar'

const AppLayout = (props) => (

    <div>
        <Head>
            <title>Server Side Rendering Authentication with JWT and Next.js</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.css" />
        </Head>

        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default AppLayout