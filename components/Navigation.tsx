import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import { useColorMode } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const NavigationMenu = () => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const handleLinkClick = (slug: string) => {
    router.push(`/${slug}`);
  };

  return (
    <nav className="container flex items-center justify-between py-6">
      {/* Logo */}