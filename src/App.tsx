import React from 'react'
import './App.css'
import TextWithBtns from './components/TextWithBtns/TextWithBtns'

function App() {
  return (
    <div>
      <TextWithBtns
        rightSideButtons={[
          {
            text: 'clear',
            callback: (setInputText) => {
              setInputText('')
            },
          },
          {
            text: 'hello world',
            callback: (setInputText) => {
              setInputText('Hello world!')
            },
          },
        ]}
      />
    </div>
  )
}

export default App
