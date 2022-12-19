import express from "express"

const router = express.Router()

import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../swagger.json" assert { type: "json" }

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    persistAuthorization: true
  }
}));

export default router
