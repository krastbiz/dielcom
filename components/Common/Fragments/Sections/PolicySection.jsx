import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../../ui/layouts/Container'
import { StyledLink } from '../../../ui/Link'
import { H2, H3 } from '../../../ui/Typography'
import { breakpoint } from '../../../../lib'

export const PolicySection = ({ ...extraProps }) => {
    const [selectedSection, setSelectedSection] = useState('personalData')

    useEffect(() => {
        const hash = window.location.hash.substring(1)
        if (hash) {
            setSelectedSection(hash)
        }
    }, [])

    useEffect(() => {
        window.location.hash = selectedSection
    }, [selectedSection])

    const handleSectionChange = (section) => {
        setSelectedSection(section)
    }

    return (
        <PolicySectionWrapper {...extraProps}>
            <ContainerStyled>
                <Sidebar>
                    <SidebarLink
                        onClick={() => handleSectionChange('personalData')}
                        isActive={selectedSection === 'personalData'}
                    >
                        Согласие на обработку персональных данных
                    </SidebarLink>
                    <SidebarLink
                        onClick={() => handleSectionChange('privacyPolicy')}
                        isActive={selectedSection === 'privacyPolicy'}
                    >
                        Политика конфиденциальности
                    </SidebarLink>
                    <SidebarLink
                        onClick={() => handleSectionChange('cookiePolicy')}
                        isActive={selectedSection === 'cookiePolicy'}
                    >
                        Информация об использовании файлов cookie
                    </SidebarLink>
                </Sidebar>
                <Content>
                    {selectedSection === 'personalData' && (
                        <PolicyWrapper>
                            <H2 alternative>Согласие на обработку персональных данных </H2>
                            <PoliceList>
                                <PoliceListItem>
                                    Я даю свое согласие Обществу с ограниченной ответственностью ООО «Диэлком-ЭК» (ИНН:
                                    7806552930) на обработку моих персональных данных: фамилия, имя, отчество, номер
                                    телефона, адрес электронной почты.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Оператор обрабатывает персональные данных с целью рассмотрения заявок на получение
                                    юридических услуг.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Моё согласие является конкретным, предметным, информированным, сознательным и
                                    однозначным.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Оператор обрабатывает персональные данные следующими способами: сбор, запись,
                                    систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение,
                                    использование, блокирование, удаление, уничтожение.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Оператор обрабатывает персональные данные как с использованием средств
                                    автоматизации, так и без использования таких средств.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Оператор обрабатывает персональные данные в соответствии с Политикой
                                    конфиденциальности, размещенной по адресу{` `}
                                    <StyledLink href={'/policy'}>https://dielcom-ec.ru/policy</StyledLink>{' '}
                                </PoliceListItem>
                                <PoliceListItem>
                                    Согласие действует с момента его предоставления и до момента отзыва Согласия.{' '}
                                </PoliceListItem>
                                <PoliceListItem>
                                    Я вправе отозвать согласие путем направления Оператору заявления в форме
                                    электронного документа по адресу электронной почты: spb@dielcom.ru.
                                </PoliceListItem>
                                <PoliceListItem>
                                    Оператор рассматривает заявление в течение 10 (десяти) рабочих дней с момента его
                                    получения.
                                </PoliceListItem>
                            </PoliceList>
                        </PolicyWrapper>
                    )}
                    {selectedSection === 'privacyPolicy' && (
                        <PolicyWrapper>
                            <H2 alternative>Политика конфиденциальности</H2>
                            <H3Styled alternative>Редакция №1 от 01.06.2024 </H3Styled>
                            <PoliceList>
                                <PoliceListItemWithoutCounter>
                                    Это Политика конфиденциальности <b>ООО «Диэлком-ЭК» (ИНН: 7806552930)</b> (далее —
                                    Политика).
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    Когда в Политике используются слова «мы», «нас» и прочие, говорится о{' '}
                                    <b>ООО «Диэлком-ЭК» (ИНН: 7806552930)</b>.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>О чем эта Политика?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    В Политике изложена информация о том, как мы обрабатываем ваши персональные данные и
                                    обеспечиваем их безопасность и конфиденциальность. Из Политики вы узнаете, какие
                                    персональные данные мы получаем и как их используем.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Что такое персональные данные?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Персональные данные – это любая информация о человеке (субъекте персональных
                                    данных), по которым можно его определить. Мы обрабатываем только те персональные
                                    данные, которые перечислены в Политике, и которые характеризуют вас как пользователя
                                    Сайта. Вы можете дать согласие на обработку персональных данных при заполнении форм
                                    обратной связи на Сайте и иными способами, предусмотренными Политикой.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Какие права есть у вас?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    В любой момент, когда у нас есть ваши персональные данные, вы можете воспользоваться
                                    следующими правами:
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    <Table>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>Право на доступ</TableCell>
                                                <TableCell>
                                                    У вас есть право запросить копию персональных данных, которые у нас
                                                    есть.
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Право на исправление</TableCell>
                                                <TableCell>
                                                    Вы можете попросить нас исправить неточные или неполные персональные
                                                    данные
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Право на отзыв</TableCell>
                                                <TableCell>
                                                    В любой момент вы можете отозвать свое согласие на обработку данных
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Право на забвение</TableCell>
                                                <TableCell>
                                                    Вы можете запросить удаление данных, которые у нас есть относительно
                                                    вас, за исключением случаев, когда мы обязаны хранить эти данные по
                                                    закону
                                                </TableCell>
                                            </TableRow>
                                        </tbody>
                                    </Table>
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    Вы можете обратиться к нам, если захотите уточнить порядок реализации иных прав,
                                    предусмотренных Федеральным законом “О персональных данных”.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Как мы обрабатываем персональные данные?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Мы обрабатываем персональные данные как в цифровой форме (автоматизировано), так и
                                    вручную (без использования средств автоматизации).
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    При этом мы ограничиваемся следующими действиями:
                                    <PoliceListItemWithPoint>сбор </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>систематизация </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>накопление </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>хранение </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>
                                        уточнение (обновление, изменение){' '}
                                    </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>обезличивание </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint> уничтожение персональных данных </PoliceListItemWithPoint>
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>
                                    В каких целях мы обрабатываем ваши персональные данные?
                                </PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    <Table>
                                        <tbody>
                                            <TableRow>
                                                <TableCell>Цель</TableCell>
                                                <TableCell>Персональные данные</TableCell>
                                                <TableCell>Категория</TableCell>
                                                <TableCell>Срок обработки</TableCell>
                                                <TableCell>Порядок уничтожения</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Обеспечение работы сайта</TableCell>
                                                <TableCell>IP-адрес, данные о местоположении, cookie-файлы</TableCell>
                                                <TableCell>общие</TableCell>
                                                <TableCell>
                                                    до достижения цели или отзыва согласия на обработку
                                                </TableCell>
                                                <TableCell>удаление из нашей базы данных</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Обработка заявки на получение услуг</TableCell>
                                                <TableCell>ФИО, номер телефона, адрес эл. почты</TableCell>
                                                <TableCell>общие</TableCell>
                                                <TableCell>
                                                    до достижения цели или отзыва согласия на обработку
                                                </TableCell>
                                                <TableCell>удаление из нашей базы данных</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Проведение рекламной рассылки</TableCell>
                                                <TableCell>ФИО, номер телефона, адрес эл. почты</TableCell>
                                                <TableCell>общие</TableCell>
                                                <TableCell>
                                                    до достижения цели или отзыва согласия на обработку
                                                </TableCell>
                                                <TableCell>удаление из нашей базы данных</TableCell>
                                            </TableRow>
                                        </tbody>
                                    </Table>
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>
                                    Передаем ли мы ваши персональные данные третьим лицам?
                                </PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за
                                    исключением случаев, когда такая обязанность установлена для нас законом.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>
                                    Как мы обеспечиваем безопасность персональных данных?
                                </PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Мы защищаем персональные данные, которые у нас хранятся, от разглашения, полной или
                                    частичной утраты, а также несанкционированного доступа со стороны третьих лиц. Для
                                    этого мы используем все необходимые технические и организационные меры по
                                    обеспечению безопасности и конфиденциальности, и постоянно обновляем их с учетом
                                    последних технических разработок. Если происходит утечка персональных данных, то мы:
                                    <PoliceListItemWithPoint>
                                        в течение 24 часов уведомляем об этом Роскомнадзор
                                    </PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>
                                        в течение 72 часов проводим собственное расследование и уведомляем Роскомнадзор
                                        о его результатах
                                    </PoliceListItemWithPoint>
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Что мы не проверяем? </PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Мы не можем проверить и поэтому доверяем Вам в том, что вы:
                                    <PoliceListItemWithPoint>обладаете полной дееспособностью</PoliceListItemWithPoint>
                                    <PoliceListItemWithPoint>
                                        предоставили собственные достоверные персональные данные
                                    </PoliceListItemWithPoint>
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Как с нами связаться?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    По любым вопросам в отношении обработки персональных данных вы можете обратиться к
                                    нам по электронной почте <a href="mailto:spb@dielcom.ru">spb@dielcom.ru</a>.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    При обращении укажите свое имя и контакты для обратной связи. Мы ответим на ваше
                                    обращение не позднее 10 рабочих дней с момента его получения.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    Реквизиты: <b>ООО «Диэлком-ЭК» (ИНН: 7806552930)</b>, адрес эл. почты:{' '}
                                    <a href="mailto:spb@dielcom.ru">spb@dielcom.ru</a>.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithoutCounter>
                                    Политика размещена по адресу:{' '}
                                    <a href="https://dielcom-ec.ru/policy#privacyPolicy">
                                        https://dielcom-ec.ru/policy#privacyPolicy
                                    </a>
                                    .
                                </PoliceListItemWithoutCounter>
                            </PoliceList>
                        </PolicyWrapper>
                    )}
                    {selectedSection === 'cookiePolicy' && (
                        <PolicyWrapper>
                            <H2 alternative>Информация об использовании файлов cookie</H2>
                            <PoliceList>
                                <PoliceListItemHeader>Как мы используем файлы cookie?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    На веб-сайте <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a>{' '}
                                    используются файлы cookie и похожие технологии (в т.ч., пиксельные теги, веб-маяки,
                                    прозрачные файлы GIF, JavaScript и локальное хранение данных) для вашего удобства,
                                    обеспечения и повышения эффективности работы веб-сайта{' '}
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> а также для получения
                                    аналитической информации. Далее в настоящем Уведомлении файлы cookie и похожие
                                    технологии именуются как файлы cookie. Ниже представлена более подробная информация
                                    о файлах cookie, их использовании и управлении ими. В случае несогласия с
                                    положениями настоящего Уведомления, вам необходимо произвести соответствующие
                                    настройки веб-браузера или прекратить пользование веб-сайтом{' '}
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a>.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Что такое файлы cookie?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Файлы cookie представляют собой файлы, которые автоматически сохраняются на вашем
                                    устройстве (персональном компьютере, мобильном телефоне и т.п.) при посещении
                                    веб-сайта <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a>. При каждом
                                    последующем посещении файлы cookie отправляются на исходный веб-сайт{' '}
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a>.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Как используются файлы cookie?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    На веб-сайте <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> могут
                                    использоваться следующие типы файлов cookie:
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithPoint>
                                    необходимые файлы cookie. Данные файлы cookie необходимы для обеспечения работы
                                    веб-сайта <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> (в т.ч., для
                                    входа в защищенные зоны веб-сайтов). Данные файлы cookie позволяют вам посещать
                                    веб-сайт и использовать его функции. Отключение этих файлов cookie усложнит
                                    функционирование веб-сайт
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> и может сделать
                                    недоступными некоторые функции и сервисы;
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    файлы cookie для аналитики и адаптации под пользователя. Данные файлы cookie
                                    позволяют ООО «Диэлком-ЭК» анализировать ваши действия в целях совершенствования и
                                    оптимизации работы веб-сайтов. Файлы cookie, относящиеся к аналитике, помогают нам
                                    оптимизировать содержание веб-сайтов для вашего удобства, также позволяют собирать
                                    техническую и навигационную информацию (тип веб-браузера, время пребывания на
                                    веб-сайте, посещенные страницы, IP-адрес, местоположение и т.п.) о Вас. Анализ таких
                                    данных может осуществляться с привлечением третьих лиц;
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    функциональные файлы cookie. Данные файлы cookie служат для вашей идентификации при
                                    повторном посещении веб-сайта{' '}
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a>. Они позволяют нам
                                    индивидуально подбирать содержание веб-сайта для вас, запоминать ваши выбранные
                                    настройки (в т.ч. выбранный язык, настройки отображения контента веб-сайтов).
                                </PoliceListItemWithPoint>
                                <PoliceListItemHeader>Что такое файлы cookie?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Некоторые файлы cookie действуют с момента вашего входа на веб-сайт
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> до конца конкретной
                                    сессии работы в веб-браузере. При закрытии веб-браузера срок действия этих файлов
                                    истекает, и они автоматически удаляются. Такие файлы cookie называются «сеансовыми».
                                    Некоторые файлы cookie не удаляются после прекращения работы вашего веб-браузера.
                                    Такие файлы cookie называются «постоянными». Постоянные файлы cookie сохраняются на
                                    вашем устройстве, пока не будут удалены или до указанной даты окончания срока
                                    действия. Постоянные файлы cookie, сохраняемые на вашем устройстве в результате
                                    использования веб-сайта
                                    <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> не хранятся дольше 1
                                    года с даты последнего посещения.
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemHeader>Как управлять файлами cookie?</PoliceListItemHeader>
                                <PoliceListItemWithoutCounter>
                                    Вы имеете возможность самостоятельно разрешать или запрещать использование файлов
                                    cookie через соответствующие настройки вашего веб-браузера. Для получения инструкций
                                    по настройке вам необходимо обратиться к справочной документации или официальному
                                    сайту разработчика веб-браузера. Вы должны учитывать, что при полном или частичном
                                    запрете использования файлов cookie в веб-браузере, определенная функциональность и
                                    сервисы веб-сайта <a href="https://dielcom-ec.ru/">https://dielcom-ec.ru/</a> могут
                                    работать некорректно. Дополнительную информацию об управлении файлами cookie вы
                                    можете получить по следующим ссылкам:
                                </PoliceListItemWithoutCounter>
                                <PoliceListItemWithPoint>
                                    <a href="https://support.google.com/chrome/answer/95647?hl=ru">Google Chrome</a>
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    <a href="https://support.microsoft.com/ru-ru/help/17442/windows-internet-explorer-delete-manage-cookies/">
                                        Microsoft Internet Explorer
                                    </a>
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    <a href="https://support.microsoft.com/ru-ru/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy">
                                        Microsoft Edge
                                    </a>
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    <a href="https://support.mozilla.org/ru/kb/kuki-informaciya-kotoruyu-veb-sajty-hranyat-na-vas">
                                        Mozilla Firefox
                                    </a>
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    <a href="https://support.apple.com/ru-ru/HT201265">Apple Safari</a>
                                </PoliceListItemWithPoint>
                                <PoliceListItemWithPoint>
                                    <a href="https://help.opera.com/ru/latest/security-and-privacy/">Opera</a>
                                </PoliceListItemWithPoint>
                            </PoliceList>
                        </PolicyWrapper>
                    )}
                </Content>
            </ContainerStyled>
        </PolicySectionWrapper>
    )
}

const PolicySectionWrapper = styled.section`
    display: flex;
    position: relative;
`

const ContainerStyled = styled(Container)`
    display: flex;
    align-items: flex-start;
`

const Sidebar = styled.div`
    width: 250px;
    padding: 20px;
    background: #f4f4f4;
    border-right: 1px solid #ddd;
    position: sticky;
    top: 100px;

    ${breakpoint.mobile`
    position: relative;
    top: 10px;
    width: 100%;
`}
`

const SidebarLink = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    color: inherit;
    text-decoration: none;
    margin-bottom: 20px;
    color: ${({ theme, isActive }) => (isActive ? theme.colors.active : theme.colors.main)};

    &:hover {
        color: #5b76cf;
    }
`

const Content = styled.div`
    flex: 1;
    padding: 20px;

    ${breakpoint.tablet`
        padding: 10px;
    `}
`

const PolicyWrapper = styled.div`
    padding: 25px 10px 75px 30px;

    ${breakpoint.tablet`
        padding: 25px 0px 15px;
        width: 100%;
    `}
`

const H3Styled = styled(H3)`
    margin-bottom: 30px;
    margin-top: 30px;
`

const PoliceList = styled.ul`
    column-count: 1;
    counter-reset: list-counter;
    margin-top: 20px;
`

const PoliceListItem = styled.li`
    position: relative;
    padding-left: 40px;
    display: block;
    font-size: 16px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.main};
    counter-increment: list-counter;

    ::before {
        content: counter(list-counter);
        position: absolute;
        left: 0;
        top: 10px;
        width: 20px;
        height: 20px;
        background: ${({ theme }) => theme.colors.active};
        border-radius: 100%;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.text};
    }

    ${breakpoint.tablet`
        font-size: 16px;
    `}
`

const PoliceListItemHeader = styled.li`
    position: relative;
    display: block;
    font-size: 18px;
    line-height: 40px;
    color: ${({ alternative, theme }) => (alternative ? theme.colors.text : theme.colors.active)};
    font-weight: bold;
    margin-bottom: 20px;

    ${breakpoint.tablet`
        font-size: 16px;
    `}
`

const PoliceListItemWithoutCounter = styled.li`
    position: relative;
    display: block;
    font-size: 16px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;

    ${breakpoint.tablet`
        font-size: 14px;
    `}
`
const PoliceListItemWithPoint = styled.li`
    position: relative;
    display: block;
    font-size: 16px;
    line-height: 34px;
    color: ${({ theme }) => theme.colors.main};
    margin-bottom: 20px;
    padding-left: 20px;

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 8px;
        height: 8px;
        background: ${({ theme }) => theme.colors.active};
        border-radius: 100%;
        margin-top: -4px;
    }

    ${breakpoint.tablet`
        font-size: 16px;
    `}
`
const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    ${breakpoint.mobile`
    font-size: 10px;
    line-height: 16px;
    `}
`

const TableRow = styled.tr`
    border: 1px solid #ddd;
`

const TableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    ${breakpoint.mobile`
    padding: 1px;
    `}
`
