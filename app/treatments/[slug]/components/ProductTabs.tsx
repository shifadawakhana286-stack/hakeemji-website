"use client";

import { useState } from "react";
import { TreatmentPackage } from "@/data/treatments";

interface ProductTabsProps {
  treatment: TreatmentPackage;
}

export default function ProductTabs({
  treatment,
}: ProductTabsProps) {
  const tabs = [
    "Description",
    "Benefits",
    "Symptoms",
    "Medicines",
    "Ingredients",
    "How To Use",
  ];

  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="product-tabs-section">

      <div className="tabs-header">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">

        {activeTab === "Description" && (
          <div className="content-block">
            <p>{treatment.details}</p>
          </div>
        )}

        {activeTab === "Benefits" && (
          <ul className="content-list">
            {treatment.benefits.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "Symptoms" && (
          <ul className="content-list">
            {treatment.symptoms.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "Medicines" && (
          <ul className="content-list">
            {treatment.medicines.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "Ingredients" && (
          <ul className="content-list">
            {treatment.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {activeTab === "How To Use" && (
          <ul className="content-list">
            {treatment.howToUse.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

      </div>

    </section>
  );
}