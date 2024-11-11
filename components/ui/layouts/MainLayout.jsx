import { AppFooter } from '../../Common/AppFooter'
import { AppHeader } from '../../Common/AppHeader'
import { ContactsSection } from '../../Common/Fragments/ContactsSection'

export const MainLayout = ({ children }) => {
    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <ContactsSection />
            <AppFooter />
        </>
    )
}
