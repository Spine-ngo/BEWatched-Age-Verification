interface VerificationOptions {
    /** Whether an age verification should be prompted<br>Default: <code>false</code> */
    ageVerification?: boolean
    /** The minimum age requirement to continue.<br>Default: <code>18</code> */
    minimumAge?: number,
    /** Whether scrolling should be disabled when prompted.<br>Default: <code>true</code> */
    disableScrolling?: boolean
    /** Whether the background should be blurred.<br>Default: <code>true</code> */
    backgroundBlur?: boolean
    /** String array of direct model image links (must be underage.) */
    models?: string[]
    /** Company branding */
    branding: {
        /** Company name */
        name: string,
        /** Company logo */
        logo: string
        /** Common Links */
        links: {
            /** Link to website cookie policy<br>Relative URLs are valid */
            cookies: string,
            /** Link to website terms of service<br>Relative URLs are valid */
            termsOfService: string
        }
    },
    /** Modal styling */
    styling?: {
        /** Primary website color */
        primaryColor?: string
    },
    /** Country which the website is directed at */
    country: string,
    /** Website's primary serving language<br>Default is defined by file<br>Language can get overridden by client's computer language */
    primary_language?: string
    /** How long the cookie is valid for (Time in seconds)<br>Default: <code>2592000</code> (30 days) */
    cookie_ttl?: number
}

export { VerificationOptions }