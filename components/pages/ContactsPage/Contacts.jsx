import styled from 'styled-components'
import { getContactsPageUrl } from '../../../lib'
import { MainSection } from '../../Common'
import { MainLayout } from '../../ui/layouts/MainLayout'

export const Contacts = () => {
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection
                    showBreadcrumb
                    breadcrumbs={[{ href: getContactsPageUrl(), text: 'Контакты' }]}
                ></MainSection>
            </MainBgContainer>
        </MainLayout>
    )
}

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`
