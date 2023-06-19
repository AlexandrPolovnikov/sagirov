import AddingItemModal from '../../components/AddingItemModal';
import Button from '../../components/Button';
import { navigationItems } from '../../components/Modal';
import { COLOR_TYPES } from '../../library/constants.enum';
import './index.scss';
import useMainPage from './useMainPage';

const MainPage = () => {
    const {
        showAddingItemModal,
        openAddingItemModal,
        closeAddingItemModal,
        onConfirmAddingItemModal,
    } = useMainPage();

    return (
        <div className="main-page__content">
            <div className="main-page__header">
                <div className="main-page__header__logo">
                    <div className="main-page__header__logo-x"></div>
                </div>
                {navigationItems.map(({ item, title }) => (
                    <div className="main-page__header__info">
                        <Button
                            text={title}
                            type={COLOR_TYPES.info}
                            className="main-page__add-goods-button"
                        />
                    </div>
                ))}
            </div>
            <div className="main-page__main">
                <div className="main-page__main__left">
                    <h1>ПУТЕШЕСТВИЕ</h1>
                    <h3>на красную планету</h3>
                    <Button
                        text="Начать путешествие"
                        className="main-page__add-goods-button"
                        type={COLOR_TYPES.danger}
                        onClick={openAddingItemModal}
                    />
                </div>
                <div className="main-page__main__right">
                    <span>
                        Мы <h2>1</h2> на рынке
                    </span>
                    <span>
                        Гарантируем <h2>50%</h2> безопасность
                    </span>
                    <span>
                        Календарик за <h2>2031</h2> в подарок
                    </span>
                    <span>
                        Путешествие <h2>597</h2> дней
                    </span>
                </div>
            </div>

            {showAddingItemModal && (
                <AddingItemModal
                    onClose={closeAddingItemModal}
                    onConfirm={onConfirmAddingItemModal}
                />
            )}
        </div>
    );
};

export default MainPage;
