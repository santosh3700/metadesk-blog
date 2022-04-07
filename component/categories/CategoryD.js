import React from 'react';
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Grid,
  Heading,
  Icon,
  Img,
  Input,
  Select,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Video from '../slider/Video';

const CategoryD = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  const tempArr = [1, 2, 3, 4];
  return (
    <>
      <Box px={{ base: '4', lg: '16' }} mb="20" py={'20'} bg={'black'}>
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as="h4" size={'lg'} color={'white'}>
                VIDEO
              </Heading>
              <Text color={'white'}>
                The latest entertainment news in the world
              </Text>
            </Box>
          </Flex>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={{ base: 'flex-end' }}
            mt={{ base: '4', md: '0' }}
          >
            <Flex>
              <Icon as={ChevronLeftIcon} boxSize={6} color={'white'} />{' '}
              <Icon color={'white'} as={ChevronRightIcon} boxSize={6} />
            </Flex>
            <Button
              variant={'outline'}
              colorScheme="blue"
              rounded={'none'}
              size="sm"
              fontWeight={'bold'}
            >
              SEE ALL
            </Button>
          </Box>
        </Flex>

        <Box my={'8'}>
          <Video />
        </Box>

        <Divider />

        <Grid
          templateColumns={{ md: '4fr 4fr 4fr 4fr', sm: 'repeat(4, 1fr)' }}
          textColor="white"
          gap={8}
          my={6}
        >
          {tempArr.slice(0, 5).map((image, index) => {
            return (
              <Box key={index}>
                <Flex py="4">
                  <Box w={'40%'}>
                    <Img
                      h={'100%'}
                      objectFit={'cover'}
                      src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg"
                      alt="Woman paying for a purchase"
                    />
                  </Box>
                  <Box w={'60%'} px={'4'}>
                    <Button
                      colorScheme={'orange'}
                      color="white"
                      mb={2}
                      rounded={'none'}
                      size="xs"
                      fontWeight={'bold'}
                    >
                      BITCOIN
                    </Button>
                    <Text
                      fontWeight={'medium'}
                      noOfLines={3}
                      lineHeight="initial"
                      paddingRight="2"
                      color={'white'}
                    >
                      All That We See or Seem is but a Dream Within a Dream
                      Becomes Her
                    </Text>
                    <Flex mt="2" alignItems={'center'}>
                      <Icon as={FaRegClock} color={'white'} />
                      <Text color={'white'} ml={4}>
                        Oct 18, 2019
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default CategoryD;
