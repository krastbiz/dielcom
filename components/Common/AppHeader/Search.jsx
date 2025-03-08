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
                placeholder="Найти товары"
                value={searchValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {isHomePage && (
                <Link href={`/search?q=${searchValue}`} passHref>
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
    width: 100%;
    position: relative;
    transition: border-color 0.3s;
    border-radius: 5px;

    /* &:focus-within {
        border-color: ${({ theme }) => theme.colors.active};
    } */
`

const SearchInput = styled.input`
    height: 50px;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 14px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.textGray};
    box-sizing: border-box;
    outline: none;
    background-color: ${({ theme }) => theme.colors.altBackground};
`

const SearchButton = styled.button`
    position: absolute;
    border: none;
    right: 0px;
    border-radius: 5px;
    width: 50px;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        background-color: ${({ theme }) => theme.colors.main};
    }
`

const SearchIcon = styled.img`
    height: 24px;
    width: 24px;
`

const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`
