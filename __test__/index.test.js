import { describe, it, expect } from '@jest/globals'
import Service from '../src/services/exercicios.js'

describe("Testes para Função Somar", () => {
    it("Deve somar dois numeros positivos 2 e 1, retornar 3", () => {
        const result = Service.Somar(2, 1);
        expect(result).toBe(3);
    })

    it("Deve somar dois numeros negativos -2 e -1, retornar -3", () => {
        const result = Service.Somar(-2, -1);
        expect(result).toBe(-3);
    })

    it("Deve somar um numero positivo 2 e um numero negativo -1, retornar 1", () => {
        const result = Service.Somar(2, -1);
        expect(result).toBe(1);
    })

    it("Ao receber um numero e uma string, deve retornar 'Informar apenas numeros'", () => {
        const result = Service.Somar(2, "a");
        expect(result).toBe("Informar apenas numeros");
    })
})

describe("Testes para Função Subtrair", () => {
    it("Deve subtrair dois numeros positivos 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })

    it("Deve retornar um número negativo se o segundo for maior (1 e 2, retornar -1)", () => {
        const result = Service.Subtrair(1, 2);
        expect(result).toBe(-1);
    })
})

describe("Testes para Função Multiplicar", () => {
    it("Deve multiplicar dois numeros positivos 2 e 1, retornar 2", () => {
        const result = Service.Multiplicar(2, 1);
        expect(result).toBe(2);
    })

    it("Deve retornar 0 ao multiplicar qualquer número por zero", () => {
        const result = Service.Multiplicar(5, 0);
        expect(result).toBe(0);
    })

    it("Deve respeitar a regra de sinais (multiplicar positivo por negativo)", () => {
        const result = Service.Multiplicar(3, -2);
        expect(result).toBe(-6);
    })
})

describe("Testes para Função Dividir", () => {
    it("Deve dividir dois numeros positivos 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2, 2);
        expect(result).toBe(1);
    })

    it("Deve retornar erro ou Infinity ao tentar dividir por zero", () => {
        const result = Service.Dividir(5, 0);

        expect(result).toBe("Não é possível dividir por zero"); 
    })
})


describe("Testes para Função Raiz (Raiz Quadrada)", () => {
    it("Deve calcular a raiz quadrada de um número quadrado perfeito (9 deve retornar 3)", () => {
        const result = Service.Raiz(9);
        expect(result).toBe(3);
    })

    it("Deve retornar 0 ao calcular a raiz quadrada de zero", () => {
        const result = Service.Raiz(0);
        expect(result).toBe(0);
    })

    it("Deve lançar um erro ou mensagem ao tentar calcular raiz de número negativo", () => {
        expect(() => Service.Raiz(-4)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
    })
})

describe("Testes para Função Potencia (Exponenciação)", () => {
    it("Deve calcular a potência de base e expoente positivos (2 elevado a 3 deve retornar 8)", () => {
        const result = Service.Potencia(2, 3);
        expect(result).toBe(8);
    })

    it("Qualquer número elevado a zero deve retornar 1", () => {
        const result = Service.Potencia(5, 0);
        expect(result).toBe(1);
    })

    it("Deve calcular corretamente quando o expoente for negativo (2 elevado a -2 deve retornar 0.25)", () => {
        const result = Service.Potencia(2, -2);
        expect(result).toBe(0.25);
    })
})