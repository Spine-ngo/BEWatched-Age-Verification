import {h} from "./plugins/dom-chef@5.1.0";

export function parseContext(string: string, context: object) {
  let result = string;
  let regex = /\{\{([\w\d.]+)}}/g;
  let match = regex.exec(string);
  while (match != null) {
    let value = match[1].split(".").reduce((obj, i) => obj[i], context);
    result = result.replace(match[0], value);
    match = regex.exec(string);
  }
  return result;
}

export function isValidURL(url) {
  return Boolean(getAbsoluteURL(url));
}

export function getAbsoluteURL(url, asURL = false): URL | string {
  try {
    let urlObj = new URL((<a href={url}/>).href);
    return asURL ? urlObj : urlObj.href;
  } catch (e) {
    return undefined;
  }
}
