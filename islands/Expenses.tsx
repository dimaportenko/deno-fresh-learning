import { useEffect, useState } from "preact/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card.tsx";

export function Expenses() {
  const [totalSpent, setTotalSpent] = useState<number>(0);

  const getTotalSpent = async () => {
    try {
      const response = await fetch("/api/expenses/total-amount");
      const totalAmount = await response.json();
      setTotalSpent(totalAmount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalSpent();
  }, [])

  return (
    <div class="mx-auto max-w-[350px] mt-10">
      <Card className="">
        <CardHeader>
          <CardTitle>Total Spent</CardTitle>
          <CardDescription>The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent>
          {totalSpent}
        </CardContent>
      </Card>
    </div>
  );
}
