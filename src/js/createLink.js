const createLink = (endPoint, type='Repository') => {
  const tagA = document.createElement('a')
  tagA.target="_blank"
  tagA.rel="noreferrer noopener"

  if(type === 'Repository') {
    tagA.href = `https://github.com/Soni295/${endPoint}`
    tagA.title = `my github repository ${name}`
  } else {
    tagA.href = `https://soni295.github.io/${endPoint}`
    tagA.title = `page demotration ${name}`
  }
  tagA.innerHTML = type

  return tagA
}
