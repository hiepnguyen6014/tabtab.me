import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label } = props;
    const { control } = form;

    // const { isValid, isDirty } = formState;
    //  const hasError = isDirty && errors.title === undefined;

    return (
        <Controller
            // id={name}
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <TextField
                    margin="dense"
                    variant="outlined"
                    size="small"
                    fullWidth
                    label={label}
                    error={invalid}
                    helperText={error?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    value={value}

                />
            )}
        />
    );
}

export default InputField;
