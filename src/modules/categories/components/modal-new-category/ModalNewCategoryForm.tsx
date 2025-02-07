import { Button, Input, ModalBody, ModalContent, ModalHeader,  } from '@nextui-org/react'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner';

interface Props {
    onClose: ()=> void;
}

export const ModalNewCategoryForm = ({ onClose }:Props) => {

const [isLoading, setisLoading] = useState(false);

const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    setisLoading(true)
    const { categoryName } = e.target as HTMLFormElement;
    if( categoryName.value.trim === ''){
        setisLoading(false)
        toast.warning('Debe agregar un nombre')
        return;
    }
    setisLoading(false);
    onClose();
}

    return (
    <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">Registra un nueva categoria</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Nombre del producto"
              fullWidth
              required
              name='categoryName'
            />
            <input  placeholder="Imagen"type="file" name="image"/>
            <div className="flex justify-end gap-4 my-4 items-center">
          <Button color="danger" variant="light" onPress={onClose}>
            Cancelar
          </Button>
          <Button isLoading= { isLoading } isDisabled={ isLoading} color="primary" type="submit" >
            Guardar
          </Button>
          </div>
          </form>
        </ModalBody>
      </>
    )}
  </ModalContent>
  )
  
}
