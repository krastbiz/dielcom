import styled from "styled-components"
import { getContactsPageUrl } from "../../lib/utils/routeHelper"
import { ContactsSection } from "../Common/Fragments/ContactsSection"
import { DefaultMainContent, MainSection } from "../Common/Fragments/MainSection"
import { MainLayout } from "../ui/layouts/MainLayout"
import { H1 } from "../ui/Typography"

export const Contacts = () => {
    return (
        <MainLayout>
            <MainSection
                showBreadcrumb
                breadcrumbs={[{ href: getContactsPageUrl(), text: 'Контакты' }]}
                >
                <DefaultMainContent><H1>КОНТАКТЫ</H1></DefaultMainContent>
            </MainSection>

            <ContactsSectionStyled />
        </MainLayout>
    )
}

const ContactsSectionStyled = styled(ContactsSection)`
    margin-top: 40px;
`