import {
  Box,
  Text,
  ListItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "BRAND",
    path: "/brand",
    dropdown: ["Tarte", "Alterna", "Isdin"],
    routePrefix: "/brand/",
  },
  {
    label: "BESTSELLERS",
    path: "/bestsellers",
  },
  {
    label: "BY CATEGORY",
    path: "/category",
    dropdown: ["Eye", "Shampoo", "Face"],
    routePrefix: "/category/",
  },
  {
    label: "TEXT AN EXPERT",
    path: "/expert",
  },
];

const Navigation = () => {
  return (
    <>
      {navItems.map((item) => (
        <ListItem key={item.label}>
          {item.dropdown ? (
            <Popover trigger="hover" placement="bottom-start">
              <PopoverTrigger>
                <Text cursor="pointer">{item.label}</Text>
              </PopoverTrigger>
              <PopoverContent w="200px" borderColor="gray.300">
                <PopoverBody>
                  {item.dropdown.map((entry) => (
                    <Box
                      key={entry}
                      as={NavLink}
                      to={`${item.routePrefix}${entry.toLowerCase()}`}
                      _hover={{ backgroundColor: "gray.100" }}
                      px={2}
                      py={1}
                      display="block"
                    >
                      {entry}
                    </Box>
                  ))}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : (
            <NavLink
              to={item.path}
              style={({ isActive }) => ({
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
                borderBottom: isActive ? "1.5px solid #374151" : "none",
              })}
            >
              <Text>{item.label}</Text>
            </NavLink>
          )}
        </ListItem>
      ))}
    </>
  );
};

export default Navigation;
