import express from 'express'
import healthRouter from './routes/health.js'
import routerCompatibility from './routes/CompatibilityRoutes.js'


const app = express()

app.use(express.json())

app.use('/health', healthRouter)
app.use('/compatibility', routerCompatibility)

app.get('/teste', (req, res) => {
  res.status(200).json({ message: "API funcionando!" });
});

export default app