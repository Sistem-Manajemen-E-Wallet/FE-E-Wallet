import React from "react";

const Dashboard: React.FC<{ color?: string }> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
    >
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </svg>
  );
};

export default Dashboard;
