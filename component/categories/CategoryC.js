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
// import PressSlider from '../slider/PressSlider';

const CategoryC = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  const tempArr = [1, 2, 3];
  return (
    <>
      <Box px={{ base: '4', lg: '16' }} mb="20" py={'18'}>
        <Flex
          justifyContent={'space-between'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Flex alignItems={'baseline'}>
            <Icon as={FaCircle} boxSize={6} mr="4" color={'purple'} />
            <Box>
              <Heading as="h4" size={'lg'}>
                COINS
              </Heading>
              <Text>The latest entertainment news in the world</Text>
            </Box>
          </Flex>
          <Box
            display={'flex'}
            alignItems="center"
            justifyContent={{ base: 'flex-end' }}
            mt={{ base: '4', md: '0' }}
          >
            <Flex mr={'2'} display={{ base: 'none', lg: 'block' }}>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
              >
                ALL
              </Button>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
              >
                Bitcoin
              </Button>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
              >
                Ethrium
              </Button>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
              >
                Binance
              </Button>
              <Button
                variant={'outline'}
                colorScheme="blue"
                rounded={'none'}
                size="sm"
              >
                Cardano
              </Button>
            </Flex>

            <Select
              placeholder="Select option"
              mr={'2'}
              display={{ base: 'block', lg: 'none' }}
              size="sm"
            >
              <option value="option1">ALL</option>
              <option value="option2">Bitcoin</option>
              <option value="option3">Ethrium</option>
              <option value="option3">Binance</option>
              <option value="option3">Cardano</option>
            </Select>

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

        <Grid
          templateColumns={{ md: '4fr 4fr 4fr', sm: 'repeat(3, 1fr)' }}
          textColor="white"
          gap={4}
          my={6}
        >
          <Box style={{ position: 'relative' }}>
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                top: '10px',
                color: 'white',
              }}
            >
              <Button
                bg={'#03a9e7'}
                color="white"
                rounded={'none'}
                size="xs"
                fontWeight={'bold'}
              >
                METAVERSE
              </Button>
            </Box>
            <Img
              draggable={false}
              alt="text"
              style={{ width: '100%', height: '100%' }}
              src="https://wptesting.thenwg.xyz/wp-content/uploads/2022/04/coin-banner.jpg"
            />
            <Box
              p={4}
              style={{
                position: 'absolute',
                left: 0,
                bottom: '10px',
                color: 'white',
              }}
            >
              <Heading as="h4" size={'lg'} color={'white'}>
                The Joy of Petty Grievances in Death Becomes Her
              </Heading>
              <Flex mt="2" alignItems={'center'}>
                <Icon as={FaRegClock} color={primaryTextColor} />
                <Text color={primaryTextColor} ml={4}>
                  Oct 18, 2019
                </Text>
              </Flex>
            </Box>
          </Box>

          <Box px="4">
            {tempArr.map((image, index) => {
              return (
                <Flex py="4" key={index}>
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
                      noOfLines={2}
                      lineHeight="initial"
                      paddingRight="2"
                      color={primaryTextColor}
                    >
                      All That We See or Seem is but a Dream Within a Dream
                      Becomes Her
                    </Text>
                    <Flex mt="2" alignItems={'center'}>
                      <Icon as={FaRegClock} color={primaryTextColor} />
                      <Text ml={4} color={primaryTextColor}>
                        Oct 18, 2019
                      </Text>
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
          </Box>

          <Box px="4">
            {tempArr.map((image, index) => {
              return (
                <Flex py="4" key={index}>
                  <Box w={'70%'}>
                    <Button
                      bg={'#03a9e7'}
                      color="white"
                      mb={2}
                      rounded={'none'}
                      size="xs"
                      fontWeight={'bold'}
                    >
                      {' '}
                      BITCOIN
                    </Button>
                    <Text
                      fontWeight={'bold'}
                      noOfLines={2}
                      lineHeight="initial"
                      paddingRight="2"
                      color={isLightTheme ? 'black' : 'white'}
                    >
                      All That We See or Seem is but a Dream Within a Dream
                      Becomes Her
                    </Text>
                    <Flex mt="2" alignItems={'center'}>
                      {' '}
                      <Icon as={FaRegClock} /> <Text ml={4}>Oct 18, 2019</Text>{' '}
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
          </Box>
        </Grid>

        <Box h={150} bg={'#ededed'} my={6}></Box>
      </Box>
    </>
  );
};

export default CategoryC;
