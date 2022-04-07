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
import EditorPicks from '../slider/EditorPicks';
// import VideoSecond from '../slider/VideoSecond';

const CategoryJ = () => {
  // theming
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

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
                    REVIEWS
                  </Heading>
                  <Text color={primaryTextColor}>
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
                  <Icon as={ChevronLeftIcon} boxSize={6} />{' '}
                  <Icon as={ChevronRightIcon} boxSize={6} />
                </Flex>
                <Button
                  variant={'outline'}
                  colorScheme="blue"
                  rounded={'none'}
                  size="sm"
                  fontWeight={'bold'}
                >
                  {' '}
                  SEE ALL
                </Button>
              </Box>
            </Flex>
            <Grid
              templateColumns={{ md: '12fr', sm: 'repeat(2, 1fr)' }}
              textColor="white"
              gap={4}
              mt={6}
            >
              <EditorPicks />
            </Grid>
          </Box>
          <Box h="100%" bg="#ededed"></Box>
        </Grid>
      </Box>
    </>
  );
};

export default CategoryJ;
