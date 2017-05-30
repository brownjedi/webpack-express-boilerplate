// @flow
import { Router, Request, Response } from 'express'

const router = new Router()

function sayHello(name: string): string {
	return `Hello ${name}`
}

router.get('/', (req: Request, res: Response) => {
	res.send('Hello World')
})

router.get('/:id', (req: Request, res: Response) => {
	res.send(sayHello(req.params.id))
})

export default router
