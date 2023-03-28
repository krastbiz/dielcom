import { AppFooter } from "../../Common/AppFooter"
import { AppHeader } from "../../Common/AppHeader"
import { ContactDialog } from "../../Common/ContactDialog"

export const MainLayout = ({ children }) => {

    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
            <ContactDialog />
        </>
    )
}
