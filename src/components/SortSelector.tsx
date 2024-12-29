import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton
        background={"gray"}
        color={"white"}
        paddingX={"10px"}
        paddingY={"5px"}
        borderRadius={"5px"}
        fontWeight={"bold"}
      >
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>
        <MenuItem>Date added</MenuItem>
        <MenuItem>Name</MenuItem>
        <MenuItem>Release date</MenuItem>
        <MenuItem>Popularity</MenuItem>
        <MenuItem>Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
