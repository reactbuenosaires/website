import {
  validateParticipantCount,
  formatRandomNumber,
} from "./randomGenerator";

// Mock fetch for testing API calls
global.fetch = jest.fn();

describe("randomGenerator utilities", () => {
  describe("validateParticipantCount", () => {
    test("should validate empty input", () => {
      const result = validateParticipantCount("");
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Por favor ingresa el número de participantes");
    });

    test("should validate null input", () => {
      const result = validateParticipantCount(null);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Por favor ingresa el número de participantes");
    });

    test("should validate non-numeric input", () => {
      const result = validateParticipantCount("abc");
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("Por favor ingresa un número válido");
    });

    test("should validate zero input", () => {
      const result = validateParticipantCount(0);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe(
        "El número de participantes debe ser al menos 1"
      );
    });

    test("should validate negative input", () => {
      const result = validateParticipantCount(-5);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe(
        "El número de participantes debe ser al menos 1"
      );
    });

    test("should validate input above maximum", () => {
      const result = validateParticipantCount(1001);
      expect(result.isValid).toBe(false);
      expect(result.error).toBe("El número máximo de participantes es 1000");
    });

    test("should validate valid input", () => {
      const result = validateParticipantCount(50);
      expect(result.isValid).toBe(true);
      expect(result.error).toBe(null);
    });

    test("should validate string number input", () => {
      const result = validateParticipantCount("100");
      expect(result.isValid).toBe(true);
      expect(result.error).toBe(null);
    });

    test("should validate minimum valid input", () => {
      const result = validateParticipantCount(1);
      expect(result.isValid).toBe(true);
      expect(result.error).toBe(null);
    });

    test("should validate maximum valid input", () => {
      const result = validateParticipantCount(1000);
      expect(result.isValid).toBe(true);
      expect(result.error).toBe(null);
    });
  });

  describe("formatRandomNumber", () => {
    test("should format positive numbers", () => {
      expect(formatRandomNumber(42)).toBe("42");
      expect(formatRandomNumber(1)).toBe("1");
      expect(formatRandomNumber(999)).toBe("999");
    });

    test("should format zero", () => {
      expect(formatRandomNumber(0)).toBe("0");
    });

    test("should format large numbers", () => {
      expect(formatRandomNumber(1000)).toBe("1000");
    });
  });
});
