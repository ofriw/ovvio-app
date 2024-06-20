const matchHtmlRegExp = /["'&<>$]/;

export function escapeHtml(string: string): string {
  const str = "" + string;
  const match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  let escape;
  let html = "";
  let index;
  let lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = "&quot;";
        break;
      case 36: // $
        escape = "&#36;";
        break;
      case 38: // &
        escape = "&amp;";
        break;
      case 39: // '
        escape = "&#x27;"; // modified from escape-html; used to be '&#39'
        break;
      case 60: // <
        escape = "&lt;";
        break;
      case 62: // >
        escape = "&gt;";
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}

export function escapeTextForBrowser(text: string | boolean | number): string {
  if (typeof text === "boolean" || typeof text === "number") {
    return "" + text;
  }
  return escapeHtml(text);
}

export function noop() {}

export function trimContent(child: any): void {
  if (child.content) {
    child.content = child.content.trim();
  } else if (child.children) {
    child.children.forEach(trimContent);
  }
}
