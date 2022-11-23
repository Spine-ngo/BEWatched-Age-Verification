export interface VerificationOptions {
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
  cookie_ttl?: number,
  /** What to do when user chooses to exit instead of continuing;
   * false to disable,
   * true to clear website,
   * string URL to redirect,
   * callback function for own handling */
  exit?: boolean | string | ((exit: () => void) => void)
}

interface Organisation {
  /** organisation which is responsible for reports in a specific country */
  organisation: {
    /** name of the organisation */
    name: string,
    /** website of the organisation */
    website: string,
    /** logo (url) of the organisation */
    logo: string
  }
}

export interface LanguageTranslation extends Organisation {
  translations: {
    [key: string]: {
      /** a message getting user to understand they're about to enter an adult site, and if they
       * choose to continue, that they also agree to TOS and cookie policy */
      acknowledgement: string,
      /** more information about the websites TOS/cookie policy */
      more_information: string,
      /** user comprehends and agree that they are of age */
      i_am_of_age: string,
      /** user is not of age or doesnt agree with TOS/cookie policy */
      exit: string,
      /** little quiz to make users aware the possibility of encountering minors */
      awareness: {
        /** asks whether person in image appears to be a minor or not */
        question: string,
        answers: {
          /** tell them that they're correct, but it's still hard to tell */
          correct: {
            /** "Correct, they are a minor" title */
            title: string,
            /** Tell them that it is still possible to encounter minors and advice them to visit organisation for more info etc */
            description: string
          }
          /** tell them that they're incorrect, it's hard to tell */
          incorrect: {
            /** "Incorrect, they are a minor" title */
            title: string,
            /** Tell them that it is hard to determine who's an adult and advice them to visit organisation for more info etc */
            description: string
          }
        }
      },
      yes: string,
      no: string,
      /** get the user to agree they understand that they might encounter a minor */
      comprehension: string,
    }
  }
}

export interface LanguageTranslation {
  /** organisation which is responsible for reports in a specific country */
  organisation: {
    /** name of the organisation */
    name: string,
    /** website of the organisation */
    website: string,
    /** logo (url) of the organisation */
    logo: string
  },
  translations: {
    [key: string]: {
      /** a message getting user to understand they're about to enter an adult site, and if they
       * choose to continue, that they also agree to TOS and cookie policy */
      acknowledgement: string,
      /** more information about the websites TOS/cookie policy */
      more_information: string,
      /** user comprehends and agree that they are of age */
      i_am_of_age: string,
      /** user is not of age or doesnt agree with TOS/cookie policy */
      exit: string,
      /** little quiz to make users aware the possibility of encountering minors */
      awareness: {
        /** asks whether person in image appears to be a minor or not */
        question: string,
        answers: {
          /** tell them that they're correct, but it's still hard to tell */
          correct: {
            /** "Correct, they are a minor" title */
            title: string,
            /** Tell them that it is still possible to encounter minors and advice them to visit organisation for more info etc */
            description: string
          }
          /** tell them that they're incorrect, it's hard to tell */
          incorrect: {
            /** "Incorrect, they are a minor" title */
            title: string,
            /** Tell them that it is hard to determine who's an adult and advice them to visit organisation for more info etc */
            description: string
          }
        }
      },
      yes: string,
      no: string,
      /** get the user to agree they understand that they might encounter a minor */
      comprehension: string,
    }
  }
}

export interface ParsingContext extends VerificationOptions, Organisation {
}
