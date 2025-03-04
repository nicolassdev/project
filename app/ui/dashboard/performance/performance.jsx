"use client";
import React from "react";
import styles from "./performance.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    Inactive: 4000,
    Active: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    Inactive: 3000,
    Active: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    Inactive: 2000,
    Active: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    Inactive: 2780,
    Active: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    Inactive: 1890,
    Active: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    Inactive: 2390,
    Active: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    Inactive: 3490,
    Active: 4300,
    amt: 2100,
  },
];
const Performance = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Performance</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#1e1e1e", border: "none" }} />
          <Legend />
          <Line type="monotone" dataKey="Active" stroke="#8884d8" />
          <Line type="monotone" dataKey="Inactive" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
