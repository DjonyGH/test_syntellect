import React from 'react'
import styles from './autocompleteItem.module.css'
import { ICountry } from './../types'

interface IProps {
  isInList: boolean
  clearItem?: () => void
  selectItem?: (item: ICountry) => void
  item: ICountry
}

const AutocompleteItem: React.FC<IProps> = ({ isInList, clearItem, selectItem, item }) => {
  return (
    <div className={`${styles.item} ${isInList ? styles.inList : ''}`} onClick={() => isInList && selectItem?.(item)}>
      <img src={item.flag} />
      <div>
        <div>
          <b>{item.fullName}</b>
        </div>
        <div>{item.name}</div>
      </div>
      {!isInList && (
        <div className={styles.close} onClick={() => clearItem?.()}>
          x
        </div>
      )}
    </div>
  )
}

export default AutocompleteItem
