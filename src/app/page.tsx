import TopHeader from "@/components/header";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Hero from "@/components/hero";
import {
  CartDetails,
  Todays,
  Button,
  Hero3,
  OurProducts,
  ThisMonth,
} from "@/components/hero";
import Newarrival from "@/components/newarrival";
import { Prefooter } from "@/components/newarrival";
export default function Home() {
  return (
    <>
      <TopHeader />
      <Header />
      <Hero />
      <Todays />
      <CartDetails />
      <Button />
      <OurProducts />
      <ThisMonth />
      <Hero3 />
      <Newarrival />
      <Prefooter />
      <Footer/>
    </>
  );
}
