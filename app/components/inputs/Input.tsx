import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type InputProps={
    id:string,
    type:string,
    placeholder:string,
    required:boolean,
    register:UseFormRegister<FieldValues>
    errors:Field
}

const Input:React.FC<InputProps> = ({
    id,
    type,
    placeholder
}) => {
  return (
    <div>Input</div>
  )
}

export default Input