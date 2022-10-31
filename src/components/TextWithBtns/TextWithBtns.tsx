import React, { useState } from 'react'
import { IBtn } from './types'
import styles from './textWithBtns.module.css'

interface IProps {
  leftSideButtons?: IBtn[]
  rightSideButtons?: IBtn[]
}

const TextWithBtns: React.FC<IProps> = ({ leftSideButtons, rightSideButtons }) => {
  const [inputText, setInputText] = useState<string>('')

  const handleValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value
    setInputText(text)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        {leftSideButtons?.map((btn: IBtn, idx: number) => (
          <button onClick={() => btn.callback(inputText, setInputText)} className={styles.button} key={idx}>
            {btn.text}
          </button>
        ))}
      </div>
      <input type='text' onChange={handleValueChange} value={inputText} className={styles.text} />
      <div className={styles.rightSide}>
        {rightSideButtons?.map((btn: IBtn, idx: number) => (
          <button onClick={() => btn.callback(inputText, setInputText)} className={styles.button} key={idx}>
            {btn.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TextWithBtns
