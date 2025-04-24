import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { Flex } from '../Flex';
import { IInputPropsType } from './types';
import { Input as ShadcnInput } from '@/components/ui/input';
import { checkValidate } from './utils';
import { INPUT_CLASS_MAP } from './constants';
import { Show } from '../Show';

export const Input = ({
  status: externalStatus,
  message: externalMessage,
  rules,
  label,
  validateTrigger = 'onBlur',
  // Native
  className,
  id,
  value,
  onChange,
  onBlur,
  ...props
}: IInputPropsType) => {
  const inputId = id || nanoid();
  const [internalMessage, setInternalMessage] = useState<string | null>(null);
  const [internalStatus, setInternalStatus] = useState<'error' | 'warning' | null>(null);
  const status = externalStatus || internalStatus;
  const message = externalMessage || internalMessage;

  const triggerValidate = (value: string) => {
    if (rules) {
      const validateMessage = checkValidate({ rules, value, type: 'string' });
      setInternalMessage(validateMessage || null);
      setInternalStatus(validateMessage ? 'error': null);
      return !validateMessage;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
    if (validateTrigger === 'onChange' || status) {
      triggerValidate(e.target.value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onBlur?.(e);
    if (validateTrigger === 'onBlur') {
      triggerValidate(e.target.value);
    }
  };

  return (
    <Flex flexDirection="column" gap="8px">
      <Show rule={label}>
        <label
          htmlFor={inputId}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </Show>
      <ShadcnInput
        id={inputId}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={[className, status ? INPUT_CLASS_MAP[status].input : ''].join(' ')}
        {...props}
      />
      <Show rule={message}>
        <p className={['text-sm font-medium', status ? INPUT_CLASS_MAP[status].message : ''].join(' ')}>{message}</p>
      </Show>
    </Flex>
  );
};
