import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  DrawerFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Grid,
  useColorMode,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  PhoneIcon,
} from '@chakra-ui/icons';
import { createContext } from 'react';
import MobileMultiMenus from './MobileMultiMenus';
import DeskMultiMenus from './DeskMultiMenus';
import { FaBell, FaRegMoon, FaUser, FaMoon, FaSearch } from 'react-icons/fa';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpendrawer,
    onOpen: onOpendrawer,
    onClose: onClosedrawer,
  } = useDisclosure();

  const isLightTheme = colorMode == 'light' ? true : false;

  return (
    <Box zIndex={'9999'}>
      <Box
        // bg={'white'}
        px={{ base: '4', lg: '16' }}
        borderBottom={'1px solid #e2e8f0'}
      >
        {/* <Flex
                    color={useColorModeValue('gray.600', 'white')}
                    minH={'60px'}
                    py={{ base: 2 }}
                    px={{ base: 4 }}
                    align={'center'}
                    justifyContent={'space-between'}>

                    <Flex justify={{ base: 'center', md: 'start' }}>
                        <Link
                            href="/"
                        >
                            <Image
                                objectFit="contain"
                                src="https://akm-img-a-in.tosshub.com/aajtak/resource/img/bemisaal-20-saal/aajtak-logo-71X52.png"
                                width="100% !important"
                                height="54px !important"
                            />
                        </Link>
                    </Flex>

                    <Box bg='#ededed' height={"200px"} >fgdfh</Box>

                </Flex> */}

        <Grid
          templateColumns={{ md: '3fr 9fr ', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={4}
          py={{ base: '6', md: '12' }}
        >
          <Box>
            <Link href="/">
              <Image
                color={'red'}
                objectFit="contain"
                src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/logo-1-4.png"
                width="100% !important"
                height="54px !important"
              />
            </Link>{' '}
          </Box>
          <Box bg="#ededed" h={{ base: '100px', md: '100%' }}></Box>
        </Grid>

        <Stack justify={'space-between'} direction={'row'} py={4}>
          <Flex
            flex={{ base: 0, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onOpendrawer}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex
            // my={2}
            display={{ base: 'none', md: 'flex' }}
            justifyContent="space-around"
          >
            <DeskMultiMenus menus={menus} />
          </Flex>
          <Flex>
            <Icon
              as={colorMode == 'dark' ? MoonIcon : SunIcon}
              onClick={toggleColorMode}
              boxSize={6}
              mr={'4'}
            />
            {/* isDarkModeOn ? <SunIcon /> : <MoonIcon /> */}
            <Icon as={FaUser} onClick={onOpen} boxSize={6} mr={'4'} />
            <Icon as={FaSearch} onClick={onOpen} boxSize={6} mr={'4'} />
          </Flex>
        </Stack>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={'0px'}>
              <InputGroup>
                <InputLeftElement children={<FaSearch />} />
                <Input type="text" placeholder="Search" />
              </InputGroup>
            </ModalBody>
          </ModalContent>
        </Modal>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav
            isOpendrawer={isOpendrawer}
            onClosedrawer={onClosedrawer}
            onToggleDrawer
          />
        </Collapse>
      </Box>
    </Box>
  );
}

export const DrawerToggle = createContext();

export const MobileNav = ({
  isOpendrawer,
  onClosedrawer,
  onToggleDrawer,
  state,
}) => {
  var data = 'oka';

  return (
    <DrawerToggle.Provider value={onClosedrawer}>
      <Drawer
        placement="left"
        isOpen={isOpendrawer}
        onClose={onClosedrawer}
        w="200px"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">newscntrl Menu</DrawerHeader>

          <DrawerBody>
            <Stack
              bg={useColorModeValue('white', 'white')}
              p={4}
              display={{ md: 'none' }}
            >
              <MobileMultiMenus menus={menus} />
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </DrawerToggle.Provider>
  );
};

const menus = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Category',
    href: '/category',
  },
  {
    label: 'Full Width',
    href: '/full-width',
  },
  {
    label: 'Single Post',
    href: '/singlepost',
    // submenu: [
    //     {
    //         label: "Sub Menu 1",
    //         submenu: [

    //             {
    //                 label: "Boom 2",
    //                 href: "/",
    //             }
    //         ]
    //     },
    //     {
    //         label: "Sub Menu 2",
    //         submenu: [
    //             {
    //                 label: "Deep 1",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Deep 2",
    //                 submenu: [
    //                     {
    //                         label: "Lorem 1",
    //                         href: "/",
    //                     },
    //                     {
    //                         label: "Lorem 2",
    //                         submenu: [
    //                             {
    //                                 label: "Super Deep",
    //                                 href: "/",
    //                             }
    //                         ]
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
    //     {
    //         label: "Sub Menu 3",
    //         href: "/",
    //     },
    //     {
    //         label: "Sub Menu 4",
    //         submenu: [
    //             {
    //                 label: "Last 1",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Last 2",
    //                 href: "/",
    //             },
    //             {
    //                 label: "Last 3",
    //                 href: "/",
    //             }
    //         ]
    //     }
    // ]
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
