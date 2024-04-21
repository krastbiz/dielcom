import styled from "styled-components"
import { Link } from "../../ui/Link"
import { hideOnMobileMixin } from "../../ui/mixins"

export const HeaderPhone = ({ ...extraProps }) => {
    return (
        <><PhoneLinkWrapper {...extraProps}>
            <Link href='tel:+78123394597'>+7 (812) 339-45-97</Link>
        </PhoneLinkWrapper><PhoneLinkWrapper {...extraProps}>
                <Link href='mailto:spb@dielcom.ru'>spb@dielcom.ru</Link>
            </PhoneLinkWrapper></>
    )
}

const PhoneLinkWrapper = styled.div`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};

    ${({ hideOnMobile }) => hideOnMobile && hideOnMobileMixin}
`