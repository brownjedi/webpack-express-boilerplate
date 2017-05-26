import test    from 'ava'
import request from 'supertest'
import app     from 'index'

test.serial('Should correctly get response for the `/` endpoint', async (t) => {
	t.plan(2)

	const res = await request(app).get('/')

	t.is(res.status, 200)
	t.is(res.text, 'Hello World')
})

test.serial('Should correctly get response for the `/:id` endpoint', async (t) => {
	t.plan(2)

	const res = await request(app).get('/Boo')

	t.is(res.status, 200)
	t.is(res.text, 'Hello Boo')
})

test.serial('Should throw 404 not found error for `/doesnotexist/doesnotexist` endpoint', async (t) => {
	t.plan(3)

	const res = await request(app).get('/doesnotexist/doesnotexist')

	t.is(res.status, 404)
	t.is(res.body.errors[0].status, 404)
	t.is(res.body.errors[0].detail, 'The URL is not found')
})
