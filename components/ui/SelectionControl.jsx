import styled from 'styled-components'

export const SelectionControl = ({ itemKey, partnumber, brand, storedItem, updateItem, price }) => {
    const quantity = storedItem?.quantity ?? 1
    const selected = (storedItem?.selected && storedItem?.quantity > 0) ?? false

    const handleToggle = (e) => {
        const checked = e.target.checked
        updateItem(itemKey, {
            partnumber,
            brand,
            selected: checked,
            quantity: quantity || 1,
            price,
        })
    }

    const increment = () => {
        updateItem(itemKey, {
            partnumber,
            brand,
            quantity: quantity + 1,
            selected: true,
        })
    }

    const decrement = () => {
        const newQty = quantity - 1
        updateItem(itemKey, {
            partnumber,
            brand,
            quantity: newQty,
            selected: newQty > 0,
        })
    }

    return (
        <QtyWrapper>
            <label>
                <input type="checkbox" checked={selected} onChange={handleToggle} />
            </label>
            <QtyControls visible={selected}>
                <QtyButton onClick={decrement}>−</QtyButton>
                <QtyValue>{quantity}</QtyValue>
                <QtyButton onClick={increment}>+</QtyButton>
            </QtyControls>
        </QtyWrapper>
    )
}

const QtyWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

const QtyControls = styled.div`
    display: flex;
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    align-items: center;
    gap: 6px;
`

const QtyButton = styled.button`
    padding: 5px 10px;
    border: none;
    background: ${({ theme }) => theme.colors.active};
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
`

const QtyValue = styled.span`
    width: 30px;
    text-align: center;
    font-weight: bold;
`
