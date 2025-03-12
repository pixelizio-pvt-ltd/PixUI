import { cn } from '../../src/index';

describe('cn function', () => {
    it("should return 'cn' when no arguments are passed", () => {
        expect(cn()).toBe('');
    });

    it("should return 'cn' when empty string is passed", () => {
        expect(cn('')).toBe('');
    });

    it("should return 'cn' when pass tailwind class", () => {
        expect(cn('bg-red-500 flex')).toBe('bg-red-500 flex');
    });

    it("should return 'cn' when pass tailwind class with object", () => {
        expect(cn({ 'bg-red-500': true, flex: true })).toBe('bg-red-500 flex');
    });
});
