"use client";
import { createContext, useContext, useState } from "react";

const CarContext = createContext();

export const CarProvider = ({ children }) => {
  const defaultModels = [
    "Land Cruiser",
    "Patrol",
    "Challenger",
    "Range Rover",
    "Phantom",
    "Expedition",
    "Tucson",
    "Revuelto",
  ];

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [modelsList, setModelsList] = useState(defaultModels);

  const handleSelectedBrand = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand(null);
      setModelsList(defaultModels);
    } else {
      setSelectedBrand(brand);
      const selectedCardBrand = carBrandList.find((b) => b.name === brand);
      setModelsList(selectedCardBrand?.models || defaultModels); // if user deselect brand list then show the default model list.
    }
  };

  return (
    <CarContext.Provider
      value={{
        carBrandList,
        selectedBrand,
        setSelectedBrand,
        modelsList,
        setModelsList,
        handleSelectedBrand,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

export const useCarBrand = () => useContext(CarContext);

const carBrandList = [
  {
    name: "Toyota",
    models: [
      "Camry",
      "Corolla",
      "Fortuner",
      "Highlander",
      "Land Cruiser",
      "Land Cruiser Prado",
    ],
  },
  {
    name: "Nissan",
    models: ["Altima", "Kicks", "Pathfinder", "Patrol", "X - Trail"],
  },
  {
    name: "Dodge",
    models: ["Challenger", "Charger", "Durango", "Durango SRT"],
  },
  {
    name: "Land Rover",
    models: [
      "Range Rover Velar",
      "Range Rover Sport SVR",
      "Range Rover",
      "Defender 130",
      "Defender",
    ],
  },
  {
    name: "Ram",
    models: ["2500", "1200", "1500", "1500 TRX"],
  },
  {
    name: "Rolls Royce",
    models: ["Cullinan", "Ghost", "Phantom", "Spectre"],
  },
  {
    name: "Tesla",
    models: ["Cybertruck", "Model 3", "Model S", "Model X", "Model Y"],
  },
  {
    name: "Ford",
    models: [
      "Bronco",
      "Everest",
      "Bronco Raptor",
      "Explorer",
      "Expedition",
      "F-150",
    ],
  },
  {
    name: "Hyundai",
    models: ["Accent", "Elantra", "Santa Fe", "Tucson"],
  },
  {
    name: "GMC",
    models: ["Hummer EV SUV", "Sierra 1500", "Terrain", "Canyon"],
  },
  {
    name: "Lamborghini",
    models: ["Revuelto", "Huracan Spyder", "Huracan", "Urus"],
  },
  {
    name: "Ferrari",
    models: ["812 Superfast", "F8 Spider", "296 GTS", "296 GTB", "12Cilindri"],
  },
  {
    name: "Lincoln",
    models: ["Nautilus", "Corsair", "Aviator Navigator", "Navigator L"],
  },
  {
    name: "Infinite",
    models: ["Q60 Coupe", "QX55", "QX60", "QX80", "QX50"],
  },
  {
    name: "Mercedes Benz",
    models: [
      "CLA - Class",
      "CLA 35 AMG",
      "AMG GT 4-door Coupe",
      "AMG GT Roadster",
      "A-Class Sedan",
      "CLE Coupe",
    ],
  },
  {
    name: "Honda",
    models: ["City", "ZR-V", "Accord", "Civic", "CR-V", "Odyssey", "Pilot"],
  },
  {
    name: "Mitsubishi",
    models: [
      "Attrage",
      "Eclipse Cross",
      "Outlander",
      "Outlander PHEV",
      "Xpander",
    ],
  },
  {
    name: "Renault",
    models: ["Arkana", "Dokker Van", "Duster", "Master", "Koleos"],
  },
  {
    name: "BMW",
    models: [
      "1-Series",
      "2-Series",
      "3-Series",
      "4-Series",
      "5-Series",
      "7-Series",
      "8-Series",
      "i5",
      "i7",
      "i8",
      "Z4",
      "XM",
      "iX",
    ],
  },
  {
    name: "Lexus",
    models: ["NX", "LS", "LX", "IS", "GX"],
  },
  {
    name: "Chevrolet",
    models: [
      "Blazer",
      "Camaro",
      "Express",
      "Corvette",
      "Captiva",
      "Groove",
      "Silverado",
    ],
  },
  {
    name: "Porsche",
    models: [
      "911",
      "911 GT3",
      "911 Turbo",
      "Cabriolet",
      "918 Spyder",
      "Taycan",
    ],
  },
  {
    name: "Volkswagen",
    models: ["Amarok", "Golf R", "Tiguan", "Teramont", "Touareg"],
  },
  {
    name: "Volvo",
    models: ["C40", "EX30", "S60", "V40", "S90"],
  },
  {
    name: "Bugatti",
    models: ["Chiron"],
  },
  {
    name: "Bentley",
    models: ["Flying Spur", "Bentayga", "Continental GT", "Continental GTC"],
  },
  {
    name: "Audi",
    models: ["A5", "A7", "A8", "Q5", "Q7"],
  },
];
