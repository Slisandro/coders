import {
    Avatar,
    Box,
    BoxProps,
    Button,
    Flex,
    Icon,
    Text,
    VStack,
    useColorModeValue
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { AiOutlineFolderOpen, AiOutlineHome } from 'react-icons/ai';
import { CgCommunity } from 'react-icons/cg';
import { IoSchoolOutline } from 'react-icons/io5';
import { MdWorkOutline } from 'react-icons/md';
import { RiFlashlightFill } from 'react-icons/ri';
import NavItem from './navitem-component';

export default function Sidebar({ ...props }: BoxProps) {
    const { t } = useTranslation("common");
    return (
        <Box
            as="nav"
            pos="fixed"
            top="0"
            left="0"
            zIndex="sticky"
            h="full"
            pr="2"
            overflowX="hidden"
            overflowY="auto"
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('inherit', 'gray.700')}
            borderRightWidth="1px"
            w="60"
            {...props}
        >
            <VStack h="full" w="full" alignItems="flex-start" justify="space-between">
                <Box w="full">
                    <Flex px="5" py="5" align="center">
                        <Icon as={RiFlashlightFill} h={10} w={10} />
                        <Text
                            fontSize="3xl"
                            ml="2"
                            color={useColorModeValue('brand.500', 'white')}
                            fontWeight="semibold"
                        >
                            CODERS
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        as="nav"
                        fontSize="md"
                        color="gray.600"
                        aria-label="Main Navigation"
                    >
                        <NavItem
                            icon={AiOutlineHome}
                        >
                            <Link href="/home">
                                {t("home")}
                            </Link>
                        </NavItem>
                        <NavItem
                            icon={MdWorkOutline}
                        >
                            <Link href="/jobs">
                                {t("jobs")}
                            </Link>
                        </NavItem>
                        <NavItem
                            icon={AiOutlineFolderOpen}
                        >
                            <Link href="/projects">
                                {t("projects")}
                            </Link>
                        </NavItem>
                        <NavItem
                            icon={IoSchoolOutline}
                        >
                            <Link href="/courses">
                                {t("courses")}
                            </Link>
                        </NavItem>
                        <NavItem
                            icon={CgCommunity}
                        >
                            <Link href="/community">
                                {t("community")}
                            </Link>
                        </NavItem>
                    </Flex>
                </Box>

                <Flex px="4" py="5" mt={10} justify="space-between" w="full" alignItems="center">
                    <Avatar
                        size={'md'}
                        name="Ahmad"
                        src="https://avatars2.githubusercontent.com/u/37842853?v=4"
                    />
                    <Button
                        as={Button}
                        px="4"
                        py="2"
                        size={'md'}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        _hover={{ textDecoration: 'none' }}
                    >
                        Salir
                    </Button>
                </Flex>
            </VStack>
        </Box>
    )
};