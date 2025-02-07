'use client'
import React from 'react'
import { Modal, Button, useDisclosure } from "@nextui-org/react";
import { ModalNewProductForm } from './ModalNewProductForm';

export const ModalNewProduct = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button color="primary" variant='shadow' onPress={onOpen}>Crear Producto</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalNewProductForm
        onClose = { onClose }
        />
        
      </Modal>
    </>
  );
}

