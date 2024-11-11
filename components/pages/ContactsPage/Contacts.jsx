import styled from 'styled-components'
import { getContactsPageUrl } from '../../../lib'
import { ContactsSection } from '../../Common/Fragments/ContactsSection'
import { MainSection } from '../../Common/Fragments/MainSection'
import { MainLayout } from '../../ui/layouts/MainLayout'

export const Contacts = () => {
    return (
        <MainLayout>
            <MainSection showBreadcrumb breadcrumbs={[{ href: getContactsPageUrl(), text: 'Контакты' }]}></MainSection>

            <ContactsSectionStyled />
        </MainLayout>
    )
}

const ContactsSectionStyled = styled(ContactsSection)`
    margin-top: 40px;
`
