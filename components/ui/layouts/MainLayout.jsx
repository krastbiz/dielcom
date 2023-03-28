import { AppFooter } from "../../Common/AppFooter"
import { AppHeader } from "../../Common/AppHeader"
import { FloatContactDialog } from "../../Common/FloatContactDialog"

export const MainLayout = ({ children }) => {

    return (
        <>
            <AppHeader />
            <main>{children}</main>
            <AppFooter />
            <FloatContactDialog />
        </>
    )
}
