import {Router} from 'express'
import HealthController from '../controllers/healthController.js'

const routerHealth = Router()

const healthController = new HealthController()


routerHealth.get('/', healthController.showHealth)

export default routerHealth