export function createLinkProject(url: string, text: string) {
  const link = document.createElement("a");
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.href = url;
  link.innerHTML = text;
  return link;
}
