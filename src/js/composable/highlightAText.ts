export const highlightAText = (haystack: string, needle: string) => {
  return haystack.replace(needle, `<span class="highlight">${needle}</span>`)
}
