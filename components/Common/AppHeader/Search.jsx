import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'

export const SearchComponent = ({ defaultValue, onSearch, isHomePage = false }) => {
    const [searchValue, setSearchValue] = useState(defaultValue || '')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleSearch = useCallback(
        (searchValue) => {
            if (searchValue.length < 2) {
                setError('Введите минимум 2 символа для поиска')
                return
            } else {
                setError('')
            }
            if (!isHomePage) {
                onSearch(searchValue)
            }
        },
        [searchValue, router, onSearch, isHomePage],
    )

    const handleChange = (e) => {
        setSearchValue(e.target.value)
        if (!isHomePage) {
            handleSearch(e.target.value)
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && isHomePage) {
            router.push(`/search?q=${searchValue}`)
        }
    }

    return (
        <SearchContainer isHomePage={isHomePage}>
            <SearchInput
                placeholder="Поиск по каталогу"
                value={searchValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {isHomePage && (
                <Link href={`/catalog?q=${searchValue}`} passHref>
                    <SearchButton>
                        <SearchIcon src="/static/icons/search.svg" alt="Поиск" />
                    </SearchButton>
                </Link>
            )}
            {error && <ErrorText>{error}</ErrorText>}
        </SearchContainer>
    )
}

const SearchContainer = styled.div`
    padding: 24px 48px;
    width: 100%;
    position: relative;
    border: 1px solid transparent;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    transition: border-color 0.3s;

    &:focus-within {
        border-color: ${({ theme }) => theme.colors.active};
    }
`

const SearchInput = styled.input`
    height: 24px;
    border: none;
    width: 100%;
    font-size: 15px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.text};
    padding-left: 4px;
    padding-right: 40px;
    box-sizing: border-box;
    outline: none;
`

const SearchButton = styled.button`
    position: absolute;
    right: 60px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    cursor: pointer;
    background: none;
    display: flex;
    align-items: center;
    padding: 0;
`

const SearchIcon = styled.img`
    height: 16px;
`

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`
