import React from 'react';
import { Button, Container, Form, FormControl, FormGroup, FormLabel, FormText, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AddItemFormValidationSchema } from '../../lib/validation';
import { InventoryItem } from '../../lib/models';

interface IProps {
  onClose: () => void;
  onSubmit: (data: InventoryItem) => void;
  show: boolean;
}

/** Modal pop-up form for user to add new inventory item */
const AddItemForm: React.FC<IProps> = ({ onClose, onSubmit, show }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InventoryItem>({
    resolver: zodResolver(AddItemFormValidationSchema),
  });

  return (
    <Modal show={show} onHide={onClose}>
      <Container fluid className="p-3">
        <div className="d-flex align-items-center my-2">
          <h3 className="flex-grow-1">Add New Inventory Item</h3>
          <h3 className="text-muted fw-lighter clickable" onClick={() => onClose()}>
            ✕
          </h3>
        </div>
        <hr />
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Item name</FormLabel>
            <FormControl type="text" {...register('name')} />
            {errors.name && (
              <FormText className="text-danger d-flex align-items-center">{errors.name.message}</FormText>
            )}
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>Quantity</FormLabel>
            <FormControl
              type="number"
              {...register('quantity', {
                valueAsNumber: true,
              })}
            />
            {errors.quantity && (
              <FormText className="text-danger d-flex align-items-center">{errors.quantity.message}</FormText>
            )}
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>Par Value</FormLabel>
            <FormControl
              type="number"
              {...register('parValue', {
                valueAsNumber: true,
              })}
            />
            {errors.parValue && (
              <FormText className="text-danger d-flex align-items-center">{errors.parValue.message}</FormText>
            )}
          </FormGroup>

          <FormGroup className="mb-3">
            <FormLabel>Starting Price</FormLabel>
            <FormControl
              type="number"
              {...register('price', {
                valueAsNumber: true,
              })}
            />
            {errors.price && (
              <FormText className="text-danger d-flex align-items-center">{errors.price.message}</FormText>
            )}
          </FormGroup>
        </Form>
        <Button variant="primary" type="submit" onClick={() => handleSubmit(onSubmit)()}>
          Add Item
        </Button>
      </Container>
    </Modal>
  );
};

export default AddItemForm;
