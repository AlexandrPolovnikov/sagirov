import { HTMLProps } from 'react';
import './index.scss';
import Button from '../Button';

interface HeaderProps extends HTMLProps<HTMLDivElement> {
    title: string;
    actions?: JSX.Element;
}

export const navigationItems = [
    {
        id: 1,
        title: 'Главная',
        item: <Button />,
    },
    {
        id: 2,
        title: 'Технология',
        item: <Button />,
    },
    {
        id: 3,
        title: 'Расписание',
        item: <Button />,
    },
    {
        id: 4,
        title: 'Гарантии',
        item: <Button />,
    },
    {
        id: 5,
        title: 'О Компании',
        item: <Button />,
    },
    {
        id: 6,
        title: 'Контакты',
        item: <Button />,
    },
];

const Wrapper = ({ children, className }: HTMLProps<HTMLDivElement>): JSX.Element => (
    <div className={`modal__wrapper flex-center ${className ?? ''}`}>{children}</div>
);

const Header = ({ title, actions, className }: HeaderProps): JSX.Element => (
    <div className={`modal__header flex-center ${className ?? ''}`}>
        <div className="modal__title">{title}</div>
        <div>{actions ?? actions}</div>
    </div>
);

const Body = ({ children, className, ...props }: HTMLProps<HTMLDivElement>): JSX.Element => (
    <div className={`modal__body  ${className ?? ''}`} {...props}>
        {children}
    </div>
);

const Footer = ({ children, className }: HTMLProps<HTMLDivElement>): JSX.Element => (
    <div className={`modal__footer ${className ?? ''}`}>{children}</div>
);

const Modal = { Wrapper, Header, Body, Footer };

export default Modal;
