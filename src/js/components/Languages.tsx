import {h} from "../plugins/dom-chef@5.1.0";

export default function Languages({languages, callback}) {
  if (Object.keys(languages.translations).length < 2) return "";

  return <p>
    {Object.keys(languages.translations).map((key) => {
      return <a href="javascript:void(0)" onClick={() => {
        callback.call(undefined, key);
      }}>{key}</a>
    }).flatMap((x) => [" | ", x]).slice(1)}
  </p>
}
