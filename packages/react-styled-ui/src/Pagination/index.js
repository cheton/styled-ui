import React, { forwardRef } from 'react';
import usePagination from '../usePagination';
import Button from '../Button';
import Box from '../Box';
import useColorMode from '../useColorMode';
import useTheme from '../useTheme';
import { setColorWithOpacity } from '../theme/colors';

const SelectableButton = ({ selected, selectedColor, color, ...props }) => {
  const { colorMode } = useColorMode();
  const { colors } = useTheme();
  const activeColor = {
    dark: `${color}:40`,
    light: `${color}:60`,
  }[colorMode];
  const activeBgColor = {
    dark: setColorWithOpacity('black', 0.12),
    light: setColorWithOpacity('black', 0.08),
  }[colorMode];
  const activeBorderColor = {
    dark: `${color}:50`,
    light: `${color}:50`,
  }[colorMode];
  const getSelectedProps = {
    color: activeColor,
    borderColor: activeBorderColor,
    bg: activeBgColor,
  };
  return (
    <Button
      {...(selected && getSelectedProps)}
      {...props}
    />
  );
};

const Pagination = forwardRef(
  (
    props,
    ref
  ) => {
    const {
      prevLabel = '<',
      nextLabel = '>',
      ellipsisLabel = '...',
      pageButtonColor = 'blue',
    } = props;
    // const {
    //   boundaryCount,
    //   count,
    //   defaultPage,
    //   disabled,
    //   hideNextButton,
    //   hidePrevButton,
    //   onChange: handleChange,
    //   page: pageProp,
    //   showFirstButton,
    //   showLastButton,
    //   siblingCount,
    // } = props;
    const { items } = usePagination(props);
    return (
      <React.Fragment>
        {items.map((item, index) => {
          let label;
          if (item.type === 'previous') {
            label = prevLabel;
          } else if (item.type === 'start-ellipsis' || item.type === 'end-ellipsis') {
            label = ellipsisLabel;
          } else if (item.type === 'next') {
            label = nextLabel;
          } else {
            label = item.page;
          }
          return (
            <SelectableButton
              key={`${item.page}-${item.type}`}
              color={pageButtonColor}
              selected={item.selected}
              disabled={item.disabled}
              variant="ghost"
              onClick={item.onClick}
            >
              {label}
            </SelectableButton>
          );
        })}
      </React.Fragment>
    );
  }
);

export default Pagination;