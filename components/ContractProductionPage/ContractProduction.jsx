import styled from "styled-components"
import { breakpoint } from "../../lib/theme"
import { getContractProductionPageUrl } from "../../lib/utils/routeHelper"
import { ContactsSection } from "../Common/Fragments/ContactsSection"
import { MainSection } from "../Common/Fragments/MainSection"
import { Container } from "../ui/layouts/Container"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1, H2 } from "../ui/Typography"

const ContractProduction = () => {
    return (
        <>
            <MainLayout>
                <MainSection
                    showBreadcrumb
                    breadcrumbs={[{ href: getContractProductionPageUrl(), text: 'Контрактное производство' }]}
                    >
                    
                    <Container>
                        <CPMainContentWrapper>

                            <CPMainContentTextWrapper>
                                <CPMainContentTitle>
                                    КОНТРАКТНОЕ ПРОИЗВОДСТВО
                                </CPMainContentTitle>
                                <CPMainContentDescription>
                                    ООО «ДиЭлКом» предлагает комплексное решения по контрактному производству – от поставок компонентов и печатных плат до производства готовых изделий. Ключевыми преимуществами являются налаженные каналы поставки электронных компонентов, проверенные поставщики ПП и высокая квалификация наших сотрудников. Опыт выполнения проектов различной степени сложности и конкурентные цены на компоненты позволяют нам предлагать решения по проектам контрактного производства.
                                </CPMainContentDescription>
                            </CPMainContentTextWrapper>

                            <CPMainContentImageWrapper>
                                <img src="/static/images/contract-production-page-main.jpeg" alt="Изображение платы"/>
                            </CPMainContentImageWrapper>
                        </CPMainContentWrapper>
                    </Container>

                </MainSection>

                <CPInfoSection>
                    <Container>

                        <CPInfoListTitle>Печатные платы любого уровня сложности</CPInfoListTitle>
                        <CPInfoList>
                            <CPInfoListItem>Изготовление односторонних, двухсторонних и многослойных (до 40 слоёв) плат</CPInfoListItem>
                            <CPInfoListItem>Изготовление плат для ВЧ/СВЧ применений</CPInfoListItem>
                            <CPInfoListItem>Изготовление печатных плат по свинцовой, бессвинцовой и смешанной технологии</CPInfoListItem>
                            <CPInfoListItem>изготовление опытных образцов печатных плат от 5 рабочих дней</CPInfoListItem>
                        </CPInfoList>

                        <CPInfoListTitle>Монтаж печатных плат</CPInfoListTitle>
                        <CPInfoList>
                            <CPInfoListItem>Поверхностный, объёмный и штыревой монтаж печатных узлов</CPInfoListItem>
                            <CPInfoListItem>Сложные печатные узлы</CPInfoListItem>
                            <CPInfoListItem>Селективная пайка</CPInfoListItem>
                            <CPInfoListItem>Ручная пайка</CPInfoListItem>
                            <CPInfoListItem>Пайка по свинцовой, бессвинцовой и смешанной технологии</CPInfoListItem>
                        </CPInfoList>

                        <CPInfoListTitle>Контроль качества изделий РЭА</CPInfoListTitle>
                        <CPInfoList>
                            <CPInfoListItem>Контроль волнового сопротивления</CPInfoListItem>
                            <CPInfoListItem>Контроль плат перед монтажом</CPInfoListItem>
                            <CPInfoListItem>Визуальный контроль</CPInfoListItem>
                            <CPInfoListItem>Рентген-контроль</CPInfoListItem>
                            <CPInfoListItem>Контроль качества отмывки</CPInfoListItem>
                        </CPInfoList>

                    </Container>
                </CPInfoSection>

                <ContactsSection />
            </MainLayout>
        </>
    )
}

export default ContractProduction

const CPMainContentWrapper = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;

    ${breakpoint.tablet`
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`
const CPMainContentTextWrapper = styled.div`
    margin-right: 40px;
    width: 50%;

    ${breakpoint.laptop`
        margin-right: 0;
        width: 100%;
    `}
`

const CPMainContentTitle = styled(H1)``
const CPMainContentDescription = styled.p`
    font-size: 14px;
    line-height: 24px;
    text-align: justify;
    color: white;
`

const CPMainContentImageWrapper = styled.div`
    width: 50%;
    img {
        width: 100%;
    }

    ${breakpoint.laptop`
        display: none;
    `}
`

const CPInfoSection = styled.section`
    padding-top: 20px;
    padding-bottom: 50px;
    ${Container} {
        flex-direction: column;
        align-items: center;
    }
`
const CPInfoListTitle = styled(H2)`
    font-size: 18px;

    ${breakpoint.mobile`
        font-size: 16px;
    `}
`
const CPInfoList = styled.ul`
    width: 600px;
    list-style: none;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 300;
    font-size: 16px;

    ${breakpoint.tablet`
        width: 80%;
    `}

    ${breakpoint.mobile`
        width: 90%;
    `}

`
const CPInfoListItem = styled.li`
    position: relative;
    margin-bottom: 10px;

    ::before {
        content: "";
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 100%;
        height: 10px;
        left: -25px;
        position: absolute;
        top: 10px;
        width: 10px;
    }

    ${breakpoint.mobile`
        padding-left: 20px;
        ::before {
            content: "";
            background-color: ${({ theme }) => theme.colors.primary};
            border-radius: 100%;
            height: 10px;
            left: 0px;
            position: absolute;
            top: 10px;
            width: 10px;
        }
    `}
`
