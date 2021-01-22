import { isAuthenticated } from '../../utilities/jwt'

export const users = [
    {id:1, name: 'John', email: 'john@bc.com', pass: '$2a$10$v1xxDWhkBH/RUp4JuT9ye.w7N/tkbUCJPRGWtn17Ym8WfnxGA0d52'}, //1234
    {id:2, name: 'Paul', email: 'paul@bc.com', pass: '$2a$10$v1xxDWhkBH/RUp4JuT9ye.w7N/tkbUCJPRGWtn17Ym8WfnxGA0d52'},
    {id:3, name: 'Peter', email: 'peter@bc.com', pass: '$2a$10$v1xxDWhkBH/RUp4JuT9ye.w7N/tkbUCJPRGWtn17Ym8WfnxGA0d52'}
]

const user = isAuthenticated(async (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(users))
})

export default user