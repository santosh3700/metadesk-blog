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
// import EditorPicks from '../slider/EditorPicks';

const CategoryE = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

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
                    TOP NEWS
                  </Heading>
                  <Text color={primaryTextColor}>
                    The latest entertainment news in the world
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
              {tempArrFirst.map((image, index) => {
                return (
                  <Box key={index}>
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
                          {' '}
                          METAVERSE
                        </Button>
                      </Box>
                      <Img
                        src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/part.jpg"
                        objectFit={'cover'}
                        w={'100%'}
                      />
                    </Box>
                    <Text
                      fontWeight={'bold'}
                      lineHeight={'normal'}
                      my={'4'}
                      color={primaryTextColor}
                    >
                      The Two Most Important Tools to Reconnect With Your
                      Partner
                    </Text>
                    <Flex mt="2" alignItems={'center'}>
                      <Icon as={FaRegClock} color={primaryTextColor} />
                      <Text ml={4} color={primaryTextColor}>
                        Oct 18, 2019
                      </Text>
                    </Flex>
                  </Box>
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
              {tempArrSecond.map((social, index) => {
                return (
                  <Flex
                    key={index}
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
                      <Icon color={'white'} as={ChevronRightIcon} boxSize={6} />
                    </Flex>
                  </Flex>
                );
              })}
            </Grid>

            <Box my={4}>
              <Heading as={'h4'} size={'lg'} color={primaryTextColor}>
                Most Viewed
              </Heading>
              {tempArrThird.map((no, index) => {
                return (
                  <Box key={index}>
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
                          {no}
                        </Text>
                      </Box>

                      <Text
                        lineHeight={'normal'}
                        fontSize="sm"
                        color={primaryTextColor}
                      >
                        Whoever said “It’s not about the destination. It’s the
                        journey” never flew on a long haul.
                      </Text>
                    </Flex>
                    <Divider />
                  </Box>
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
