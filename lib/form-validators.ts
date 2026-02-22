/**
 * Shared form validation utilities.
 * All validators return an error string or null (no error).
 */

/**
 * Allowed characters for name / city fields:
 * Only basic Latin letters (A-Z, a-z) and spaces.
 */
const NAME_REGEX = /^[A-Za-z\s]*$/

/**
 * Allowed characters for message / subject / textarea fields:
 * Only basic Latin letters, digits, and spaces.
 * Blocks ALL symbols, punctuation, accented letters,
 * mathematical chars, formatting chars, emoji, etc.
 */
const TEXT_REGEX = /^[A-Za-z0-9\s]*$/


/** Validate a name or city — letters and spaces only. */
export function validateNoSpecialCharsName(value: string): string | null {
    if (!value) return null
    if (!NAME_REGEX.test(value)) {
        return "Only letters and spaces are allowed — no special characters, symbols, or accented letters"
    }
    return null
}

/** Validate a text / message / location field — letters, digits, spaces, and basic punctuation only. */
export function validateNoSpecialCharsText(value: string): string | null {
    if (!value) return null
    if (!TEXT_REGEX.test(value)) {
        return "Special characters, accented letters, and symbols are not allowed"
    }
    return null
}

/** Combined: letters only + min length */
export function validateName(value: string): string | null {
    if (!value) return null
    if (!/^[A-Za-z\s]*$/.test(value)) {
        return "Only letters and spaces are allowed — no special characters, symbols, or accented letters"
    }
    if (value.length > 30) return "Name must not exceed 30 characters"
    return null
}

/** Validate phone — digits only, exactly 10. */
export function validatePhone(value: string): string | null {
    if (!value) return null
    const numericValue = value.replace(/\D/g, "")
    if (value !== numericValue) return "Phone number must contain only digits"
    if (numericValue.length > 0 && numericValue.length !== 10)
        return `Phone number must be exactly 10 digits (current: ${numericValue.length})`
    return null
}

/** Validate date — must not be in the past. */
export function validateDate(value: string): string | null {
    if (!value) return null
    const selected = new Date(value)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    selected.setHours(0, 0, 0, 0)
    if (selected < today) return "Please select a date from today onwards"
    return null
}
