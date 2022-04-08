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
import { compareAsc, format } from 'date-fns';

const CategoryE = (props) => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  // store data
  const { data } = props;

  // console.log('categoryE', data);

  // tempvar

  const tempArrFirst = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const tempArrSecond = [1, 2, 3, 4, 5];
  const tempArrThird = [1, 2, 3, 4, 5];

  return (
    <>
      <Box px={{ base: '4', lg: '16' }} mb="20" py={'18'}>
        <Grid
          templateColumns={{ md: '9fr 3fr', sm: 'repeat(2, 1fr)' }}
          textColor="white"
          gap={6}
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
                    {process.env.home.categoryList.CATEGORY_E.NAME}
                  </Heading>
                  <Text color={primaryTextColor}>
                    {process.env.home.categoryList.CATEGORY_E.DESC}
                  </Text>
                </Box>
              </Flex>
            </Flex>
            <Grid
              templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(3, 1fr)' }}
              textColor="white"
              gap={4}
              mt={6}
            >
              {data.edges &&
                data.edges.slice(0, 9).map((item, index) => {
                  return (
                    item &&
                    item.node && (
                      <Link href={item.node.slug} key={index}>
                        <Box cursor="pointer">
                          <Box style={{ position: 'relative' }}>
                            <Box
                              style={{
                                position: 'absolute',
                                left: 0,
                                bottom: '0',
                                color: 'white',
                              }}
                            >
                              <Button
                                bg={'#03a9e7'}
                                color="white"
                                rounded={'none'}
                                size="sm"
                                fontWeight={'bold'}
                              >
                                METAVERSE
                              </Button>
                            </Box>
                            {item.node.featuredImage && (
                              <Img
                                src={item.node.featuredImage.node.sourceUrl}
                                alt={item.node.title}
                                objectFit={'cover'}
                                w={'100%'}
                              />
                            )}
                          </Box>
                          <Text
                            fontWeight={'bold'}
                            lineHeight={'normal'}
                            my={'4'}
                            color={primaryTextColor}
                          >
                            {item.node.title}
                          </Text>
                          <Flex mt="2" alignItems={'center'}>
                            <Icon as={FaRegClock} color={primaryTextColor} />
                            <Text ml={4} color={primaryTextColor}>
                              {format(new Date(item.node.date), 'yyyy-MM-dd')}
                            </Text>
                          </Flex>
                        </Box>
                      </Link>
                    )
                  );
                })}
            </Grid>
          </Box>

          <Box>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(1, 1fr)' }}
              textColor="white"
              gap={4}
            >
              {tempArrSecond.map((item, index) => {
                return (
                  <Link href={'item.node.slug'} key={index}>
                    <Flex
                      cursor="pointer"
                      bg={'#03a9e7'}
                      p={'4'}
                      alignItems={'center'}
                    >
                      <Stack direction="row">
                        <Icon
                          as={FaFacebook}
                          boxSize={10}
                          color={'white'}
                          mr={4}
                        />
                        <Divider orientation="vertical" />
                      </Stack>
                      <Flex justifyContent={'space-around'} w={'100%'}>
                        <Text color={'white'}>0</Text>
                        <Text color={'white'}>Followers</Text>
                        <Icon
                          color={'white'}
                          as={ChevronRightIcon}
                          boxSize={6}
                        />
                      </Flex>
                    </Flex>
                  </Link>
                );
              })}
            </Grid>

            <Box my={4}>
              <Heading as={'h4'} size={'lg'} color={primaryTextColor}>
                Most Viewed
              </Heading>
              {data.edges &&
                data.edges.slice(9, 14).map((item, index) => {
                  return (
                    <Link key={index} href={item.node.slug}>
                      <Box cursor={'pointer'}>
                        <Flex my={4}>
                          <Box
                            h={'30px'}
                            w={'65px'}
                            borderRadius="full"
                            bg={'#03a9e7'}
                            mr={'4'}
                          >
                            <Text
                              textAlign={'center'}
                              color="white"
                              fontSize={'lg'}
                              fontWeight={'bold'}
                            >
                              {index + 1}
                            </Text>
                          </Box>

                          <Text
                            lineHeight={'normal'}
                            fontSize="sm"
                            color={primaryTextColor}
                          >
                            {item.node.title}
                          </Text>
                        </Flex>
                        <Divider />
                      </Box>
                    </Link>
                  );
                })}
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryE;
