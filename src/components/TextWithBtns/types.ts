export interface IBtn {
  text: string
  callback: (text: string, setInputText: (text: string) => void) => void
}
