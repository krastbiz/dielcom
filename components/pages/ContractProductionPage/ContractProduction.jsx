import styled from 'styled-components'
import Image from 'next/image'
import { breakpoint, getContractProductionPageUrl, getRequestPageUrl, useDeviceCheck } from '../../../lib'
import { DefaultMainContent, MainSection } from '../../Common'
import { Container } from '../../ui/layouts/Container'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { H2, H2Gradient } from '../../ui/Typography'
import { Button } from '../../ui/buttons/Button'

export const ContractProduction = ({ contract }) => {
    const { isLaptop, isTablet } = useDeviceCheck()
    const shortScreen = isTablet | isLaptop
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection
                    showBreadcrumb
                    breadcrumbs={[{ href: getContractProductionPageUrl(), text: 'Контрактное производство' }]}
                >
                    <DefaultMainContent large>
                        <H2 large>
                            Контрактное <H2Gradient large>производство</H2Gradient>
                        </H2>
                        <ContractInfo>
                            ООО «ДиЭлКом» предлагает комплексное решения по контрактному производству – от поставок
                            компонентов и печатных плат до производства готовых изделий. Ключевыми преимуществами
                            являются налаженные каналы поставки электронных компонентов, проверенные поставщики ПП и
                            высокая квалификация наших сотрудников.
                        </ContractInfo>
                    </DefaultMainContent>
                </MainSection>

                <ContractSection>
                    <ContractContainer>
                        {contract.map(({ title, imageUrl, imageUrlWide, iconUrl, subtitle, options }) => (
                            <CatalogItem key={title}>
                                <CatalogItemLogoWrapper>
                                    <Image src={shortScreen ? imageUrlWide : imageUrl} alt={title} />
                                </CatalogItemLogoWrapper>

                                <CatalogItemContainer>
                                    <TitleWrapper>
                                        <IconWrapper>
                                            <Image src={iconUrl} />
                                        </IconWrapper>
                                        <CatalogItemName subtitle={subtitle}>{title}</CatalogItemName>
                                    </TitleWrapper>

                                    <ItemWrapper>
                                        {options.map((option) => (
                                            <CatalogItemDescription>{option}</CatalogItemDescription>
                                        ))}
                                        <ButtonWrapper>
                                            <StyledButton as="a" primary href={getRequestPageUrl()}>
                                                Запросить стоимость
                                            </StyledButton>
                                        </ButtonWrapper>
                                    </ItemWrapper>
                                </CatalogItemContainer>
                            </CatalogItem>
                        ))}
                    </ContractContainer>
                </ContractSection>
            </MainBgContainer>
        </MainLayout>
    )
}

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`

const ContractInfo = styled.div`
    color: ${({ theme }) => theme.colors.text};
    margin-top: 10px;
`

const ContractSection = styled.section`
    background-image: url('/static/images/lines-bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    padding-bottom: 100px;
    padding-top: 30px;
`

const ContractContainer = styled(Container)`
    display: flex;
    flex-direction: column;
`

const CatalogItem = styled.div`
    display: flex;
    margin-bottom: 30px;
    ${breakpoint.laptop`
        flex-direction: column;
    `}
`

const CatalogItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.hauora};
    margin-left: 10px;
    width: 714px;
    ${breakpoint.laptop`
        margin-left: 0px;
        width: 100%;
    `}
`

const TitleWrapper = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 20px;
    padding: 25px;
    justify-content: flex-start;
    align-items: center;
`

const IconWrapper = styled.div`
    border-radius: 100%;
    border: 1px solid rgba(24, 89, 204, 0.2);
    fill: rgba(24, 89, 204, 0.1);
    width: 100px;
    height: 100px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoint.tablet`
        width: 70px;
        height: 70px;
        img {
            width: 40px;
            height: 40px;
        }
    `}
    ${breakpoint.mobile`
        width: 55px;
        height: 55px;
        img {
            width: 30px;
            height: 30px;
        }
    `}
`

const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.cardBackground};
    border-radius: 20px;
`

const CatalogItemName = styled(H2)`
    position: relative;
    ${({ subtitle }) => subtitle && `top: -22px;`}
    ${({ subtitle, theme }) =>
        subtitle &&
        `
        &::after {
            content: '${subtitle}';
            font-size: 12px;
            color: ${theme.colors.main};
            font-family: ${theme.fonts.manropeBold};
            border-radius: 5px;
            padding: 5px 8px;
            width: 174px;
            height: 27px;
            background: rgba(255, 255, 255, 0.1);
            margin-top: 8px;
            position: absolute;
            left: 0;
            top: 100%;
            letter-spacing: 0.2px;
            line-height: 27px;
            white-space: nowrap;
        }
    `}
`

const ButtonWrapper = styled.div`
    padding: 30px 20px 20px;
    border-top: 1px solid #313947;
    display: flex;
`

const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`

const CatalogItemDescription = styled.div`
    font-family: ${({ theme }) => theme.fonts.manrope};
    position: relative;
    padding-left: 45px;
    border-top: 1px solid #313947;
    height: 66px;
    display: flex;
    align-items: center;

    &::before {
        content: '•';
        position: absolute;
        left: 22px;
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
    }
`

const CatalogItemLogoWrapper = styled.div`
    width: 436px;
    border-radius: 10px;
    img {
        width: 100%;
        height: 100%;
    }

    ${breakpoint.desktop`
        width: 400px;
    `}
    ${breakpoint.laptop`
        width: 100%;
        height: 400px;
        margin-bottom: 5px;
    `}
`
