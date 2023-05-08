/* eslint-disable no-useless-escape */
/**
 * Must have '@' and '.'
 * @param text 
 * @returns 
 */
export const isValidEmail = (text: string): boolean => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(text)
}