class HTMLGen {
  a(str) {
    return `<a>${str}</a>`;
  }
​
  b(str) {
    return `<b>${str}</b>`;
  }
​
  p(str) {
    return `<p>${str}</p>`;
  }
​
  body(str) {
    return `<body>${str}</body>`;
  }
​
  div(str) {
    return `<div>${str}</div>`;
  }
​
  span(str) {
    return `<span>${str}</span>`;
  }
​
  title(str) {
    return `<title>${str}</title>`;
  }
​
  comment(str) {
    return `<!--${str}-->`;
  }
}
​
let g = new HTMLGen();
​
​