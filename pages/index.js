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
import Head from 'next/head';
import React from 'react';
import { FaRegClock, FaCircle, FaPlayCircle, FaFacebook } from 'react-icons/fa';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Videoslider from '../component/slider/Video';
import Link from 'next/link';

import {
  getAllPostsForHome,
  getHeaderMenuByName,
  getCateogryRecentPostbyName,
} from '../lib/api';

import Home from '../component/Home';

const Index = ({
  allPosts: { edges },
  preview,
  menu,
  sideBarData,
  categoryAData,
  categoryBData,
  categoryCData,
  categoryDData,
  categoryEData,
  categoryFData,
  categoryGData,
}) => {
  // theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightTheme = colorMode == 'light' ? true : false;
  const primaryTextColor = isLightTheme ? 'black' : 'white';
  const secondaryTextColor = isLightTheme ? 'white' : 'black';
  const primaryBgColor = isLightTheme ? 'white' : 'black';
  const secondaryBgColor = isLightTheme ? 'black' : 'white';

  //  data store
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  // console.log('checkdata', morePosts);

  return (
    <>
      <Head>
        <title data-rh="true">News Control - get the latest news</title>
        <meta
          name="description"
          content="Get the latest news for Bollywood, IPL, Sports and Other Social breaking news"
        />

        <link rel="canonical" href="https://newsctrls.com/" />
      </Head>

      <Home
        post={edges}
        sideBarData={sideBarData}
        categoryAData={categoryAData}
        categoryBData={categoryBData}
        categoryCData={categoryCData}
        categoryDData={categoryDData}
        categoryEData={categoryEData}
        categoryFData={categoryFData}
        categoryGData={categoryGData}
      />
    </>
  );
};

export default Index;

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);
  const sideBarData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.SIDEBAR.SIDEBAR_NAME
  );
  const categoryAData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_A.DEMO_NAME
  );
  const categoryBData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_B.DEMO_NAME
  );
  const categoryCData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_C.DEMO_NAME
  );
  const categoryDData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_D.DEMO_NAME
  );
  const categoryEData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_E.DEMO_NAME
  );
  const categoryFData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_F.DEMO_NAME
  );
  const categoryGData = await getCateogryRecentPostbyName(
    'categoryName',
    process.env.home.categoryList.CATEGORY_G.DEMO_NAME
  );

  return {
    props: {
      allPosts,
      preview,
      menu: menuData.menu,
      sideBarData: sideBarData,
      categoryAData: categoryAData,
      categoryBData: categoryBData,
      categoryCData: categoryCData,
      categoryDData: categoryDData,
      categoryEData: categoryEData,
      categoryFData: categoryFData,
      categoryGData: categoryGData,
    },
    revalidate: 15, //10 minutes
  };
}
