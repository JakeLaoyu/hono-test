import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
app.get('/', (c) => c.text('Hello Hono!'))

serve(app, (info) => {
    console.log(`Server started at http://${info.address}:${info.port}`)
})
