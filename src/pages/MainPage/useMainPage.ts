import { useState } from 'react';
import { ModalItemProps } from '../../components/AddingItemModal';

interface HookReturn {
    showAddingItemModal: boolean;
    openAddingItemModal(): void;
    closeAddingItemModal(): void;
    onConfirmAddingItemModal(item: ModalItemProps): void;
}

const useMainPage = (): HookReturn => {
    const [showAddingItemModal, setShowAddingItemModal] = useState<boolean>(false);

    const onConfirmAddingItemModal = (item: ModalItemProps) => {
        setShowAddingItemModal(false);
    };

    const openAddingItemModal = () => setShowAddingItemModal(true);

    const closeAddingItemModal = () => setShowAddingItemModal(false);

    return {
        showAddingItemModal,
        onConfirmAddingItemModal,
        openAddingItemModal,
        closeAddingItemModal,
    };
};

export default useMainPage;
