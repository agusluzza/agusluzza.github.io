import Navbar from "../components/Navbar";
import { HeroUIProvider } from "@heroui/react";

export default function App() {
  return (
    <HeroUIProvider>
      <Navbar />
    </HeroUIProvider>
  );
}
