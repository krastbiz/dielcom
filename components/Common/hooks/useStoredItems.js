import { useState, useEffect } from "react"

const STORAGE_KEY = 'selectedItems'

export const useStoredItems = () => {
    const [storedItems, setStoredItems] = useState({})

    useEffect(() => {
        const json = localStorage.getItem(STORAGE_KEY)
        if (json) {
            try {
                const parsed = JSON.parse(json)
                setStoredItems(parsed)
            } catch (e) {
                console.error('Invalid localStorage data')
            }
        }
    }, [])

    const updateItem = (key, data) => {
        const updated = {
            ...storedItems,
            [key]: {
                ...storedItems[key],
                ...data,
            },
        }
        setStoredItems(updated)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    }

    return { storedItems, updateItem }
}
