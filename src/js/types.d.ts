interface VerificationOptions {
    minimumAge?: number,
    disableScrolling?: boolean
    backgroundBlur?: boolean
    branding: {
        name: string,
        logo: string
    },
    styling?: {
        primaryColor?: string
    },
    links?: {
        cookies?: string,
        termsOfService?: string
    },
    country: string,
    primary_language?: string
    /** How long the cookie is valid for (Time in seconds) */
    cookie_ttl?: number
}

interface VerificationResult {
    meetsAgeRequirement: boolean
}

export { VerificationOptions, VerificationResult }