import language_file from "../../lang/nl.json";
import {h} from "../plugins/dom-chef@5.1.0";
import {VerificationOptions} from "../types";

export default function Footer({options}: { options: VerificationOptions }) {
  return (
    <div className="av-footer">
      <a href="/" title={options.branding.name}><img src={options.branding.logo} alt={options.branding.name}/></a>
      <a href={language_file.organisation.website} target="_blank" title={language_file.organisation.name}><img
        src={language_file.organisation.logo} alt={`${language_file.organisation.name} Logo`}
        style={{filter: "invert(1) grayscale(1)"}}/></a>
    </div>
  )
}
