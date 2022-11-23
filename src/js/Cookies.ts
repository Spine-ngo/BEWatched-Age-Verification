interface CookieAttributes {
  /** Indicates the maximum lifetime of the cookie as an HTTP-date timestamp.<br>If unspecified, the cookie becomes a <b>session cookie</b>. A session finishes when the client shuts down, after which the session cookie is removed.<br>&#8203;<br><p style="color:#be9117"><b>Warning:</b> Many web browsers have a session restore feature that will save all tabs and restore them the next time the browser is used. Session cookies will also be restored, as if the browser was never closed.</p><br>&#8203;<br>When an <code>Expires</code> date is set, the deadline is relative to the client the cookie is being set on, not the server. */
  Expires?: Date
  /** Indicates the path that must exist in the requested URL for the browser to send the Cookie header.<br>The forward slash (<code>/</code>) character is interpreted as a directory separator, and subdirectories are matched as well. For example, for <code>/docs</code>,<ul><li>the request paths <code>/docs</code>, <code>/docs/</code>, <code>/docs/Web/</code>, and <code>/docs/Web/HTTP</code> will all match.</li><li>the request paths <code>/</code>, <code>/docsets</code>, <code>/fr/docs</code> will not match.</li></ul> */
  Max_Age?: number
  /** Defines the host to which the cookie will be sent.<br>If omitted, this attribute defaults to the host of the current document URL, not including subdomains.<br>Contrary to earlier specifications, leading dots in domain names (<code>.example.com</code>) are ignored.<br>Multiple host/domain values are not allowed, but if a domain is specified, then subdomains are always included. */
  Domain?: string
  /** Indicates that the cookie is sent to the server only when a request is made with the <code>https:</code> scheme (except on localhost), and therefore, is more resistant to <a href="https://developer.mozilla.org/en-US/docs/Glossary/MitM">man-in-the-middle attacks</a>.<br>&#8203; <br><b>Note:</b> Do not assume that <code>Secure</code> prevents all access to sensitive information in cookies (session keys, login details, etc.). Cookies with this attribute can still be read/modified either with access to the client's hard disk or from JavaScript if the <code>HttpOnly</code> cookie attribute is not set.<br>Insecure sites (<code>http:</code>) cannot set cookies with the <code>Secure</code> attribute (since Chrome 52 and Firefox 52). For Firefox, the <code>https:</code> requirements are ignored when the <code>Secure</code> attribute is set by localhost (since Firefox 75). */
  Path?: string | "/"
  /** Indicates that the cookie is sent to the server only when a request is made with the <code>https:</code> scheme (except on localhost), and therefore, is more resistant to <a href="https://developer.mozilla.org/en-US/docs/Glossary/MitM">man-in-the-middle attacks</a>.<br>&#8203; <br><b>Note:</b> Do not assume that <code>Secure</code> prevents all access to sensitive information in cookies (session keys, login details, etc.). Cookies with this attribute can still be read/modified either with access to the client's hard disk or from JavaScript if the <code>HttpOnly</code> cookie attribute is not set. <br>Insecure sites (<code>http:</code>) cannot set cookies with the <code>Secure</code> attribute (since Chrome 52 and Firefox 52). For Firefox, the <code>https:</code> requirements are ignored when the <code>Secure</code> attribute is set by localhost (since Firefox 75). */
  Secure?: boolean
  /** Forbids JavaScript from accessing the cookie, for example, through the <code>Document.cookie</code> property. Note that a cookie that has been created with <code>HttpOnly</code> will still be sent with JavaScript-initiated requests, for example, when calling <code>XMLHttpRequest.send()</code> or <code>fetch()</code>. This mitigates attacks against cross-site scripting (<a href="https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting"><code>XSS</code></a>). */
  HttpOnly?: boolean
  /** Controls whether or not a cookie is sent with cross-origin requests, providing some protection against cross-site request forgery attacks (<a href="https://developer.mozilla.org/en-US/docs/Glossary/CSRF"><code>CSRF</code></a>).<br>The possible attribute values are: <ul><li><code>Strict</code><p>&#160;&#160;&#160;&#160;means that the browser sends the cookie only for same-site requests, that is, requests originating from the same site that set the cookie. If a request originates from a URL different from the current one, no cookies with the <code>Strict</code> attribute are sent.</p></li><li><code>Lax</code><p>&#160;&#160;&#160;&#160;means that the cookie is not sent on cross-site requests, such as on requests to load images or frames, but is sent when a user is navigating to the origin site from an external site (for example, when following a link). This is the default behavior if the <code>SameSite</code> attribute is not specified.</p></li><li><code>None</code><p>&#160;&#160;&#160;&#160;means that the browser sends the cookie with both cross-site and same-site requests. The <code>Secure</code> attribute must also be set when setting this value, like so <code>SameSite=None; Secure</code></p></li></ul> */
  SameSite?: "Strict" | "Lax" | "None"
}

const Cookies = {
  get(key: string): string | undefined {
    key = key.trim().toLowerCase();
    const _key = this.keys().find(k => k.toLowerCase() === key);
    return _key !== undefined ? this.entries()[_key] : undefined;
  },
  has(key: string): boolean {
    return this.get(key) !== undefined;
  },
  remove(key: string): void {
    key = key.trim().toLowerCase();
    const _key = this.keys().find(k => k.toLowerCase() === key);
    if (_key !== undefined) {
      this.set(_key, "", {
        Path: "/",
        Max_Age: 0
      });
    }
  },
  set(key: string, value: string | number | boolean, attributes?: CookieAttributes): void {
    if ("()<>@,;:\\\"/[]?={}\t\n\r ".split("").some(n => key.includes(n))) throw new Error("Key contains disallowed character");
    value = String(value);

    const attr = [`${key}=${encodeURIComponent(value)}`];
    Object.entries(attributes || {}).forEach(([_key, _value]) => {
      if (_value instanceof Date) _value = _value.toUTCString();
      else if (typeof _value === "number") _value = String(_value);

      if (typeof _value === "string") attr.push(`${_key}=${_value}`);
      else if (typeof _value === "boolean" && _value === true) attr.push(_key);
    });

    document.cookie = attr.join("; ");
  },
  entries(): { [key: string]: string } {
    let cookies = {};
    if (document.cookie.length > 0) {
      document.cookie.split(";").map(n => n.trim().split("=", 2)).forEach(([key, value]) => {
        cookies[key] = value;
      });
    }
    return cookies;
  },
  keys(): string[] {
    return Object.keys(this.entries());
  },
  values(): string[] {
    return Object.values(this.entries());
  }
};

export default Cookies;
