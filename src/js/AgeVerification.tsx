import { h } from "dom-chef";
import {VerificationOptions} from "./types";
// @ts-ignore
import langs from "../lang/nl.json5";
// @ts-ignore
import spineLogo from "../img/spine.png";
import Cookies from "./Cookies";

const DEV_ENV = new URL(window.location.href).hostname === "localhost";

const translate = (str: string, ...args: any) => {
    return str.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

const format = (str: string, args: any[]) => {
    return translate(str, ...args);
}

const asHTML = (str: string) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return [...div.children];
}

const AgeVerification = {
    prompt: (options?: VerificationOptions) : Promise<boolean> =>  {
        options = Object.assign({
            minimumAge: 18,
            cookie_ttl: 2592000,
            disableScrolling: true,
            backgroundBlur: true,
            models: [
                "https://i.imgur.com/kERQDXH.jpg",
                "https://i.imgur.com/8aLOs5g.jpg",
                "https://i.imgur.com/atUVnRj.jpg",
                "https://i.imgur.com/hBn9ona.jpg",
                "https://i.imgur.com/XDszZnM.jpg",
                "https://i.imgur.com/lHojdWj.jpg",
                "https://i.imgur.com/eTQTZtz.jpg",
                "https://i.imgur.com/C6Xx8rH.jpg",
                "https://i.imgur.com/j2odobq.jpg",
                "https://i.imgur.com/5xsHsyo.jpg",
                "https://i.imgur.com/omyy7Ct.jpg",
                "https://i.imgur.com/FYFCgJr.jpg",
                "https://i.imgur.com/Bbww6Ud.jpg",
                "https://i.imgur.com/RJ8FNDb.jpg",
                "https://i.imgur.com/gKhQO5E.jpg",
                "https://i.imgur.com/Vz7yaEy.jpg",
                "https://i.imgur.com/1JsqDGw.jpg",
                "https://i.imgur.com/S29mzqv.jpg",
            ]
        }, options);

        // return immediately if the user is on cookie or TOS page
        if((() => {
            const
              cookieUrl = new URL((<a href={options.links.cookies}/>).href),
              tosUrl = new URL((<a href={options.links.termsOfService}/>).href);

            if(cookieUrl.origin === window.location.origin && cookieUrl.pathname === window.location.pathname) return true
            else if(tosUrl.origin === window.location.origin && tosUrl.pathname === window.location.pathname) return true

            return false;
        })()) return

        // return immediately if the user has already agreed
        if(Cookies.get("verifiedAge") === "1" && !DEV_ENV) return

        // first language in array as default
        let lang = Object.values(langs.languages)[0];

        // use website's primary language
        if(langs.languages[options.primary_language]) lang = langs.languages[options.primary_language];

        // use computers language if available
        // @ts-ignore
        const userLang = ((navigator.language) ? navigator.language : navigator.userLanguage).split("-")[0].toUpperCase();
        if(langs.languages[userLang]) lang = langs.languages[userLang];


        return new Promise((topLevelResolve) => {
            const container : HTMLDivElement = <div class="av-container"/>;
            if(options.backgroundBlur) container.classList.add("av-blur");
            const modal : HTMLDivElement = <div class="av-modal"/>;

            container.append(modal);
            document.body.append(container);

            if(options.disableScrolling) document.body.classList.add("av-no-scroll");

            container.style.setProperty("--primaryColor", options?.styling?.primaryColor || "red");

            (() : Promise<void> => {
                return new Promise((resolve) => {
                    let build = () => {}

                    const langSelector = (() => {
                        if(Object.keys(langs).length < 2) return "";

                        return <p>
                            {Object.keys(langs.languages).map((key) => {
                                return <a href="javascript:void(0)" onClick={() => {
                                    lang = langs.languages[key];
                                    build();
                                }}>{key}</a>
                            }).flatMap((x) => [<span> | </span>, x]).slice(1)}
                        </p>
                    })();

                    build = () => {
                        modal.innerHTML = "";
                        modal.append(...[
                            langSelector,
                            <img src={options.branding.logo} alt="Logo" class="av-logo"/>,
                            ...asHTML(format(lang[0].content, [options.branding.name, options.minimumAge, options.links.cookies, options.links.termsOfService])),
                            <div class="va-controls">
                                <button class="va-secondary" onclick={() => {
                                    document.body.innerHTML = "";
                                    topLevelResolve(false)
                                }} dangerouslySetInnerHTML={{__html: format(lang[0].exit, [])}}/>
                                <button onclick={() => resolve()} dangerouslySetInnerHTML={{__html: format(lang[0].i_am_of_age, [options.minimumAge])}}/>
                            </div>,
                            <a class="av-tos" href={options.links.termsOfService}>{lang[0].more_information}</a>
                        ])
                    }

                    build();
                });
            })().then(() => {
                return new Promise((resolve) => {
                    modal.innerHTML = "";

                    const model = options.models[Math.floor(Math.random() * options.models.length)];

                    modal.append(...[
                        <img class="av-model" src={model} alt="Model"/>,
                        ...asHTML(format(lang[1].content, [options.minimumAge])),
                        <div class="va-controls">
                            <button onClick={() => resolve(false)}>{lang[1].yes}</button>
                            <button onClick={() => resolve(true)}>{lang[1].no}</button>
                        </div>,
                        <div class="va-footer">
                            <a href="/" title={options.branding.name}><img src={options.branding.logo} alt={options.branding.name}/></a>
                            <a href={langs.organisation.website} target="_blank" title={langs.organisation.name}><img src={langs.organisation.logo} alt={`${langs.organisation.name} Logo`} style={{filter: "invert(1) grayscale(1)"}}/></a>
                        </div>
                    ])
                }).then((answer) => {
                    return new Promise<void>((resolve) => {
                        modal.querySelectorAll(":not(img:first-of-type)").forEach((el) => el.remove());
                        modal.style.width = "min-content";

                        const langSrc = answer ? lang[2].right : lang[2].wrong;

                        let okButton : HTMLButtonElement;
                        modal.append(
                          <span dangerouslySetInnerHTML={{__html: format(langSrc.header, [])}}/>,
                          <div class="va-content"
                               dangerouslySetInnerHTML={{__html: format(langSrc.content, [options.branding.name])}}
                               onscroll={(e) => {
                                    if (e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight)
                                        okButton.disabled = false;
                               }}
                          />,
                          (okButton = <button disabled={true} onclick={() => {
                              resolve()
                              Cookies.set("verifiedAge", 1, {
                                  Path: "/",
                                  Expires: new Date(Date.now() + options.cookie_ttl * 1000)
                              });
                              topLevelResolve(true);
                          }}>{lang[2].i_understand}</button>),
                          <div class="va-footer">
                              <a href="/"><img src={options.branding.logo} alt={options.branding.name} /></a>
                              <a href="https://spine.ngo"><img src={spineLogo} alt="Logo" style={{ filter: "invert(1) grayscale(1)" }} /></a>
                          </div>
                        )
                    });
                })
            }).catch((e) => {
                console.error("Age-Verification Error:\n", e);
            }).finally(() => {
                container.remove();
                document.body.classList.remove("av-no-scroll");
            })
        });
    }
}

export default AgeVerification;