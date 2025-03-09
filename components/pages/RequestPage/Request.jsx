import styled from 'styled-components'

import { breakpoint, getRequestPageUrl } from '../../../lib'
import { Button } from '../../ui/buttons/Button'
import { Container } from '../../ui/layouts/Container'
import { H2, H3 } from '../../ui/Typography'
import { StyledLink } from '../../ui/Link'
import { useRequestForm } from './useRequestForm'
import { MainLayout } from '../../ui/layouts/MainLayout'
import { DefaultMainContent, MainSection } from '../../Common'

export const RequestForm = ({ defaultValue = '' }) => {
    const {
        formData = {},
        emailWasSent,
        requestNumber,
        selectedFiles,
        isMobileOrTablet,
        deleteFile,
        onFormSubmit,
        handleBlur,
        handleFileChange,
        handleChange,
        handleFocus,
        setEmailWasSent,
    } = useRequestForm(defaultValue)
    return (
        <MainLayout>
            <MainBgContainer>
                <MainSection showBreadcrumb breadcrumbs={[{ href: getRequestPageUrl(), text: 'Форма обратной связи' }]}>
                    <DefaultMainContent large>
                        <H2 large>Рассчитаем стоимость и сроки доставки комплектующих</H2>
                    </DefaultMainContent>
                    <FormSection id="request">
                        <RequestFormWrapper>
                            <StyledContactForm onSubmit={onFormSubmit} encType="multipart/form-data">
                                <ControlsContainer>
                                    <InputsContainer>
                                        <StyledInput
                                            name="name"
                                            type="text"
                                            placeholder="Ваше имя"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                        <StyledInput
                                            name="company"
                                            type="text"
                                            placeholder="Ваша компания"
                                            required
                                            value={formData.company}
                                            onChange={handleChange}
                                        />
                                        <StyledInput
                                            name="email"
                                            required
                                            type="email"
                                            placeholder="mail@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                        <StyledInput
                                            name="tel"
                                            type="tel"
                                            placeholder="+79999999"
                                            required
                                            value={formData.tel}
                                            onChange={handleChange}
                                        />
                                        <ContactFormDescription>
                                            Нажимая кнопку "Отправить", Вы даете согласие на
                                            <StyledLink href={'/policy#personalData'}>
                                                обработку персональных данных
                                            </StyledLink>
                                        </ContactFormDescription>
                                    </InputsContainer>
                                    <InputsContainer>
                                        {emailWasSent ? (
                                            <ContactFormSuccessMessage>
                                                <H3 alternative>Мы приняли Вашу заявку!</H3>
                                                <H3 alternative>Номер Вашей заявки: {requestNumber}.</H3>
                                                <H3 alternative>Спасибо, что связались с нами!</H3>
                                                <SendButton primary type="reset" onClick={() => setEmailWasSent(false)}>
                                                    Новая заявка
                                                </SendButton>
                                            </ContactFormSuccessMessage>
                                        ) : (
                                            <>
                                                <StyledTextarea
                                                    value={formData.components}
                                                    name="components"
                                                    onChange={handleChange}
                                                    onFocus={handleFocus}
                                                    onBlur={handleBlur}
                                                />
                                                <ControlContainer>
                                                    <UploadContainer>
                                                        <FileUploadLabel>
                                                            <input
                                                                type="file"
                                                                name="file"
                                                                onChange={handleFileChange}
                                                                multiple
                                                            />
                                                            <FileUploadText>
                                                                <img
                                                                    src={'/static/icons/paperclip.svg'}
                                                                    alt="Скрепка"
                                                                />
                                                                Прикрепите файл
                                                            </FileUploadText>
                                                        </FileUploadLabel>
                                                        {selectedFiles.length > 0 && (
                                                            <AttachedFilesList>
                                                                {selectedFiles.map((file, index) => (
                                                                    <AttachedFileItem
                                                                        key={index}
                                                                        onClick={() => deleteFile(file.name)}
                                                                    >
                                                                        {file.name}
                                                                    </AttachedFileItem>
                                                                ))}
                                                            </AttachedFilesList>
                                                        )}
                                                    </UploadContainer>
                                                    <SendButton primary type="submit">
                                                        Отправить
                                                    </SendButton>
                                                </ControlContainer>
                                            </>
                                        )}
                                    </InputsContainer>
                                </ControlsContainer>
                            </StyledContactForm>
                        </RequestFormWrapper>
                    </FormSection>
                </MainSection>
            </MainBgContainer>
        </MainLayout>
    )
}

const MainBgContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    z-index: 3;
`

const FormSection = styled.section`
    background-image: url('/static/images/lines-bg2.svg');
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    padding-top: 30px;
    padding-bottom: 70px;
`
const RequestFormWrapper = styled(Container)`
    display: flex;
    background: #f9f9f9;
    border-radius: 10px;
    padding: 50px 30px 50px;

    ${breakpoint.desktop`
        max-width: 100%;
    `}

    ${breakpoint.tablet`
        padding: 10px;
        width: 100%;
    `}
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex;
`

const ControlsContainer = styled.div`
    display: flex;
    flex-direction: row;
    ${breakpoint.tablet`
        flex-direction: column;
    `}
`

const ControlContainer = styled(ControlsContainer)`
    justify-content: space-between;
    margin-left: 15px;
`

const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    ${breakpoint.tablet`
        flex-direction: row;
    `}
`

const StyledContactForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 433px;
`

const StyledInput = styled.input`
    border: 1px solid #c7c7c7;
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    font-family: ${({ theme }) => theme.fonts.manrope};
    border-radius: 8px;
    width: 400px;
    height: 70px;
    padding: 24px 30px;
    margin-bottom: 25px;
    ::placeholder {
        color: #000;
        opacity: 0.5;
    }
`

const StyledTextarea = styled.textarea`
    background-color: ${({ theme }) => theme.colors.whiteBackground};
    font-family: ${({ theme }) => theme.fonts.manrope};
    font-size: 12px;
    line-height: 1.4;
    color: #000;
    opacity: 0.5;
    border: 1px solid #c7c7c7;
    resize: none;
    white-space: 'pre-wrap';
    border-radius: 30px;
    width: 600px;
    height: 40vh;
    padding: 20px 20px 0;
    box-sizing: border-box;
    margin-left: 15px;
    margin-bottom: 20px;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
    ${breakpoint.desktop`
        width: 600px;
    `}
    ${breakpoint.tablet`
        width: auto;
        height: 200px;
        margin: 0px;
        margin-top: 10px;
    `}
`

const ContactFormSuccessMessage = styled.p`
    display: flex;
    padding-top: 20px;
    justify-content: space-between;
    flex-direction: column;
    width: 600px;
    height: 300px;
    padding: 10px 20px 0;
    ${breakpoint.tablet`
        width: auto;
        height: auto;
    `}
`

const ContactFormDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-top: 10px;
    width: 428px;
    opacity: 0.6;
    text-align: start;
    ${breakpoint.tablet`
        width: auto;
    `}
`

const FileUploadLabel = styled.label`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    cursor: pointer;
    margin-bottom: 10px;

    input[type='file'] {
        display: none;
    }
    ${breakpoint.tablet`
        margin-bottom: 0px;
    `}
`

const FileUploadText = styled.span`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;

    img {
        width: 16px;
        height: 16px;
    }
`

const AttachedFilesList = styled.ul`
    list-style: none;
    padding: 0;
    max-height: 50px;
    width: 250px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.grayed} transparent;

    &::-webkit-scrollbar {
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.grayed};
        border-radius: 4px;
    }
    ${breakpoint.mobile`
         width: 120px;
    `}
`

const AttachedFileItem = styled.li`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.base};
    margin-bottom: 5px;
    width: 100%;

    &::after {
        content: '✕';
        color: ${({ theme }) => theme.colors.base};
        margin-left: 8px;
        cursor: pointer;
    }
    &:hover::after {
        color: ${({ theme }) => theme.colors.active};
    }
`

const SendButton = styled(Button)`
    height: 50px;
    width: 200px;
`
