'use client';

import dynamic from "next/dynamic";
import { PageTransition } from "@/components/layout";
import {
  Hero,
  About,
  Services,
  Projects,
  Testimonials,
  Contact,
  Footer,
} from "@/components/sections";

const ThreeScene = dynamic(() => import("@/components/three").then((mod) => mod.ThreeScene), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 h-screen w-screen bg-[#050508]" />
  ),
});

export default function Home() {
  return (
    <PageTransition>
      <ThreeScene />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </PageTransition>
  );
}
