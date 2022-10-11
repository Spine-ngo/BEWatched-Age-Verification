interface VerificationOptions {
    minimumAge?: number,
    disableScrolling?: boolean
    backgroundBlur?: boolean
    models?: string[]
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

export { VerificationOptions }