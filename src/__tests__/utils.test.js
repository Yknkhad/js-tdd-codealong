import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the correct age for a given birth year", () => {

    const currentYear = new Date().getFullYear(); // Get the current year dynamically
    const birthYear = 1990;
    const expectedAge = currentYear - birthYear;

    const calculatedAge = currentAgeForBirthYear(birthYear);


    expect(calculatedAge).toBe(expectedAge); // Verify the result matches the expected age
  });
});
