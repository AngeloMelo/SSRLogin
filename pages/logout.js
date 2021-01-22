import { useEffect } from 'react'
import { useRouter } from 'next/router'

const LogoutPage = () => {

    const router = useRouter()

    useEffect(() => {

        fetch('http://localhost:3000/api/logout')
        router.push('/login')
    }, [])

    return ( <div/> )
}

export default LogoutPage