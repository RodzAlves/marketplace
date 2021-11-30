import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  useColorModeValue
} from "@chakra-ui/react";

type Option = {
  value: string | undefined;
  label: string;
};

export type SelectProps = {
  options: Option[];
  onChange?: (value: string | string[]) => void;
  placeholder?: string;
  value?: string | string[];
};

const Select = ({
  options,
  onChange,
  placeholder = "Select an option",
  value
}: SelectProps) => {
  const purpleColor = useColorModeValue("#230F5B", "purple.200");
  const inversePurpleColor = useColorModeValue("purple.200", "#230F5B");

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon size={15} />}
        backgroundColor={purpleColor}
      >
        {placeholder}
      </MenuButton>
      <MenuList backgroundColor={purpleColor}>
        <MenuOptionGroup
          value={value}
          onChange={onChange}
          backgroundColor={purpleColor}
        >
          {options.map((option) => (
            <MenuItemOption
              key={option.value}
              value={option.value}
              icon={<></>}
              color="white"
              _hover={{ bg: inversePurpleColor }}
              _focus={{ bg: inversePurpleColor }}
            >
              {option.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export { Select };
