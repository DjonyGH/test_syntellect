export interface IBtn {
  text: string
  callback: (setInputText: (text: string) => void) => void
}
