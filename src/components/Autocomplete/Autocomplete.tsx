import React, { useState } from 'react'
import { getCountryByName } from '../../api/apiService'
import styles from './autocomplete.module.css'
import AutocompleteItem from './components/AutocompleteItem'
import { ICountry } from './types'

// Если бы на проекте была необходимость делать автокоплиты для разных сущностей, не только для стран,
// я бы сделал более низкоуровневый универсальный компонент Autocomplete,
// который имел следующий интерфейс:

// interface IAutocompleteProps<IItem> {
//   maxItems?: number
//   minSearchLength?: number
//   getItems: () => Promise<IItem[]>
//   itemRender: (item: IItem) => React.ReactNode
// }

// И на основе этого компонента делал бы уже автокомплиты сущностей - AutocompleteCountry, AutocompleteCar и т.д.

interface IProps {
  maxItems?: number
  minSearchLength?: number
}

const Autocomplete: React.FC<IProps> = ({ maxItems = 3, minSearchLength = 2 }) => {
  const [searchText, setSearchText] = useState<string>('')
  const [items, setItems] = useState<ICountry[]>([])
  const [selectedItem, setSelectedItem] = useState<ICountry | null>(null)

  const handleValueChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value
    setSearchText(searchText)
    if (searchText.length >= minSearchLength) {
      const gotItems: ICountry[] = (await getCountryByName(searchText)).slice(0, maxItems)
      setItems(gotItems)
    } else {
      setItems([])
    }
  }

  const handleSelectItem = (item: ICountry) => {
    setSelectedItem(item)
  }

  const handleClearItem = () => {
    setSelectedItem(null)
    // Здесь надо подумать, надо ли чистить значение в инпуте и полученные итемы или достаточно почистить только выбранный итем
    setSearchText('')
    setItems([])
  }

  return (
    <div className={styles.container}>
      {selectedItem ? (
        <AutocompleteItem isInList={false} clearItem={handleClearItem} item={selectedItem} />
      ) : (
        <div className={styles.mockItem}>Select country</div>
      )}

      <input type='text' onChange={handleValueChange} value={searchText} />

      {items.map((item: ICountry, idx: number) => (
        <AutocompleteItem isInList={true} selectItem={() => handleSelectItem(item)} item={item} key={idx} />
      ))}
    </div>
  )
}

export default Autocomplete
