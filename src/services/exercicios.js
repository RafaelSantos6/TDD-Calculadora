class Service {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Informar apenas numeros"
        }
        return num1 + num2;
    }

    Subtrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Informar apenas numeros"
        }
        return num1 - num2;
    }

    Multiplicar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Informar apenas numeros"
        }
        return num1 * num2;
    }

    Dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Informar apenas numeros"
        }
        if (num2 === 0) {
            return "Não é possível dividir por zero";
        }
        return num1 / num2;
    }

    Raiz(num1) {
        if (isNaN(num1)) {
            return "Informar apenas numeros"
        }
        if (num1 < 0) {
            throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
        }
        return Math.sqrt(num1);
    }

    Potencia(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            return "Informar apenas numeros"
        }
        return Math.pow(num1, num2);
    }
}

export default new Service()