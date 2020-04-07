import React, { forwardRef } from 'react';
import Box from '../Box';
import Icon from '../Icon';
import PseudoBox from '../PseudoBox';
import { getIconWrapperProps, useSelectStyle } from './styles';
import splitProps from './split-props';

const defaultVariant = 'outline';

const Select = forwardRef((
  {
    variant,
    children,
    ...rest
  },
  ref,
) => {
  // Use fallback values if values are null or undefined
  variant = variant ?? defaultVariant;

  const iconWrapperProps = getIconWrapperProps();
  const styleProps = useSelectStyle({ variant });
  const [rootProps, selectProps] = splitProps(rest);
  const { disabled, required } = selectProps;

  return (
    <Box
      position="relative"
      width="100%"
      {...rootProps}
    >
      <PseudoBox
        ref={ref}
        as="select"
        aria-disabled={disabled}
        aria-required={required}
        {...styleProps}
        {...selectProps}
      >
        {children}
      </PseudoBox>
      <PseudoBox
        aria-disabled={disabled}
        {...iconWrapperProps}
      >
        <Icon width="4x" name="_core.angle-down" />
      </PseudoBox>
    </Box>
  );
});

Select.displayName = 'Select';

export default Select;
