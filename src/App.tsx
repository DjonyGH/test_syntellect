import React from 'react'
import './App.css'
import Autocomplete from './components/Autocomplete/Autocomplete'
import TextWithBtns from './components/TextWithBtns/TextWithBtns'

// Красоту не стал наводить, извините, кажется в этих задачах это не главное
// В mobx надобности тоже не увидел, но если есть необходимость, можно все локальные стейты вынесты в mobx

function App() {
  return (
    <div className='App'>
      <div>
        <h1>First task</h1>
        <div className='content'>
          <TextWithBtns
            rightSideButtons={[
              {
                text: 'clear',
                callback: (_, setInputText) => {
                  setInputText('')
                },
              },
              {
                text: 'hello world',
                callback: (_, setInputText) => {
                  setInputText('Hello world!')
                },
              },
            ]}
          />
          <TextWithBtns
            rightSideButtons={[
              {
                text: 'alert',
                callback: (text) => {
                  alert(text)
                },
              },
            ]}
            leftSideButtons={[
              {
                text: 'number alert',
                callback: (text) => {
                  if (!isNaN(parseFloat(text)) && isFinite(+text)) alert(text)
                },
              },
            ]}
          />
        </div>
      </div>
      <div>
        <h1>Second task</h1>
        <div className='content'>
          <Autocomplete minSearchLength={1} maxItems={3} />
          <Autocomplete minSearchLength={1} maxItems={10} />
        </div>
      </div>
    </div>
  )
}

export default App
