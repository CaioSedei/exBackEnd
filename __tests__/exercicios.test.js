import { describe, it, expect } from '@jest/globals';
import serviceExercicio from '../src/service/exercicios';

describe('Testando função de somar', () => {

    it('testandos dois números positivos', () => {
        const resultado = serviceExercicio.Somar(1, 2);

        expect(resultado).toBe(3);
    })
    it('testandos dois números negativos', () => {
        const resultado = serviceExercicio.Somar(-1, -2);

        expect(resultado).toBe(-3);
    })
    it('testandos dois números com casa decimal', () => {
        const resultado = serviceExercicio.Somar(1.2, 2.2);

        expect(resultado).toBe(3.4);
    })
    it('Somando zero com outro número', () => {
        const resultado = serviceExercicio.Somar(0, 2);

        expect(resultado).toBe(2);
    })
    it('Somando um número com zero', () => {
        const resultado = serviceExercicio.Somar(1, 0);

        expect(resultado).toBe(1);
    })

})