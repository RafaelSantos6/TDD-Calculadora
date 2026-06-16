import { describe, it, expect } from '@jest/globals'
import Service from '../src/services/exercicios.js'

describe("Testes para Função Somar", () => {
    it("Deve somar dois números positivos 2 e 95, retornar 97", () => {
        const result = Service.Somar(2, 95);
        expect(result).toBe(97);
    })

    it("Deve somar um número negativo e um positivo -5 e 10, retornar 5", () => {
        const result = Service.Somar(-5, 10);
        expect(result).toBe(5);
    })

    it("Deve somar um número positivo e um negativo 10 e -5, retornar 5", () => {
        const result = Service.Somar(10, -5);
        expect(result).toBe(5);
    })

    it("Deve somar dois números negativos -5 e -10, retornar -15", () => {
        const result = Service.Somar(-5, -10);
        expect(result).toBe(-15);
    })

    it("Deve somar números com ponto flutuante 0.5 e 1.7, retornar 2.2", () => {
        const result = Service.Somar(0.5, 1.7);
        expect(result).toBeCloseTo(2.2);
    })

    it("Ao receber uma string e um número ('a' e 1), deve retornar 'Informar apenas numeros'", () => {
        const result = Service.Somar("a", 1);
        expect(result).toBe("Informar apenas numeros");
    })

    it("Ao receber um número e uma string (1 e 'a'), deve retornar 'Informar apenas numeros'", () => {
        const result = Service.Somar(1, "a");
        expect(result).toBe("Informar apenas numeros");
    })

    it("Deve somar zero e um número 0 e 1, retornar 1", () => {
        const result = Service.Somar(0, 1);
        expect(result).toBe(1);
    })
})

describe("Testes para Função Subtrair", () => {
    it("Deve subtrair dois números positivos 2 e 1, retornar 1", () => {
        const result = Service.Subtrair(2, 1);
        expect(result).toBe(1);
    })

    it("Deve retornar um número negativo se o segundo for maior (1 e 2, retornar -1)", () => {
        const result = Service.Subtrair(1, 2);
        expect(result).toBe(-1);
    })

    it("Deve subtrair dois números negativos -5 e -2, retornar -3", () => {
        const result = Service.Subtrair(-5, -2);
        expect(result).toBe(-3);
    })

    it("Deve subtrair números com ponto flutuante 5.5 e 2.2, retornar 3.3", () => {
        const result = Service.Subtrair(5.5, 2.2);
        expect(result).toBeCloseTo(3.3);
    })

    it("Ao receber uma string, deve retornar erro", () => {
        const result = Service.Subtrair("a", 1);
        expect(result).toBe("Informar apenas numeros");
    })
})

describe("Testes para Função Multiplicar", () => {
    it("Deve multiplicar dois números positivos 2 e 1, retornar 2", () => {
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

    it("Deve multiplicar dois números negativos e retornar positivo", () => {
        const result = Service.Multiplicar(-3, -4);
        expect(result).toBe(12);
    })

    it("Deve multiplicar números com ponto flutuante 2.5 e 2, retornar 5", () => {
        const result = Service.Multiplicar(2.5, 2);
        expect(result).toBe(5);
    })

    it("Ao receber uma string, deve retornar erro", () => {
        const result = Service.Multiplicar(2, "a");
        expect(result).toBe("Informar apenas numeros");
    })
})

describe("Testes para Função Dividir", () => {
    it("Deve dividir dois números positivos 2 e 2, retornar 1", () => {
        const result = Service.Dividir(2, 2);
        expect(result).toBe(1);
    })

    it("Deve retornar erro ao tentar dividir por zero", () => {
        const result = Service.Dividir(5, 0);
        expect(result).toBe("Não é possível dividir por zero"); 
    })

    it("Deve dividir número positivo por negativo, retornando negativo", () => {
        const result = Service.Dividir(10, -2);
        expect(result).toBe(-5);
    })

    it("Deve dividir números com ponto flutuante 5.5 e 2, retornar 2.75", () => {
        const result = Service.Dividir(5.5, 2);
        expect(result).toBe(2.75);
    })
    it("Ao receber uma string ou valor não numérico, deve retornar erro", () => {
        const result = Service.Dividir(10, "a");
        expect(result).toBe("Informar apenas numeros");
    })
})

describe("Testes para Função Raiz (Raiz Quadrada)", () => {
    it("Calcular raiz quadrada de um número quadrado perfeito (Fluxo Positivo)", () => {
        const result = Service.Raiz(9);
        expect(result).toBe(3);
    })

    it("Calcular raiz quadrada do número zero (Caso Limite)", () => {
        const result = Service.Raiz(0);
        expect(result).toBe(0);
    })

    it("Calcular raiz quadrada de um número com ponto flutuante (Decimal)", () => {
        const result = Service.Raiz(2.25);
        expect(result).toBe(1.5);
    })

    it("Tentar calcular raiz quadrada de um número negativo (Fluxo de Exceção)", () => {
        expect(() => Service.Raiz(-4)).toThrow("Não é possível calcular a raiz quadrada de um número negativo");
    })
    it("Ao enviar um valor não numérico/string no campo de entrada, deve retornar erro", () => {
        const result = Service.Raiz("a");
        expect(result).toBe("Informar apenas numeros");
    })

    it("Ao enviar a requisição vazia ou sem a propriedade esperada (undefined), deve retornar erro", () => {
        const result = Service.Raiz(); 
        expect(result).toBe("Informar apenas numeros");
    })
})

describe("Testes para Função Potencia (Exponenciação)", () => {
    it("Calcular potência com base e expoente inteiros positivos (Fluxo Base)", () => {
        const result = Service.Potencia(2, 3);
        expect(result).toBe(8);
    })

    it("Qualquer número elevado ao expoente zero (Propriedade Matemática)", () => {
        const result = Service.Potencia(5, 0);
        expect(result).toBe(1);
    })

    it("Qualquer número elevado ao expoente um (Propriedade Matemática)", () => {
        const result = Service.Potencia(7, 1);
        expect(result).toBe(7);
    })

    it("Calcular potência com expoente negativo (Inversão da Base)", () => {
        const result = Service.Potencia(2, -2);
        expect(result).toBe(0.25);
    })

    it("Calcular potência onde a base é um número negativo", () => {
        const result = Service.Potencia(-3, 2);
        expect(result).toBe(9);
    })
    it("Ao receber um valor não numérico/string na base, deve retornar erro", () => {
        const result = Service.Potencia("a", 2);
        expect(result).toBe("Informar apenas numeros");
    })

    it("Ao receber um valor não numérico/string no expoente, deve retornar erro", () => {
        const result = Service.Potencia(2, "a");
        expect(result).toBe("Informar apenas numeros");
    })
})