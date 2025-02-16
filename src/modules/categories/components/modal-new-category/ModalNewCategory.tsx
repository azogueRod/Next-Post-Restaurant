'use client'
import React from 'react'

import { Button, Modal, useDisclosure } from '@nextui-org/react';
import { ModalNewCategoryForm } from './ModalNewCategoryForm';

export const ModalNewCategory = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
 return (
   <>
     <Button color="primary" variant='shadow' onPress={onOpen}>Crear Categoria</Button>
     <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
       <ModalNewCategoryForm
       onClose = { onClose }
       />
       
     </Modal>
   </>
 );
}
 
 

