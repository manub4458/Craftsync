'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AnimatedLoader from './AnimatedLoader';

const RouteLoader = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); // Start true for initial load

  useEffect(() => {
    const handleStart = () => {
      console.log('Route change started');
      setLoading(true);
    };
    const handleComplete = () => {
      console.log('Route change completed');
      setTimeout(() => setLoading(false), 2000); // Match animation duration
    };

    // Attach router events
    router.events?.on('routeChangeStart', handleStart);
    router.events?.on('routeChangeComplete', handleComplete);
    router.events?.on('routeChangeError', handleComplete);

    // Clear initial loading after first render
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
      router.events?.off('routeChangeStart', handleStart);
      router.events?.off('routeChangeComplete', handleComplete);
      router.events?.off('routeChangeError', handleComplete);
    };
  }, [router.events]);

  console.log('Loading state:', loading);
  return loading ? <AnimatedLoader /> : null;
};

export default RouteLoader;