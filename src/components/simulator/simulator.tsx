"use client";

import { useSimulator } from "@/hooks/use-simulator";
import InputValue from "./input-values";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import {
  ResponsiveContainer,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function Simulator() {
  const {
    startingValue,
    handleStartingValue,
    handleMonthlyValue,
    monthlyValue,
    months,
    handleMonths,
    totalRevenue,
    moneyOnEachMonth,
    interestRate,
    handleInterestRate,
  } = useSimulator();

  return (
    <div className="w-full flex-row gap-32 md:flex max-md:space-y-4">
      <Card className="w-full flex-col space-y-16 p-8 shadow-lg">
        <InputValue
          subtitle="Investimento Inicial"
          onChange={handleStartingValue}
          value={startingValue}
        />
        <InputValue
          subtitle="Investimento Mensal"
          onChange={handleMonthlyValue}
          value={monthlyValue}
          steps={10}
          maxValue={10000}
        />
        <InputValue
          subtitle="Tempo de Investimento"
          onChange={handleMonths}
          value={months}
          steps={1}
          maxValue={72}
          type="number"
        />
        <InputValue
          subtitle="Taxa de Juros"
          onChange={handleInterestRate}
          value={interestRate}
          steps={0.1}
          maxValue={10}
          type="percentage"
        />
      </Card>
      <Card className="w-full shadow-lg">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-normal">
            Retorno em {months} meses
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="text-2xl font-bold">
            {totalRevenue.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={moneyOnEachMonth}
                margin={{
                  top: 5,
                  right: 10,
                  left: 10,
                  bottom: 0,
                }}
              >
                <Line
                  type="monotone"
                  dataKey="value"
                  activeDot={{
                    r: 6,
                    style: { fill: "var(--theme-primary)", opacity: 0.25 },
                  }}
                  strokeWidth={2}
                />
                <XAxis dataKey="monthName" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
