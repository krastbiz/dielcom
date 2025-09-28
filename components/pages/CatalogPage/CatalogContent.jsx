import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { CATEGORIES_ARRAY } from '../../../mock-data'

import { Link } from '../../ui/Link'
import { getProductPageUrl, breakpoint, useDeviceCheck } from '../../../lib'
import { H3 } from '../../ui/Typography'
import { Container } from '../../ui/layouts/Container'

export const CatalogMenuContent = () => {
    const [activeCategory, setActiveCategory] = useState('wirelessTechnologies')
    const { isMobile, isTablet } = useDeviceCheck()
    const isResponsiveView = isMobile || isTablet

    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId)
    }

    const handleCategoryHover = (categoryId) => {
        if (activeCategory !== categoryId && !isResponsiveView) {
            setActiveCategory(categoryId)
        }
    }

    return (
        <MenuWrapper>
            <CategoriesContainer>
                <CategoriesList>
                    {Array.from(CATEGORIES_ARRAY.entries()).map(([key, category]) => (
                        <CategoriesItem
                            data-category-item
                            onClick={() => handleCategoryClick(key)}
                            onMouseEnter={() => handleCategoryHover(key)}
                            key={key}
                            isSelected={key === activeCategory}
                        >
                            <MenuItemIcon src={category.iconUrl} />
                            {!isResponsiveView && category.name}
                        </CategoriesItem>
                    ))}
                </CategoriesList>
            </CategoriesContainer>

            <SubMenuContainer>
                {activeCategory !== null && (
                    <>
                        <H3>{CATEGORIES_ARRAY.get(activeCategory).name}</H3>
                        <SubMenuList>
                            {CATEGORIES_ARRAY.get(activeCategory).products.map((product) => (
                                <SubmenuItem>
                                    <Link
                                        href={getProductPageUrl(CATEGORIES_ARRAY.get(activeCategory).id, product.id)}
                                        key={product.id}
                                        onClick={() => handleCloseMenus()}
                                    >
                                        {product.label}
                                    </Link>
                                </SubmenuItem>
                            ))}
                        </SubMenuList>
                    </>
                )}
            </SubMenuContainer>
        </MenuWrapper>
    )
}

const MenuWrapper = styled(Container)`
    background: #1c1c1c;
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    height: 400px;
    ${breakpoint.laptop`
        top: 90px;
    `}
`

const CategoriesContainer = styled.div`
    width: 35%;
    display: flex;
    ${breakpoint.tablet`
        width: auto;
    `}
`

const CategoriesList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    justify-content: space-between;
    flex-grow: 1;
    ${breakpoint.laptop`
        padding-right: 3px;
        width: 255px;
    `}
`

const CategoriesItem = styled.li`
    border-radius: 4px;
    background-color: ${({ theme, isSelected }) => isSelected && theme.colors.altBackground};
    height: 28px;
    padding: 5px 10px;
    padding-right: 5px;
    cursor: pointer;
    font-size: 18px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: ${({ theme }) => theme.colors.altBackground};
    }
    ${breakpoint.laptop`
        font-size: 16px;
    `}
    ${breakpoint.tablet`
        font-size: 13px;
    `}
`

const SubMenuContainer = styled.div`
    padding-left: 20px;
    background-color: #404040;
    width: 65%;
    padding: 20px;
    overflow-y: auto;
    ${breakpoint.tablet`
        width: auto;
    `}
`

const SubMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 20px;
    ${breakpoint.desktop`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${breakpoint.mobile`
        grid-template-columns: repeat(1, 1fr);
    `}
`

const SubmenuItem = styled.li`
    font-size: 18px;
    margin-bottom: 10px;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
    ${breakpoint.laptop`
        font-size: 16px;
    `}
    ${breakpoint.tablet`
        font-size: 14px;
    `}
`

const MenuItemIcon = styled(Image)`
    margin-right: 10px;
`
