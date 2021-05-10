import React, { InputHTMLAttributes } from 'react'
import { useField } from 'formik'
import { FormControl, FormLabel, Input, FormErrorMessage, Textarea } from '@chakra-ui/react';



type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    textarea?: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
    label,
    textarea,
    size: _,
    ...props }) => {
    let InputOrText = Input as any
    if (textarea) {
        InputOrText = Textarea
    }
    const [field, { error }] = useField(props);
    return (

        <FormControl isInvalid={!!error}>

            <FormLabel htmlFor={field.name}>{label}</FormLabel>
            <InputOrText {...field} {...props}
                placeholder={props.placeholder}
                id={field.name} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    )
}