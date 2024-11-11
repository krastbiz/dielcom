import styled from 'styled-components'
import { useState } from 'react'

import { getProductPageUrl } from '../../lib'
import { Link } from '../ui/Link'

export const ProductSideBar = ({ categories }) => {
    const [expandedList, setExpandedList] = useState([])

    const toggleCategory = (index) => {
        setExpandedList((prevList) =>
            prevList.includes(index) ? prevList.filter((item) => item !== index) : [...prevList, index],
        )
    }

    return (
        <SideBarWrapper>
            {categories.map((category, index) => {
                const isExpanded = expandedList.includes(index)
                return (
                    <CategoryCard key={category.id}>
                        <CategoryTitle onClick={() => toggleCategory(index)}>
                            {category.name}
                            <Arrow>{isExpanded ? '︿' : '﹀'}</Arrow>
                        </CategoryTitle>
                        <ProductsList expanded={isExpanded}>
                            {category.products.map((product) => (
                                <ProductItem key={product.id}>
                                    <Link href={getProductPageUrl(category.id, product.id)}>{product.label}</Link>
                                </ProductItem>
                            ))}
                        </ProductsList>
                    </CategoryCard>
                )
            })}
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
    padding: 0 20px;
    position: relative;
    top: -250px;
    left: 100px;
    background-color: ${({ theme }) => theme.colors.background};
    border-left: 1px solid ${({ theme }) => theme.colors.border};
    padding-bottom: 2px;
`

const CategoryCard = styled.div`
    margin-bottom: 35px;
    padding-left: 25px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const CategoryTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 16px;
    line-height: 43px;
    width: 100%;
    color: ${({ theme }) => theme.colors.main};

    &:hover {
        color: ${({ theme }) => theme.colors.active};
    }
`

const Arrow = styled.span`
    font-size: 12px;
    margin-left: 8px;
    font-weight: 600;
`

const ProductsList = styled.ul`
    max-height: ${({ expanded }) => (expanded ? '500px' : '0px')};
    opacity: ${({ expanded }) => (expanded ? '1' : '0')};
    overflow: hidden;
    list-style-type: none;
    padding: ${({ expanded }) => (expanded ? '10px 0' : '0')};
    margin: 0;
    transition:
        max-height 0.3s ease,
        opacity 0.3s ease,
        padding 0.3s ease;
`

const ProductItem = styled.li`
    margin-bottom: 12px;

    a {
        color: ${({ theme }) => theme.colors.textGray};
        text-decoration: none;
        font-size: 16px;

        &:hover {
            color: ${({ theme }) => theme.colors.active};
        }
    }
`
