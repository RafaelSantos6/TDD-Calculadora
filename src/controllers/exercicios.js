import Service from "../services/exercicios.js"

class Controller {
    Somar(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Somar(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Subtrair(req, res) {
        const { num1, num2 } = req.body 
        const resultado = Service.Subtrair(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Multiplicar(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Multiplicar(num1, num2)
        
        res.status(200).send({ resultado }) 
    }

    Dividir(req, res) {
        const { num1, num2 } = req.body
        const resultado = Service.Dividir(num1, num2)
        
        res.status(200).send({ resultado })
    }

    Raiz(req, res) {
        try {
            const { num1 } = req.body 
            
            if (num1 === undefined) {
                return res.status(400).send({ erro: "O parâmetro 'num1' é obrigatório." })
            }

            const resultado = Service.Raiz(num1)
            res.status(200).send({ resultado })
        } catch (error) {
            res.status(400).send({ erro: error.message })
        }
    }

    Potencia(req, res) {
        const { num1, num2 } = req.body
        
        if (num1 === undefined || num2 === undefined) {
            return res.status(400).send({ erro: "Os parâmetros 'num1' e 'num2' são obrigatórios." })
        }

        const resultado = Service.Potencia(num1, num2)
        res.status(200).send({ resultado })
    }

}

export default new Controller()