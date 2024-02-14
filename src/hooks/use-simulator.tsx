import { useState } from "react";

export const useSimulator = () => {
  const [startingValue, setStartingValue] = useState<number>(0);
  const [monthlyValue, setMonthlyValue] = useState<number>(0);
  const [months, setMonths] = useState<number>(0);
  const [interestRate, setInterestRate] = useState<number>(0);

  const handleStartingValue = (value: number) => {
    setStartingValue(value);
  };

  const handleMonthlyValue = (value: number) => {
    setMonthlyValue(value);
  };

  const handleMonths = (value: number) => {
    setMonths(value);
  };

  const handleInterestRate = (value: number) => {
    setInterestRate(value);
  };
  // Função para calcular o total de receita com juros compostos
  const calculateTotalRevenue = () => {
    const monthlyInterestRate = interestRate / 100;

    let total = startingValue;

    for (let i = 0; i < months; i++) {
      total += monthlyValue;
      total *= 1 + monthlyInterestRate;
    }
    return total;
  };

  // Função para calcular o dinheiro em cada mês com juros compostos
  const calculateMoneyOnEachMonth = () => {
    const monthlyInterestRate = interestRate / 100;
    let moneyArray: number[] = [];
    let total = startingValue;

    for (let i = 0; i < months; i++) {
      total += monthlyValue;
      total *= 1 + monthlyInterestRate; // Aplica juros compostos
      moneyArray.push(total);
    }

    return moneyArray.map((value, index) => ({
      monthName: `Mês ${index + 1}`,
      value,
    }));
  };

  const totalRevenue = calculateTotalRevenue();
  const moneyOnEachMonth = calculateMoneyOnEachMonth();

  return {
    startingValue,
    handleStartingValue,
    monthlyValue,
    handleMonthlyValue,
    months,
    handleMonths,
    totalRevenue,
    moneyOnEachMonth,
    interestRate,
    handleInterestRate,
  };
};
