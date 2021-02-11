export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  IBadgeProps,
  IconButton,
  IIconButtonProps,
  Alert,
  IAlertProps,
  AspectRatio,
  IAspectRatioProps,
  Avatar,
  Breadcrumb,
  IBreadcrumbProps,
  CloseButton,
  ICloseButtonProps,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Kbd,
  Progress,
  Accordion,
  IAccordionProps,
  IAccordionItemProps,
  IAccordionSummaryProps,
  IAccordionDetailsProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  FormControl,
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
  Stat,
  Tag,
  Code,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  IPinInputFieldProps,
  Fade,
  useFadeTransition,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  Modal,
  Popover,
  IPopoverProps,
  AlertDialog,
  IToastProps,
  useToast,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  SimpleGrid,
  ISimpleGridProps,
  Tabs,
  TabBar,
  Tab,
  ITagProps,
  TabViews,
  TabView,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  Snackbar,
  useSnackbar,
  ISnackbarProps,
  IuseSnackbarProps,
  Fab,
  IFabProps,
  Typeahead,
  useTypeahead,
} from './components/composites';

import {
  View,
  Text,
  ITextProps,
  Checkbox,
  ICheckboxProps,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  IRadioValue,
  IRadioGroupProps,
  Button,
  ButtonGroup,
  IButtonProps,
  Column,
  Row,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  ISliderProps,
  ISliderContextProps,
  Icon,
  createIcon,
  IIconProps,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputProps,
  Image,
  IImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  Switch,
  ISwitchProps,
  IFlexProps,
  TextArea,
  Link,
  ILinkProps,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Ol,
  Ul,
  IListProps,
  IListItemProps,
  Select,
  ISelectProps,
  ISelectItemProps,
} from './components/primitives';

export * from './theme';
export * from './core';
export * from './hooks';
export * from './factory';

export {
  AppBar,
  Alert,
  AspectRatio,
  Avatar,
  Badge,
  Button,
  ButtonGroup,
  IconButton,
  Heading,
  View,
  Text,
  Code,
  Checkbox,
  Radio,
  Column,
  Row,
  Center,
  Square,
  Circle,
  Box,
  Stack,
  VStack,
  HStack,
  ZStack,
  Slider,
  Icon,
  createIcon,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spinner,
  Image,
  Switch,
  Flex,
  Kbd,
  Breadcrumb,
  CloseButton,
  Container,
  Divider,
  Link,
  Progress,
  Accordion,
  Skeleton,
  FormControl,
  Stat,
  Tag,
  TextArea,
  Wrap,
  PinInput,
  Fade,
  useFadeTransition,
  ScaleFade,
  Slide,
  SlideFade,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Spacer,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  List,
  ListItem,
  ListItem as Li,
  ListIcon,
  Ol,
  Ul,
  Modal,
  Popover,
  AlertDialog,
  useToast,
  Menu,
  MenuItem,
  MenuGroup,
  MenuItemOption,
  MenuOptionGroup,
  SimpleGrid,
  Tabs,
  TabBar,
  Tab,
  TabViews,
  TabView,
  Actionsheet,
  ActionsheetContent,
  ActionsheetFooter,
  ActionsheetHeader,
  ActionsheetItem,
  Snackbar,
  useSnackbar,
  Fab,
  Typeahead,
  useTypeahead,
  Select,
};
export type {
  IAlertProps,
  IAspectRatioProps,
  IHeadingProps,
  IBadgeProps,
  IButtonProps,
  IIconButtonProps,
  ITextProps,
  ICheckboxProps,
  ICheckboxGroupProps,
  IRadioProps,
  IRadioValue,
  IRadioGroupProps,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  IBoxProps,
  IBreadcrumbProps,
  ITagProps,
  ISliderProps,
  ISliderContextProps,
  IIconProps,
  IInputProps,
  ISpinnerProps,
  IImageProps,
  ICloseButtonProps,
  IContainerProps,
  IPopoverProps,
  IDividerProps,
  ILinkProps,
  IAccordionProps,
  IAccordionItemProps,
  IAccordionSummaryProps,
  IAccordionDetailsProps,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  ISkeletonProps,
  IFormControlProps,
  IFormControlLabelProps,
  IFormControlErrorMessageProps,
  IFormControlHelperTextProps,
  ISwitchProps,
  IFlexProps,
  IWrapProps,
  IPinInputProps,
  IPinInputFieldProps,
  IFadeProps,
  IScaleFadeProps,
  ISlideProps,
  ISlideFadeProps,
  INumberInputProps,
  INumberInputFieldProps,
  INumberInputContext,
  INumberInputSteppersProps,
  INumberInputStepperProps,
  IListProps,
  IListItemProps,
  IToastProps,
  IMenuProps,
  IMenuItemProps,
  IMenuItemOptionProps,
  IMenuGroupProps,
  IMenuOptionGroupProps,
  ISimpleGridProps,
  ITabsProps,
  ITabBarProps,
  ITabProps,
  ITabViewsProps,
  ITabViewProps,
  ITabsContextProps,
  IActionsheetProps,
  IActionsheetContentProps,
  IActionsheetFooterProps,
  IActionsheetHeaderProps,
  IActionsheetItemProps,
  ISnackbarProps,
  IuseSnackbarProps,
  IFabProps,
  ISelectProps,
  ISelectItemProps,
};
