'use client'

import React from 'react'
import Modal from './Modal'
import Input from '../inputs/Input'
import { FieldValue, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
const RegisterModal = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>();
    const onSubmit: SubmitHandler<FieldValues> = data => console.log(data);
    const bodyElement=(
      <Input
      
      id='name'
      type='text'
      placeholder='Name'
      register={register}
      errors={errors}
      required
      
      />
    )
  return (
    <div>
         <Modal bodyElement={bodyElement} isOpen onSubmit={()=>{}} onClose={()=>{}} btnLabel="Register" title="Register"/>
  
    </div>
  )
}

export default RegisterModal