import {h} from "./plugins/dom-chef@5.1.0";
import {ParsingContext, VerificationOptions} from "./types";

import Cookies from "./Cookies";
import HTML from "./HTML";
import {parseContext, isValidURL, getAbsoluteURL} from "./utilities";

import language_file from "../lang/nl.json";

language_file.organisation.name = HTML.escape(language_file.organisation.name);
language_file.translations = HTML.escape(language_file.translations);

import Languages from "./components/Languages";
import Footer from "./components/Footer";

await import((`../css/AgeVerification.pcss`));

function parseContent(str: string, context = undefined) {
  return HTML.parseMarkdown(HTML.escape(context ? parseContext(str, context) : str));
}

function verifyInputs(options: VerificationOptions) {
  if (!options.branding?.name) throw new Error("Company name is required");
  else if (!options.branding?.logo) throw new Error("Company logo is required");
  else if (!options.branding?.links?.cookies) throw new Error("Link to company cookie policy is required");
  else if (!options.branding?.links?.termsOfService) throw new Error("Link to company terms of service is required");
  else if (!isValidURL(options.branding.logo)) throw new Error("Invalid logo URL provided");
  else if (!isValidURL(options.branding.links.cookies)) throw new Error("Invalid cookies URL provided");
  else if (!isValidURL(options.branding.links.termsOfService)) throw new Error("Invalid terms of service URL provided");
}

/* 1) Use first language in file as default
 * 2) Use website's primary language
 * 3) Use client's primary language if available */
function initializeLanguage(options: VerificationOptions) {
  let currentLanguage = Object.values(language_file.translations)[0];
  if (language_file.translations[options.primary_language]) currentLanguage = language_file.translations[options.primary_language];
  const userLang = ((navigator.language) ? navigator.language : navigator['userLanguage']).split("-")[0].toUpperCase();
  if (language_file.translations[userLang]) currentLanguage = language_file.translations[userLang];

  return currentLanguage;
}

function shouldShowModal(options: VerificationOptions) {
  const cookieUrl = getAbsoluteURL(options.branding.links.cookies, true) as URL,
    termsOfServiceUrl = getAbsoluteURL(options.branding.links.termsOfService, true) as URL;

  // return immediately if the user is on cookie or TOS page
  if (cookieUrl.host === window.location.host && cookieUrl.pathname === window.location.pathname) return false;
  else if (termsOfServiceUrl.host === window.location.host && termsOfServiceUrl.pathname === window.location.pathname) return false;

  return true;
}

const AgeVerification = {
  /**
   * @returns {Promise<boolean>} True whether the user is of age and agrees to TOS and cookie policy, false otherwise
   */
  prompt: (options?: VerificationOptions): Promise<boolean> => {
    options = Object.assign({
      minimumAge: 18,
      cookie_ttl: 2592000,
      disableScrolling: true,
      backgroundBlur: true,
      models: ["kERQDXH", "8aLOs5g", "atUVnRj", "hBn9ona", "XDszZnM", "lHojdWj", "eTQTZtz", "C6Xx8rH", "j2odobq", "5xsHsyo", "omyy7Ct", "FYFCgJr", "Bbww6Ud", "RJ8FNDb", "gKhQO5E", "Vz7yaEy", "1JsqDGw", "S29mzqv"].map(e => `https://i.imgur.com/${e}.jpg`),
      exit: false
    }, options);
    options.branding.name = HTML.escape(options.branding.name);

    verifyInputs(options);
    let currentLanguage = initializeLanguage(options);

    if (!shouldShowModal(options)) return;

    // return immediately if the user has already agreed (unless its localhost)
    if (Cookies.get("verifiedAge") === "1" && window.location.hostname !== 'localhost') return

    const parsingContext: ParsingContext = Object.assign(options, {organisation: language_file.organisation});

    const container = <div className="av-container"/>;
    const modal = <div className="av-modal"/>;
    container.append(modal);
    document.body.append(container);

    if (options.backgroundBlur) container.classList.add("av-blur");
    if (options.disableScrolling) document.body.classList.add("av-no-scroll");
    container.style.setProperty("--primaryColor", options?.styling?.primaryColor || "#ff0000");

    /**
     * Promise returns true if user agree to terms of service and is over the minimum age
     * and returns false if they choose to exit
     */
    function stepOne() {
      return new Promise(resolve => {
        let build = () => {
        }

        let controls = (
          <div className="av-controls">
            <button onClick={() => resolve(true)}>{parseContent(currentLanguage.i_am_of_age, parsingContext)}</button>
          </div>
        );

        if (options.exit === true || typeof options.exit === "string" || typeof options.exit === "function") {
          controls.prepend(
            <button class="av-secondary" onClick={() => {
              if (options.exit === true) document.body.innerHTML = "";
              else if (typeof options.exit === "string") {
                if (isValidURL(options.exit)) window.location.href = getAbsoluteURL(options.exit) as string;
                else throw new Error("Invalid exit URL provided");
              } else if (typeof options.exit === "function") options.exit.call(undefined);
              resolve(false);
            }}>{parseContent(currentLanguage.exit, parsingContext)}</button>
          );
        }

        build = () => {
          modal.innerHTML = "";
          modal.append(...[
            <Languages languages={language_file} callback={(key) => {
              currentLanguage = language_file.translations[key];
              build();
            }}/>,
            <img src={options.branding.logo} alt="Logo" class="av-logo"/>,
            ...parseContent(currentLanguage.acknowledgement, parsingContext),
            controls,
            <a class="av-tos"
               href={options.branding.links.termsOfService}>{parseContent(currentLanguage.more_information, parsingContext)}</a>
          ])
        }

        build();
      });
    }

    /**
     * Promise returns true if the user thinks they are a minor
     * and returns false if they think they are an adult
     */
    function stepTwo() {
      return new Promise((resolve) => {
        modal.innerHTML = "";

        const model = options.models[Math.floor(Math.random() * options.models.length)];

        modal.append(...[
          <img class="av-model" src={model} alt="Model"/>,
          ...parseContent(currentLanguage.awareness.question, parsingContext),
          <div class="av-controls">
            <button onClick={() => resolve(false)}>{parseContent(currentLanguage.yes, parsingContext)}</button>
            <button onClick={() => resolve(true)}>{parseContent(currentLanguage.no, parsingContext)}</button>
          </div>,
          <Footer options={options}/>
        ])
      })
    }

    /**
     * Promise resolves when the user clicks "i understand", and cookie is saved
     */
    function stepThree(answer) {
      return new Promise<void>((resolve) => {
        modal.querySelectorAll(":not(img:first-of-type)").forEach((el) => el.remove());
        modal.style.width = "min-content";

        const response = answer ? currentLanguage.awareness.answers.correct : currentLanguage.awareness.answers.incorrect;

        let okButton: HTMLButtonElement;
        modal.append(
          <span>{parseContent(response.title, parsingContext)}</span>,
          <div class="av-content"
               onscroll={(e) => {
                 if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)
                   okButton.disabled = false;
               }}
          >{parseContent(response.description, parsingContext)}</div>,
          (okButton = <button disabled={true} onclick={() => {
            Cookies.set("verifiedAge", 1, {
              Path: "/",
              Expires: new Date(Date.now() + options.cookie_ttl * 1000)
            });
            resolve()
          }}>{parseContent(currentLanguage.comprehension, parsingContext)}</button>),
          <Footer options={options}/>
        )
      });
    }

    return new Promise<boolean>(async (resolve, reject) => {
      try {
        const isOfAge = await stepOne();
        if (isOfAge) {
          const answer = await stepTwo();
          await stepThree(answer);
          resolve(true);
        } else resolve(false);
      } catch (e) {
        console.error("Age-Verification Error:\n", e);
        reject(e);
      } finally {
        container.remove();
        document.body.classList.remove("av-no-scroll");
      }
    });
  }
}

export default AgeVerification;
