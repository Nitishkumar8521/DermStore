import React, { useContext } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { Link as RouterLink, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Navigation from "./Navigation";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <Flex align="center" justify="space-between" py={5} fontWeight="medium">

      {/* Desktop Navigation */}
      <Flex
        display={{ base: "none", sm: "flex" }}
        align="center"
        justify="space-between"
        px={8}
        py={4}
        w="100%"
      >
        {/* Left Navigation */}
        <List display="flex" gap={5} fontSize="sm" color="gray.700">
          <Navigation />
        </List>

        {/* Center Logo */}
        <RouterLink to="/">
          <Image src={assets.company_logo} w={36} alt="Company Logo" />
        </RouterLink>
      </Flex>
      {/* Icons */}
      <Flex align="center" gap={6}>
        {/* Search Icon */}
        <Image
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          w={5}
          cursor="pointer"
        />

        {/* Profile Dropdown */}
        <Box
          position="relative"
          _hover={{ ".dropdown-menu": { display: "block" } }}
        >
          <Image
            onClick={() => !token && navigate("/login")}
            src={assets.profile_icon}
            alt="Profile"
            w={5}
            cursor="pointer"
          />
          {token && (
            <Box
              className="dropdown-menu"
              display="none"
              position="absolute"
              right={0}
              pt={4}
            >
              <Flex
                direction="column"
                gap={2}
                w={36}
                py={3}
                px={5}
                bg="gray.50"
                color="gray.500"
                borderRadius="md"
              >
                <Text cursor="pointer" _hover={{ color: "black" }}>
                  My Profile
                </Text>
                <Text
                  onClick={() => navigate("/orders")}
                  cursor="pointer"
                  _hover={{ color: "black" }}
                >
                  Orders
                </Text>
                <Text
                  onClick={logout}
                  cursor="pointer"
                  _hover={{ color: "black" }}
                >
                  Logout
                </Text>
              </Flex>
            </Box>
          )}
        </Box>

        {/* Cart Icon */}
        <RouterLink to="/cart" position="relative">
          <Box position="relative">
            <Image src={assets.cart_icon} w={5} minW={5} alt="Cart" />
            {getCartCount() > 0 && (
              <Text
                position="absolute"
                right="-0.5"
                bottom="-0.5"
                w={4}
                h={4}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="black"
                color="white"
                borderRadius="full"
                fontSize="xs"
                lineHeight={1}
              >
                {getCartCount()}
              </Text>
            )}
          </Box>
        </RouterLink>

        {/* Mobile Menu Toggle */}
        <Image
          onClick={onToggle}
          src={assets.menu_icon}
          w={5}
          cursor="pointer"
          display={{ base: "block", sm: "none" }}
          alt="Menu"
        />
      </Flex>
      {/* Mobile Menu */}
      <Box
        position="fixed"
        top={0}
        right={0}
        bottom={0}
        bg="white"
        w={isOpen ? "full" : 0}
        overflow="hidden"
        transition="all 0.3s ease"
        zIndex={10}
      >
        <Flex direction="column" color="gray.600">
          <Flex onClick={onClose} align="center" gap={4} p={3} cursor="pointer">
            <Image
              src={assets.dropdown_icon}
              h={4}
              transform="rotate(180deg)"
              alt="Close"
            />
            <Text>Back</Text>
          </Flex>
          <Flex direction="column" px={4} py={2} gap={2}>
            {/* BRAND Dropdown */}
            <Accordion allowToggle>
              <AccordionItem border="none">
                <AccordionButton px={0} py={2}>
                  <Box flex="1" textAlign="left">
                    Brand
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel px={0}>
                  {["tarte", "alterna", "isdin"].map((brand) => (
                    <NavLink
                      key={brand}
                      to={`/brand/${brand}`}
                      onClick={onClose}
                      style={{
                        display: "block",
                        padding: "6px 0",
                        color: "#4A5568",
                      }}
                    >
                      {brand.charAt(0).toUpperCase() + brand.slice(1)}
                    </NavLink>
                  ))}
                </AccordionPanel>
              </AccordionItem>

              {/* CATEGORY Dropdown */}
              <AccordionItem border="none">
                <AccordionButton px={0} py={2}>
                  <Box flex="1" textAlign="left">
                    By Category
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel px={0}>
                  {["eye", "shampoo", "face"].map((category) => (
                    <NavLink
                      key={category}
                      to={`/category/${category}`}
                      onClick={onClose}
                      style={{
                        display: "block",
                        padding: "6px 0",
                        color: "#4A5568",
                      }}
                    >
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </NavLink>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* BESTSELLERS */}
            <NavLink
              to="/bestsellers"
              onClick={onClose}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #E2E8F0",
                color: "#4A5568",
              }}
            >
              Bestsellers
            </NavLink>

            {/* TEXT AN EXPERT */}
            <NavLink
              to="/text-an-expert"
              onClick={onClose}
              style={{
                padding: "8px 0",
                borderBottom: "1px solid #E2E8F0",
                color: "#4A5568",
              }}
            >
              Text an Expert
            </NavLink>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Navbar;
