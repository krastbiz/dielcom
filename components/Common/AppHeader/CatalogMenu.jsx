import { useState } from 'react'
import { CATEGORIES_ARRAY } from '../../../mock-data'
import styled from 'styled-components'

import { Link } from '../../ui/Link'
import { getProductPageUrl, breakpoint, useDeviceCheck } from '../../../lib'
import { H3 } from '../../ui/Typography'

export const CatalogMenu = ({ onClose }) => {
    const [activeCategory, setActiveCategory] = useState(null)
    const [isSubMenuOpen, setSubMenuOpen] = useState(false)
    const { isMobile, isTablet } = useDeviceCheck()

    const handleCategoryClick = (categoryId) => {
        if (activeCategory === categoryId) {
            setActiveCategory(null)
            setSubMenuOpen(false)
        } else {
            setActiveCategory(categoryId)
            setSubMenuOpen(true)
        }
    }

    const handleCategoryHover = (categoryId) => {
        if (activeCategory !== categoryId && !(isMobile | isTablet)) {
            setActiveCategory(categoryId)
            setSubMenuOpen(true)
        }
    }

    const handleCloseMenus = () => {
        setActiveCategory(null)
        setSubMenuOpen(false)
        onClose(false)
    }

    return (
        <>
            <Overlay onClick={() => onClose(false)} />

            <MenuWrapper>
                <CategoriesContainer>
                    <CategoriesList isSubMenuOpen={isSubMenuOpen}>
                        {Array.from(CATEGORIES_ARRAY.entries()).map(([key, category]) => (
                            <CategoriesItem
                                onClick={() => handleCategoryClick(key)}
                                onMouseEnter={() => handleCategoryHover(key)}
                                key={key}
                                isSelected={key === activeCategory}
                            >
                                {category.name}
                            </CategoriesItem>
                        ))}
                    </CategoriesList>
                </CategoriesContainer>

                <SubMenuContainer>
                    {activeCategory !== null && isSubMenuOpen && (
                        <>
                            <H3>{CATEGORIES_ARRAY.get(activeCategory).name}</H3>
                            <SubMenuList>
                                {CATEGORIES_ARRAY.get(activeCategory).products.map((product) => (
                                    <SubmenuItem>
                                        <Link
                                            href={getProductPageUrl(
                                                CATEGORIES_ARRAY.get(activeCategory).id,
                                                product.id,
                                            )}
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
        </>
    )
}

const Overlay = styled.div`
    position: fixed;
    top: 124px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
`

const MenuWrapper = styled.div`
    position: fixed;
    top: 124px;
    left: 0;
    right: 0;
    background: #1c1c1c;
    z-index: 1000;
    display: flex;
    color: ${({ theme }) => theme.colors.text};
    ${breakpoint.laptop`
        top: 90px;
    `}
`

const CategoriesContainer = styled.div``

const CategoriesList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    ${breakpoint.laptop`
        width: 255px;
        padding-right: 3px;
    `}
    ${breakpoint.tablet`
        width: ${({ isSubMenuOpen }) => (isSubMenuOpen ? '60px' : '255px')};
    `}
`

const CategoriesItem = styled.li`
    border-radius: 4px;
    background-color: ${({ theme, isSelected }) => isSelected && theme.colors.altBackground};
    height: 28px;
    padding: 5px 10px;
    padding-right: 5px;
    cursor: pointer;
    font-size: 13px;
    &:hover {
        background-color: ${({ theme }) => theme.colors.altBackground};
    }
`

const SubMenuContainer = styled.div`
    padding-left: 20px;
    background-color: #404040;
    flex-grow: 1;
    padding: 20px;
    height: 360px;
    overflow-y: auto;
`

const SubMenuList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 370px);
    margin-top: 20px;
    ${breakpoint.desktop`
        grid-template-columns: repeat(2, 1fr);
    `}

    ${breakpoint.mobile`
        grid-template-columns: repeat(1, 1fr);
    `}
`

const SubmenuItem = styled.li`
    font-size: 14px;
    margin-bottom: 10px;
    &:hover {
        color: ${({ theme }) => theme.colors.linkHover};
    }
`
