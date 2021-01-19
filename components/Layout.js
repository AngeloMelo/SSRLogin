import Head from 'next/head'

const Layout = (props) => (

    <div>
        <Head>
            <title>Server Side Rendering test with Next.js</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.css" />
        </Head>

        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout