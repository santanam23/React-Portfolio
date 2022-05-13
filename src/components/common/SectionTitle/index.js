import React from "react";

export default function SectionTitle({ title,description }) {
  return (
    <div style={{marginTop:"5px", marginBottom:'10px'}}>
      <h2>{title} </h2>
      <p> {description}</p>
    </div>
  );
}
