import express from "express"
import Controller from "../controllers/exercicios.js"

const router = express.Router()

router.post("/somar", Controller.Somar)
router.post("/subtrair", Controller.Subtrair)
router.post("/multiplicar", Controller.Multiplicar)
router.post("/dividir", Controller.Dividir)
router.post("/raiz", Controller.Raiz)
router.post("/potencia", Controller.Potencia)

export default router
