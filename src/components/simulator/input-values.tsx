import { Input } from "../ui/input";
import { Slider } from "../ui/slider";

interface InputValueProps {
  subtitle: string;
  value: number;
  onChange: (value: number) => void;
  maxValue?: number;
  steps?: number;
  type?: "currency" | "number" | "percentage";
}

export default function InputValue({
  subtitle,
  value,
  onChange,
  maxValue = 1000000,
  steps = 100,
  type = "currency",
}: InputValueProps) {
  function formatValue() {
    switch (type) {
      case "currency":
        return value.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        });
      case "percentage":
        return `${value}%`;
      default:
        return value;
    }
  }

  return (
    <div className="flex-col w-full items-center space-y-4">
      <h2 className="text-lg font-light dark:text-muted-foreground lg:text-3xl">
        {subtitle}
      </h2>
      <div className="w-full flex gap-8">
        <Slider
          max={maxValue}
          value={[value]}
          step={steps}
          onValueChange={([value]) => onChange(value)}
        />
        <div className="w-full">
          <p>{formatValue()}</p>
        </div>
      </div>
    </div>
  );
}
