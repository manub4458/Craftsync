'use client'; 

import Heading from "./heding";
import ServicesSection from "./serices";
import { useLenis } from '../hooks/lenis'; // Import the custom hook

import ProjectSection from "./projects";

const Page = () => {
useLenis(); // Initialize Lenis

  return (
<>
<Heading />
<ServicesSection />
<ProjectSection />
</>
  );
};

export default Page;