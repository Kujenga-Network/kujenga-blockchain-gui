import React from 'react';
import { get } from 'lodash';
import { Controller, useFormContext } from 'react-hook-form';
import { Select as MaterialSelect, SelectProps } from '@material-ui/core';

type Props = SelectProps & {
  hideError?: boolean;
  name: string;
};

export default function Select(props: Props) {
  const { name: controllerName, value: controllerValue, children, ...rest } = props;
  const { control, errors } = useFormContext();
  const errorMessage = get(errors, controllerName);

  return (
    // @ts-ignore
    <Controller
      name={controllerName}
      value={controllerValue}
      control={control}
      error={!!errorMessage}
      render={({ onChange, value, onBlur, name }) => (
        <MaterialSelect
          onBlur={onBlur}
          onChange={(event, ...args) => {
            onChange(event, ...args);
            if (props.onChange) {
              props.onChange(event, ...args);
            }
          }}
          name={name}
          value={value}
        >
          {children}
        </MaterialSelect>
      )}
      {...rest}
    />
  );
}
