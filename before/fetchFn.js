import { JSDOM } from "jsdom";

function createCachedFetcher(fetchFn) {
  let queryKey = null;
  let data = null;

  return async function (query) {
    if (query !== queryKey) {
      data = await fetch(fetchFn);
      return data;
    } else {
      return data;
    }
  };
}

const result = await fetch("https://designbase.co.kr/figma-01-3/");
const html = await result.text();

const dom = new JSDOM(html);
const document = dom.window.document;

const content =
  document.querySelector(".entry-content") || document.querySelector("article");

console.log($.html().slice(0, 1000));
console.log(content?.textContent);
