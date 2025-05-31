import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#000000", "#FA2C37", "#00ff1e"];
// const COLORS = ["#4F46E5", "#EF4444", "#10B981"];
// const COLORS = ["#A5B4FC", "#FCA5A5", "#6EE7B7"];



const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Financial Overview</h5>
      </div>
    
      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
