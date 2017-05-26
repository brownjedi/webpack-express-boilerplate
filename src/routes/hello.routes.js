import { Router } from 'express'

const router = new Router()

router.get('/', (req, res) => {
	res.send('Hello World')
})

router.get('/:id', (req, res) => {
	res.send(`Hello ${req.params.id}`)
})

export default router
