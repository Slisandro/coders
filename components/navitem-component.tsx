import {
    Flex,
    Icon,
    useColorModeValue
} from '@chakra-ui/react';

const NavItem = (props: any) => {
    const color = useColorModeValue('gray.600', 'gray.300');

    const { icon, children } = props;
    return (
        <Flex
            align="center"
            px="3"
            py="3"
            mt="3"
            cursor="pointer"
            role="group"
            fontSize="large"
            fontWeight="normal"
            transition=".15s ease"
            color={useColorModeValue('inherit', 'gray.400')}
            _hover={{
                bg: useColorModeValue('gray.100', 'gray.900'),
                color: useColorModeValue('gray.900', 'gray.200')
            }}
        >
            {icon && (
                <Icon
                    mx="4"
                    boxSize="4"
                    _groupHover={{
                        color: color
                    }}
                    width={5}
                    height={5}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    );
};

export default NavItem;