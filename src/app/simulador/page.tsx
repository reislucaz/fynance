import Simulator from "@/components/simulator/simulator";
import Title from "@/components/title";
import { Calculator } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen p-8 flex-col space-y-8">
      <Title title="Simulador de Investimentos" icon={<Calculator />} />
      <Simulator />
    </div>
  );
}
