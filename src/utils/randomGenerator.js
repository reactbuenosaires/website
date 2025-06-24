/**
 * Utility functions for random number generation using random.org API
 */

/**
 * Fetches a random number from random.org API with retry functionality
 * @param {number} max - Maximum number (number of participants)
 * @param {number} maxRetries - Maximum number of retry attempts (default: 3)
 * @returns {Promise<number>} - Random number between 1 and max
 */
export const fetchRandomNumber = async (max, maxRetries = 3) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const url = `https://www.random.org/integers/?num=1&min=1&max=${max}&col=1&base=10&format=plain&rnd=new`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const randomNumber = await response.text();
      const number = parseInt(randomNumber.trim(), 10);

      // Validate the returned number is within expected range
      if (isNaN(number) || number < 1 || number > max) {
        throw new Error(`Invalid number returned: ${number}`);
      }

      return number;
    } catch (error) {
      lastError = error;
      console.warn(`Attempt ${attempt} failed:`, error.message);

      // If this is not the last attempt, wait before retrying
      if (attempt < maxRetries) {
        const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000); // Exponential backoff, max 5s
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }

  // All retries failed
  throw new Error(
    `Failed to fetch random number after ${maxRetries} attempts. ${lastError.message}`
  );
};

/**
 * Validates participant count input
 * @param {number|string} value - Input value to validate
 * @returns {Object} - Validation result with isValid boolean and error message
 */
export const validateParticipantCount = (value) => {
  const num = parseInt(value, 10);

  if (!value || value === "") {
    return {
      isValid: false,
      error: "Por favor ingresa el número de participantes",
    };
  }

  if (isNaN(num)) {
    return { isValid: false, error: "Por favor ingresa un número válido" };
  }

  if (num < 1) {
    return {
      isValid: false,
      error: "El número de participantes debe ser al menos 1",
    };
  }

  if (num > 1000) {
    return {
      isValid: false,
      error: "El número máximo de participantes es 1000",
    };
  }

  return { isValid: true, error: null };
};

/**
 * Formats the random number for display
 * @param {number} number - Number to format
 * @returns {string} - Formatted number string
 */
export const formatRandomNumber = (number) => {
  return number.toString();
};
