// src/App.tsx

import React from 'react';
import ProductDisplay from './components/ProductDisplay';
import { DataProvider } from './context/DataContext';
import { ProductGroup } from './types';

// Sample data - replace with your actual data or API call
const sampleData: ProductGroup[] = [
  {
    product_group: "ABC",
    pec_table: [
      {
        "Product Experience Code": "IMPLANT DISLOCATION",
        "Previous\nRate (%)": "0.0000 %",
        "Current\nRate (%)": "0.1079 %",
        "Overall\nRate (%)": "0.0545 %"
      },
      {
        "Product Experience Code": "IMPLANT LOOSENING",
        "Previous\nRate (%)": "0.0000 %",
        "Current\nRate (%)": "0.0000 %",
        "Overall\nRate (%)": "0.0545 %"
      },
      // Add more rows as needed for demonstration
      {
        "Product Experience Code": "DEVICE FAILURE",
        "Previous\nRate (%)": "0.1200 %",
        "Current\nRate (%)": "0.0800 %",
        "Overall\nRate (%)": "0.1000 %"
      },
      {
        "Product Experience Code": "DEVICE MALFUNCTION",
        "Previous\nRate (%)": "0.2500 %",
        "Current\nRate (%)": "0.1800 %",
        "Overall\nRate (%)": "0.2150 %"
      },
      {
        "Product Experience Code": "PRODUCT QUALITY ISSUE",
        "Previous\nRate (%)": "0.0800 %",
        "Current\nRate (%)": "0.0600 %",
        "Overall\nRate (%)": "0.0700 %"
      },
      {
        "Product Experience Code": "ALLERGIC REACTION",
        "Previous\nRate (%)": "0.0300 %",
        "Current\nRate (%)": "0.0200 %",
        "Overall\nRate (%)": "0.0250 %"
      },
      {
        "Product Experience Code": "FOREIGN BODY RESPONSE",
        "Previous\nRate (%)": "0.0100 %",
        "Current\nRate (%)": "0.0150 %",
        "Overall\nRate (%)": "0.0125 %"
      },
      {
        "Product Experience Code": "MIGRATION",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      },
      {
        "Product Experience Code": "BREAKAGE",
        "Previous\nRate (%)": "0.0700 %",
        "Current\nRate (%)": "0.0500 %",
        "Overall\nRate (%)": "0.0600 %"
      },
      {
        "Product Experience Code": "EROSION",
        "Previous\nRate (%)": "0.0200 %",
        "Current\nRate (%)": "0.0250 %",
        "Overall\nRate (%)": "0.0225 %"
      },
      {
        "Product Experience Code": "WEAR",
        "Previous\nRate (%)": "0.0900 %",
        "Current\nRate (%)": "0.0750 %",
        "Overall\nRate (%)": "0.0825 %"
      },
      {
        "Product Experience Code": "CORROSION",
        "Previous\nRate (%)": "0.0050 %",
        "Current\nRate (%)": "0.0075 %",
        "Overall\nRate (%)": "0.0063 %"
      },
      {
        "Product Experience Code": "FRACTURE",
        "Previous\nRate (%)": "0.0600 %",
        "Current\nRate (%)": "0.0450 %",
        "Overall\nRate (%)": "0.0525 %"
      },
      {
        "Product Experience Code": "MATERIAL DEFORMATION",
        "Previous\nRate (%)": "0.0350 %",
        "Current\nRate (%)": "0.0300 %",
        "Overall\nRate (%)": "0.0325 %"
      },
      {
        "Product Experience Code": "MATERIAL DEGRADATION",
        "Previous\nRate (%)": "0.0250 %",
        "Current\nRate (%)": "0.0200 %",
        "Overall\nRate (%)": "0.0225 %"
      }
    ],
    harm_table: [
      {
        "Harm": "Infection",
        "Previous\nRate (%)": "0.0000 %",
        "Current\nRate (%)": "0.1079 %",
        "Overall\nRate (%)": "0.0545 %"
      },
      {
        "Harm": "Pain",
        "Previous\nRate (%)": "0.0000 %",
        "Current\nRate (%)": "0.0000 %",
        "Overall\nRate (%)": "0.0545 %"
      },
      // Add more rows as needed for demonstration
      {
        "Harm": "Inflammation",
        "Previous\nRate (%)": "0.0800 %",
        "Current\nRate (%)": "0.0700 %",
        "Overall\nRate (%)": "0.0750 %"
      },
      {
        "Harm": "Bleeding",
        "Previous\nRate (%)": "0.0500 %",
        "Current\nRate (%)": "0.0450 %",
        "Overall\nRate (%)": "0.0475 %"
      },
      {
        "Harm": "Nerve Damage",
        "Previous\nRate (%)": "0.0300 %",
        "Current\nRate (%)": "0.0250 %",
        "Overall\nRate (%)": "0.0275 %"
      },
      {
        "Harm": "Tissue Damage",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      },
      {
        "Harm": "Reoperation",
        "Previous\nRate (%)": "0.0600 %",
        "Current\nRate (%)": "0.0500 %",
        "Overall\nRate (%)": "0.0550 %"
      },
      {
        "Harm": "Extended Hospital Stay",
        "Previous\nRate (%)": "0.0700 %",
        "Current\nRate (%)": "0.0600 %",
        "Overall\nRate (%)": "0.0650 %"
      },
      {
        "Harm": "Disability",
        "Previous\nRate (%)": "0.0200 %",
        "Current\nRate (%)": "0.0150 %",
        "Overall\nRate (%)": "0.0175 %"
      },
      {
        "Harm": "Delayed Recovery",
        "Previous\nRate (%)": "0.0500 %",
        "Current\nRate (%)": "0.0450 %",
        "Overall\nRate (%)": "0.0475 %"
      },
      {
        "Harm": "Limited Mobility",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      },
      {
        "Harm": "Discomfort",
        "Previous\nRate (%)": "0.0900 %",
        "Current\nRate (%)": "0.0800 %",
        "Overall\nRate (%)": "0.0850 %"
      },
      {
        "Harm": "Swelling",
        "Previous\nRate (%)": "0.0700 %",
        "Current\nRate (%)": "0.0650 %",
        "Overall\nRate (%)": "0.0675 %"
      },
      {
        "Harm": "Bruising",
        "Previous\nRate (%)": "0.0600 %",
        "Current\nRate (%)": "0.0550 %",
        "Overall\nRate (%)": "0.0575 %"
      },
      {
        "Harm": "Allergic Reaction",
        "Previous\nRate (%)": "0.0100 %",
        "Current\nRate (%)": "0.0080 %",
        "Overall\nRate (%)": "0.0090 %"
      }
    ]
  },
  {
    product_group: "DEF",
    pec_table: [
      {
        "Product Experience Code": "DEVICE FAILURE",
        "Previous\nRate (%)": "0.0800 %",
        "Current\nRate (%)": "0.0600 %",
        "Overall\nRate (%)": "0.0700 %"
      },
      {
        "Product Experience Code": "DEVICE MALFUNCTION",
        "Previous\nRate (%)": "0.1200 %",
        "Current\nRate (%)": "0.0900 %",
        "Overall\nRate (%)": "0.1050 %"
      },
      // Add more rows
      {
        "Product Experience Code": "CONNECTION ISSUE",
        "Previous\nRate (%)": "0.0500 %",
        "Current\nRate (%)": "0.0400 %",
        "Overall\nRate (%)": "0.0450 %"
      },
      {
        "Product Experience Code": "POWER FAILURE",
        "Previous\nRate (%)": "0.0300 %",
        "Current\nRate (%)": "0.0250 %",
        "Overall\nRate (%)": "0.0275 %"
      },
      {
        "Product Experience Code": "CALIBRATION ERROR",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      },
      {
        "Product Experience Code": "SOFTWARE BUG",
        "Previous\nRate (%)": "0.0600 %",
        "Current\nRate (%)": "0.0500 %",
        "Overall\nRate (%)": "0.0550 %"
      },
      {
        "Product Experience Code": "INTERFACE PROBLEM",
        "Previous\nRate (%)": "0.0350 %",
        "Current\nRate (%)": "0.0300 %",
        "Overall\nRate (%)": "0.0325 %"
      },
      {
        "Product Experience Code": "SYNC ISSUES",
        "Previous\nRate (%)": "0.0450 %",
        "Current\nRate (%)": "0.0400 %",
        "Overall\nRate (%)": "0.0425 %"
      },
      {
        "Product Experience Code": "DISPLAY ERROR",
        "Previous\nRate (%)": "0.0250 %",
        "Current\nRate (%)": "0.0200 %",
        "Overall\nRate (%)": "0.0225 %"
      },
      {
        "Product Experience Code": "SENSOR FAILURE",
        "Previous\nRate (%)": "0.0550 %",
        "Current\nRate (%)": "0.0500 %",
        "Overall\nRate (%)": "0.0525 %"
      },
      {
        "Product Experience Code": "DATA LOSS",
        "Previous\nRate (%)": "0.0150 %",
        "Current\nRate (%)": "0.0120 %",
        "Overall\nRate (%)": "0.0135 %"
      },
      {
        "Product Experience Code": "CONNECTIVITY LOSS",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      }
    ],
    harm_table: [
      {
        "Harm": "Incorrect Diagnosis",
        "Previous\nRate (%)": "0.0500 %",
        "Current\nRate (%)": "0.0400 %",
        "Overall\nRate (%)": "0.0450 %"
      },
      {
        "Harm": "Delayed Treatment",
        "Previous\nRate (%)": "0.0700 %",
        "Current\nRate (%)": "0.0600 %",
        "Overall\nRate (%)": "0.0650 %"
      },
      {
        "Harm": "Incorrect Medication",
        "Previous\nRate (%)": "0.0300 %",
        "Current\nRate (%)": "0.0250 %",
        "Overall\nRate (%)": "0.0275 %"
      },
      {
        "Harm": "False Alarm",
        "Previous\nRate (%)": "0.0800 %",
        "Current\nRate (%)": "0.0700 %",
        "Overall\nRate (%)": "0.0750 %"
      },
      {
        "Harm": "Missed Alert",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      },
      {
        "Harm": "Incorrect Reading",
        "Previous\nRate (%)": "0.0600 %",
        "Current\nRate (%)": "0.0550 %",
        "Overall\nRate (%)": "0.0575 %"
      },
      {
        "Harm": "Loss of Monitoring",
        "Previous\nRate (%)": "0.0350 %",
        "Current\nRate (%)": "0.0300 %",
        "Overall\nRate (%)": "0.0325 %"
      },
      {
        "Harm": "Treatment Interruption",
        "Previous\nRate (%)": "0.0450 %",
        "Current\nRate (%)": "0.0400 %",
        "Overall\nRate (%)": "0.0425 %"
      },
      {
        "Harm": "Incorrect Data Recording",
        "Previous\nRate (%)": "0.0250 %",
        "Current\nRate (%)": "0.0200 %",
        "Overall\nRate (%)": "0.0225 %"
      }, 
      {
        "Harm": "Patient Distress",
        "Previous\nRate (%)": "0.0300 %",
        "Current\nRate (%)": "0.0250 %",
        "Overall\nRate (%)": "0.0275 %"
      },
      {
        "Harm": "Clinician Workflow Disruption",
        "Previous\nRate (%)": "0.0550 %",
        "Current\nRate (%)": "0.0500 %",
        "Overall\nRate (%)": "0.0525 %"
      },
      {
        "Harm": "Extended Procedure Time",
        "Previous\nRate (%)": "0.0400 %",
        "Current\nRate (%)": "0.0350 %",
        "Overall\nRate (%)": "0.0375 %"
      }
    ]
  }
];

const App: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Product Group Data</h1>
      <DataProvider initialData={sampleData}>
        <ProductDisplay data={sampleData} />
      </DataProvider>
    </div>
  );
};

export default App;