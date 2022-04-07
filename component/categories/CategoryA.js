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
  VStack,
} from '@chakra-ui/react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import EditorPicks from '../slider/EditorPicks';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CategoryA = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // var
  const tempArr = [1, 2, 3, 4, 5, 6];

  const tempArrSecond = [1, 2, 3];
  return (
    <>
      <Box px={{ base: '4', lg: '16' }} mb="20">
        <Grid
          templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={4}
        >
          <Box>
            <Flex
              justifyContent={'space-between'}
              flexDirection={{ base: 'column', md: 'row' }}
            >
              <Flex alignItems={'baseline'}>
                <Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
                <Box>
                  <Heading as="h4" size={'lg'} color={primaryTextColor}>
                    {process.env.home.categoryList.CATEGORY_A.NAME}
                  </Heading>
                  <Text color={primaryTextColor}>
                    {process.env.home.categoryList.CATEGORY_A.DESC}
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
                  <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
                  <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Link href="/full-width">
                  <Button
                    variant={'outline'}
                    colorScheme="blue"
                    rounded={'none'}
                    size="sm"
                    fontWeight={'bold'}
                  >
                    SEE ALL
                  </Button>
                </Link>
              </Box>
            </Flex>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
              // textColor="white"
              gap={4}
              mt={6}
            >
              {/* loop here */}
              <Carousel responsive={responsive} autoPlay={false}>
                {tempArr.map((item, key) => (
                  <Grid
                    key={key}
                    templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
                    textColor="white"
                    gap={4}
                  >
                    {/* <Box px="4" borderRight={'1px solid #b3b3b3'}> */}
                    {tempArrSecond.map((image, index) => {
                      return (
                        <Flex
                          key={index}
                          py="4"
                          borderBottom={'1px solid #b3b3b3'}
                        >
                          <Box w={'70%'}>
                            <Button
                              bg={'#03a9e7'}
                              color="white"
                              mb={2}
                              rounded={'none'}
                              size="xs"
                              fontWeight={'bold'}
                            >
                              BITCOIN
                            </Button>
                            <Text
                              fontWeight={'bold'}
                              noOfLines={3}
                              color={isLightTheme ? 'black' : 'white'}
                            >
                              All That We See or Seem is but a Dream Within a
                              Dream Becomes Her
                            </Text>
                            <Flex mt="2" alignItems={'center'}>
                              <Icon as={FaRegClock} color={primaryTextColor} />{' '}
                              <Text ml={4} color={primaryTextColor}>
                                Oct 18, 2019
                              </Text>{' '}
                            </Flex>
                          </Box>
                          <Box w={'30%'}>
                            <Img
                              h={'100%'}
                              objectFit={'cover'}
                              src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/editor-pic.jpg"
                              alt="Woman paying for a purchase"
                            />
                          </Box>
                        </Flex>
                      );
                    })}
                    {/* </Box> */}
                  </Grid>
                ))}
              </Carousel>
              {/* end of loop */}
            </Grid>
          </Box>

          <Box h="100%" bg="#ededed"></Box>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryA;
