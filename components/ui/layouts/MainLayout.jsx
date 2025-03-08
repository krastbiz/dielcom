import { AppFooter, AppHeader, ContactsSection } from '../../Common'

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
