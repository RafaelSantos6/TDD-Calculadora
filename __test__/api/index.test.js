import app from "../../src/index.js"
import request from "supertest"
import { describe, it, expect } from "@jest/globals"

describe("Testes de API - Calculadora", () => {

    // ENDPOINT: SOMAR
    describe("POST /api/somar", () => {
        it("CT01 - dois números positivos", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 1, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(3);
        });

        it("CT02 - dois números negativos", async () => {
            const response = await request(app).post("/api/somar").send({ num1: -5, num2: -3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-8);
        });

        it("CT03 - um número positivo e um negativo", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 10, num2: -4 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(6);
        });

        it("CT04 - zero com zero", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 0, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT05 - um número com zero", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 15, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(15);
        });

        it("CT06 - dois números decimais (float)", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 1.5, num2: 2.3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(3.8);
        });

        it("CT07 - enviar uma string e um número", async () => {
            const response = await request(app).post("/api/somar").send({ num1: "texto", num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT08 - enviar o body faltando o num2", async () => {
            const response = await request(app).post("/api/somar").send({ num1: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT09 - enviar valores nulos (null)", async () => {
            const response = await request(app).post("/api/somar").send({ num1: null, num2: null });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT10 - enviar valores booleanos (true/false)", async () => {
            const response = await request(app).post("/api/somar").send({ num1: true, num2: false });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });
    });

    // ENDPOINT: SUBTRAIR
    describe("POST /api/subtrair", () => {
        it("CT11 - subtrair dois números positivos (num1 > num2)", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 10, num2: 4 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(6);
        });

        it("CT12 - subtrair dois números positivos (num1 < num2)", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 3, num2: 7 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-4);
        });

        it("CT13 - subtrair dois números negativos", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: -5, num2: -2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-3);
        });

        it("CT14 - subtrair um número positivo de um negativo", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: -5, num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-10);
        });

        it("CT15 - subtrair um número negativo de um positivo", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 5, num2: -5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(10);
        });

        it("CT16 - subtrair zero de um número", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 8, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(8);
        });

        it("CT17 - subtrair um número de zero", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 0, num2: 8 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-8);
        });

        it("CT18 - subtrair dois números decimais", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: 5.5, num2: 2.2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(3.3);
        });

        it("CT19 - enviar uma letra no lugar de num1", async () => {
            const response = await request(app).post("/api/subtrair").send({ num1: "a", num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT20 - enviar um body completamente vazio", async () => {
            const response = await request(app).post("/api/subtrair").send({});
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });
    });

    // ENDPOINT: MULTIPLICAR
    describe("POST /api/multiplicar", () => {
        it("CT21 - multiplicar dois números positivos", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 4, num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(20); 
        });

        it("CT22 - multiplicar dois números negativos", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: -3, num2: -3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(9);
        });

        it("CT23 - multiplicar um positivo e um negativo", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 4, num2: -3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-12);
        });

        it("CT24 - multiplicar um número por zero", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 10, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT25 - multiplicar zero por zero", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 0, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT26 - multiplicar um número por 1", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 7, num2: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(7);
        });

        it("CT27 - multiplicar dois números decimais", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 2.5, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(5);
        });

        it("CT28 - multiplicar frações", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 0.5, num2: 0.5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0.25);
        });

        it("CT29 - enviar caractere especial no num2", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: 5, num2: "@" });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT30 - enviar array no lugar de número", async () => {
            const response = await request(app).post("/api/multiplicar").send({ num1: [1, 2], num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });
    });

    // ENDPOINT: DIVIDIR
    describe("POST /api/dividir", () => {
        it("CT31 - dividir dois números positivos com resultado exato", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 10, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(5);
        });

        it("CT32 - dividir dois números positivos com resultado decimal", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 5, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(2.5);
        });

        it("CT33 - dividir dois números negativos", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: -10, num2: -2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(5);
        });

        it("CT34 - dividir um positivo e um negativo", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 10, num2: -2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-5);
        });

        it("CT35 - dividir um número por 1", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 9, num2: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(9);
        });

        it("CT36 - dividir zero por um número positivo", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 0, num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT37 - dividir um número por zero", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 10, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Não é possível dividir por zero");
        });

        it("CT38 - dividir zero por zero", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 0, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Não é possível dividir por zero");
        });

        it("CT39 - enviar num1 válido e num2 como string", async () => {
            const response = await request(app).post("/api/dividir").send({ num1: 10, num2: "dois" });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT40 - enviar o body sem parâmetros", async () => {
            const response = await request(app).post("/api/dividir").send({});
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });
    });

    // ENDPOINT: RAIZ
    describe("POST /api/raiz", () => {
        it("CT41 - raiz de um número positivo (quadrado perfeito)", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 16 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(4);
        });

        it("CT42 - raiz de um número positivo (resultado decimal)", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBeCloseTo(1.4142, 3);
        });

        it("CT43 - raiz de zero", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT44 - raiz de 1", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 1 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(1);
        });

        it("CT45 - raiz de número negativo (Lança Exceção / Status 500)", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: -9 });
            expect(response.statusCode).toBe(400);
        });

        it("CT46 - raiz de um número decimal", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 0.25 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0.5);
        });

        it("CT47 - enviar num1 como string alfanumérica", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: "9a" });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT48 - enviar body vazio", async () => {
            const response = await request(app).post("/api/raiz").send({});
            expect(response.statusCode).toBe(400);
        });

        it("CT49 - enviar num1 nulo", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: null });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT50 - enviar num2 junto com num1 (deve ignorar num2)", async () => {
            const response = await request(app).post("/api/raiz").send({ num1: 9, num2: 50 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(3);
        });
    });

    // ENDPOINT: POTENCIA
    describe("POST /api/potencia", () => {
        it("CT51 - base positiva e expoente positivo", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 2, num2: 3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(8);
        });

        it("CT52 - base negativa e expoente par", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: -2, num2: 4 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(16);
        });

        it("CT53 - base negativa e expoente ímpar", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: -2, num2: 3 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(-8);
        });

        it("CT54 - base positiva e expoente zero", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 5, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(1);
        });

        it("CT55 - base negativa e expoente zero", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: -5, num2: 0 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(1);
        });

        it("CT56 - base zero e expoente positivo", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 0, num2: 5 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0);
        });

        it("CT57 - base positiva e expoente negativo", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 2, num2: -2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(0.25);
        });

        it("CT58 - base decimal e expoente inteiro", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 1.5, num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe(2.25);
        });

        it("CT59 - enviar texto na base", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: "base", num2: 2 });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });

        it("CT60 - enviar texto no expoente", async () => {
            const response = await request(app).post("/api/potencia").send({ num1: 2, num2: "expoente" });
            expect(response.statusCode).toBe(200);
            expect(response.body.resultado).toBe("Informar apenas numeros");
        });
    });
});