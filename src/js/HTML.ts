import showdown from "showdown";

const converter = new showdown.Converter();
converter.setFlavor('github');

const HTML = {
  parseString: (str: string) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    return [...div.children];
  },
  escape: (obj: any): any => {
    if (typeof obj === "object") {
      if (!Array.isArray(obj)) return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, HTML.escape(value)]));
      else return obj.map((value) => HTML.escape(value));
    } else if (typeof obj === "string") {
      return obj.toString()
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
    }
    return obj;
  },
  parseMarkdown: (str: string) => {
    return HTML.parseString(converter.makeHtml(str));
  }
}

export default HTML;
