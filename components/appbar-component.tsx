import {
    Box,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Stack,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import { RiFlashlightFill } from 'react-icons/ri';
import Sidebar from './sidebar-component';

export default function AppBar() {
    const { isOpen, onClose, onOpen } = useDisclosure();

    return (
        <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh">
            <Sidebar display={{ base: 'none', md: 'unset' }} />
            <Drawer isOpen={isOpen} onClose={onClose} placement="left">
                <DrawerOverlay />
                <DrawerContent>
                    <Sidebar w="full" borderRight="none" />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                <Flex
                    as="header"
                    align="center"
                    w="full"
                    px="4"
                    py="4"
                    borderBottomWidth="1px"
                    borderColor={useColorModeValue('inherit', 'gray.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                    justify={{ base: 'space-between', md: 'flex-end' }}
                    boxShadow="lg"
                >
                    <IconButton
                        aria-label="Menu"
                        display={{ base: 'inline-flex', md: 'none' }}
                        onClick={onOpen}
                        icon={<FiMenu />}
                        size="md"
                    />
                    <Flex align="center">
                        <Icon as={RiFlashlightFill} h={8} w={8} />
                    </Flex>
                </Flex>
                <Box as="main" p={14} minH="30rem" bg={useColorModeValue('auto', 'gray.800')}>
                    <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        alignItems="center"
                        justifyContent="center"
                        h="100%"
                    >
                        <Stack spacing={8}>
                            {/* <Box>
                                <Heading color="blue.400" fontSize="3xl">
                                    Point of sale
                                </Heading>
                                <Text fontSize="md" color="gray.500">
                                    Manage your inventory and sale effeciently.
                                </Text>
                            </Box>
                            <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="center">
                                <Button
                                    rounded="full"
                                    bg="blue.400"
                                    color="white"
                                    _hover={{
                                        bg: 'blue.500'
                                    }}
                                >
                                    Stocks
                                </Button>
                                <Button rounded="full">Vendors</Button>
                            </Stack> */}
                        </Stack>
                        {/* <Image
                            alt="Homepage Image"
                            objectFit="cover"
                            width="60vh"
                            src="http://pos-new-system.herokuapp.com/static/media/EmptyNotesList.2ec57340.svg"
                        /> */}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
}