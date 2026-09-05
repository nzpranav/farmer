import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

/* =========================================================
   MAIN APP
========================================================= */

function App() {

  /* =======================================================
     LOGIN
  ======================================================= */

  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileLogin, setMobileLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  /* =======================================================
     FARMER PROFILE
  ======================================================= */

  const [farmerName, setFarmerName] = useState("Pranav Farmer");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [farmerId, setFarmerId] = useState("KF-2026-001");
  const [mobileNumber, setMobileNumber] = useState("9876543210");
  const [age, setAge] = useState("35");
  const [gender, setGender] = useState("Male");

  const [village, setVillage] = useState("Nagpur");
  const [taluka, setTaluka] = useState("Nagpur");
  const [district, setDistrict] = useState("Nagpur");
  const [state, setState] = useState("Maharashtra");

  /* =======================================================
     FARM DETAILS
  ======================================================= */

  const [totalLand, setTotalLand] = useState("10");
  const [landUnit, setLandUnit] = useState("Acres");
  const [soilType, setSoilType] = useState("Black Soil");
  const [irrigationType, setIrrigationType] =
    useState("Drip Irrigation");

  const [waterSource, setWaterSource] =
    useState("Borewell");

  /* =======================================================
     LOCATION
  ======================================================= */

  const [location, setLocation] = useState(null);
  const [locationLoading, setLocationLoading] =
    useState(false);

  /* =======================================================
     CROP FORM
  ======================================================= */

  const [showCropForm, setShowCropForm] =
    useState(false);

  const [cropName, setCropName] = useState("");
  const [area, setArea] = useState("");
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");

  /* =======================================================
     EXPENSE FORM
  ======================================================= */

  const [showExpenseForm, setShowExpenseForm] =
    useState(false);

  const [expenseCrop, setExpenseCrop] = useState("");
  const [expenseCategory, setExpenseCategory] =
    useState("");

  const [expenseAmount, setExpenseAmount] =
    useState("");

  const [expenseDescription, setExpenseDescription] =
    useState("");

  /* =======================================================
     INCOME FORM
  ======================================================= */

  const [showIncomeForm, setShowIncomeForm] =
    useState(false);

  const [incomeCrop, setIncomeCrop] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Quintal");

  const [sellingPrice, setSellingPrice] =
    useState("");

  const [incomeDescription, setIncomeDescription] =
    useState("");

  /* =======================================================
     CROP DATA
  ======================================================= */

  const [crops, setCrops] = useState([
    {
      name: "Wheat",
      area: 3,
      expense: 15000,
      income: 28000,
      sowingDate: "2026-06-10",
      harvestDate: "2026-10-10",
      health: "Healthy",
    },
    {
      name: "Soybean",
      area: 2,
      expense: 12000,
      income: 24000,
      sowingDate: "2026-06-15",
      harvestDate: "2026-10-20",
      health: "Good",
    },
    {
      name: "Cotton",
      area: 4,
      expense: 18000,
      income: 32000,
      sowingDate: "2026-06-05",
      harvestDate: "2026-11-15",
      health: "Healthy",
    },
    {
      name: "Rice",
      area: 3,
      expense: 16000,
      income: 30000,
      sowingDate: "2026-07-01",
      harvestDate: "2026-11-01",
      health: "Good",
    },
    {
      name: "Tur",
      area: 2,
      expense: 10000,
      income: 22000,
      sowingDate: "2026-06-20",
      harvestDate: "2026-12-20",
      health: "Healthy",
    },
  ]);

  /* =======================================================
     EXPENSE HISTORY
  ======================================================= */

  const [expenses, setExpenses] = useState([
    {
      crop: "Wheat",
      category: "Seeds",
      amount: 5000,
      description: "Wheat seeds",
      date: "2026-06-10",
    },
    {
      crop: "Soybean",
      category: "Fertilizer",
      amount: 4000,
      description: "Urea fertilizer",
      date: "2026-07-05",
    },
    {
      crop: "Cotton",
      category: "Labour",
      amount: 6000,
      description: "Farm labour",
      date: "2026-07-15",
    },
  ]);

  /* =======================================================
     INCOME HISTORY
  ======================================================= */

  const [incomes, setIncomes] = useState([
    {
      crop: "Wheat",
      quantity: 10,
      unit: "Quintal",
      sellingPrice: 2800,
      amount: 28000,
      description: "Local market",
      date: "2026-08-10",
    },
    {
      crop: "Soybean",
      quantity: 10,
      unit: "Quintal",
      sellingPrice: 2400,
      amount: 24000,
      description: "APMC market",
      date: "2026-08-20",
    },
  ]);

  /* =======================================================
     SUBSIDY
  ======================================================= */

  const [subsidyReceived, setSubsidyReceived] =
    useState("25000");

  /* =======================================================
     LOAN
  ======================================================= */

  const [loanAmount, setLoanAmount] =
    useState("150000");

  const [loanProvider, setLoanProvider] =
    useState("Agricultural Bank");

  const [loanRemaining, setLoanRemaining] =
    useState("90000");

  /* =======================================================
     EQUIPMENT
  ======================================================= */

  const [tractors, setTractors] = useState("1");
  const [pumps, setPumps] = useState("2");
  const [tools, setTools] =
    useState("Plough, Sprayer, Cultivator");

  const [fertilizerStock, setFertilizerStock] =
    useState("250 kg");

  const [seedStock, setSeedStock] =
    useState("120 kg");

  /* =======================================================
     WATER USAGE
  ======================================================= */

  const [waterUsage, setWaterUsage] =
    useState("12500");

  /* =======================================================
     VOICE NOTES
  ======================================================= */

  const [voiceNotes, setVoiceNotes] =
    useState([]);

  const [recording, setRecording] =
    useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  /* =======================================================
     ACTIVITY TIMELINE
  ======================================================= */

  const [activities] = useState([
    {
      title: "Land Prepared",
      date: "05 June 2026",
      status: "Completed",
      icon: "🚜",
    },
    {
      title: "Sowing Completed",
      date: "10 June 2026",
      status: "Completed",
      icon: "🌱",
    },
    {
      title: "Fertilizer Applied",
      date: "05 July 2026",
      status: "Completed",
      icon: "🧪",
    },
    {
      title: "Harvest Completed",
      date: "Pending",
      status: "Upcoming",
      icon: "🌾",
    },
  ]);

  /* =======================================================
     DOCUMENTS
  ======================================================= */

  const [documents, setDocuments] = useState({
    aadhaar: null,
    landRecord: null,
    insurance: null,
    soilReport: null,
  });

  /* =======================================================
     WEATHER
  ======================================================= */

  const [weather, setWeather] = useState({
    temperature: "--",
    humidity: "--",
    rainfall: "--",
    alert: "Click Get Weather",
  });

  /* =======================================================
     TOTAL CALCULATIONS
  ======================================================= */

  const totalExpense = crops.reduce(
    (total, crop) =>
      total + Number(crop.expense),
    0
  );

  const totalIncome = crops.reduce(
    (total, crop) =>
      total + Number(crop.income),
    0
  );

  const totalProfit =
    totalIncome - totalExpense;

  const totalInvestment = totalExpense;

  /* =======================================================
     LOGIN
  ======================================================= */

  const handleLogin = (e) => {

    e.preventDefault();

    if (!mobileLogin || !passwordLogin) {
      alert(
        "Please enter mobile number and password."
      );
      return;
    }

    setLoggedIn(true);
  };

  /* =======================================================
     LOGOUT
  ======================================================= */

  const logout = () => {
    setLoggedIn(false);
  };

  /* =======================================================
     PROFILE PHOTO
  ======================================================= */

  const uploadProfilePhoto = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfilePhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  /* =======================================================
     GET LOCATION
  ======================================================= */

  const getLocation = () => {

    if (!navigator.geolocation) {

      alert(
        "Location is not supported by this browser."
      );

      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {

        setLocation({
          latitude:
            position.coords.latitude,

          longitude:
            position.coords.longitude,

          accuracy:
            position.coords.accuracy,
        });

        setLocationLoading(false);
      },

      () => {

        setLocationLoading(false);

        alert(
          "Please allow location access in your browser."
        );
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  /* =======================================================
     ADD CROP
  ======================================================= */

  const addCrop = (e) => {

    e.preventDefault();

    if (
      !cropName ||
      !area ||
      !expense ||
      !income
    ) {

      alert(
        "Please fill all crop fields."
      );

      return;
    }

    setCrops([
      ...crops,
      {
        name: cropName,
        area: Number(area),
        expense: Number(expense),
        income: Number(income),
        sowingDate: new Date()
          .toISOString()
          .split("T")[0],
        harvestDate: "",
        health: "Healthy",
      },
    ]);

    setCropName("");
    setArea("");
    setExpense("");
    setIncome("");

    setShowCropForm(false);
  };

  /* =======================================================
     ADD EXPENSE
  ======================================================= */

  const addExpense = (e) => {

    e.preventDefault();

    if (
      !expenseCrop ||
      !expenseCategory ||
      !expenseAmount
    ) {

      alert(
        "Please fill all expense fields."
      );

      return;
    }

    const amount =
      Number(expenseAmount);

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    setExpenses([
      ...expenses,
      {
        crop: expenseCrop,
        category: expenseCategory,
        amount: amount,
        description:
          expenseDescription,
        date: today,
      },
    ]);

    setCrops(
      crops.map((crop) =>
        crop.name === expenseCrop
          ? {
              ...crop,
              expense:
                crop.expense + amount,
            }
          : crop
      )
    );

    setExpenseCrop("");
    setExpenseCategory("");
    setExpenseAmount("");
    setExpenseDescription("");

    setShowExpenseForm(false);
  };

  /* =======================================================
     ADD INCOME
  ======================================================= */

  const addIncome = (e) => {

    e.preventDefault();

    if (
      !incomeCrop ||
      !quantity ||
      !sellingPrice
    ) {

      alert(
        "Please fill all income fields."
      );

      return;
    }

    const amount =
      Number(quantity) *
      Number(sellingPrice);

    const today =
      new Date()
        .toISOString()
        .split("T")[0];

    setIncomes([
      ...incomes,
      {
        crop: incomeCrop,
        quantity: Number(quantity),
        unit: unit,
        sellingPrice:
          Number(sellingPrice),
        amount: amount,
        description:
          incomeDescription,
        date: today,
      },
    ]);

    setCrops(
      crops.map((crop) =>
        crop.name === incomeCrop
          ? {
              ...crop,
              income:
                crop.income + amount,
            }
          : crop
      )
    );

    setIncomeCrop("");
    setQuantity("");
    setUnit("Quintal");
    setSellingPrice("");
    setIncomeDescription("");

    setShowIncomeForm(false);
  };

  /* =======================================================
     VOICE RECORDING
  ======================================================= */

  const startRecording = async () => {

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia(
          { audio: true }
        );

      const recorder =
        new MediaRecorder(stream);

      mediaRecorderRef.current =
        recorder;

      audioChunksRef.current = [];

      recorder.ondataavailable = (event) => {

        if (event.data.size > 0) {

          audioChunksRef.current.push(
            event.data
          );
        }
      };

      recorder.onstop = () => {

        const audioBlob =
          new Blob(
            audioChunksRef.current,
            {
              type: "audio/webm",
            }
          );

        const audioURL =
          URL.createObjectURL(
            audioBlob
          );

        setVoiceNotes((previous) => [
          ...previous,
          {
            id: Date.now(),
            url: audioURL,
            date:
              new Date().toLocaleString(),
          },
        ]);

        stream
          .getTracks()
          .forEach((track) =>
            track.stop()
          );
      };

      recorder.start();

      setRecording(true);

    } catch (error) {

      alert(
        "Microphone permission is required."
      );
    }
  };

  const stopRecording = () => {

    if (
      mediaRecorderRef.current &&
      recording
    ) {

      mediaRecorderRef.current.stop();

      setRecording(false);
    }
  };

  /* =======================================================
     WEATHER
  ======================================================= */

  const getWeather = async () => {

    if (!location) {

      alert(
        "First click Get My Location."
      );

      return;
    }

    try {

      const response =
        await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,rain&hourly=precipitation_probability&forecast_days=1`
        );

      const data =
        await response.json();

      const current =
        data.current;

      setWeather({
        temperature:
          `${current.temperature_2m} °C`,

        humidity:
          `${current.relative_humidity_2m}%`,

        rainfall:
          `${current.rain} mm`,

        alert:
          current.rain > 5
            ? "Rain expected. Check irrigation."
            : "No major weather alert.",
      });

    } catch (error) {

      alert(
        "Unable to load weather."
      );
    }
  };

  /* =======================================================
     DOCUMENT UPLOAD
  ======================================================= */

  const uploadDocument = (
    type,
    file
  ) => {

    if (!file) return;

    setDocuments({
      ...documents,
      [type]: file.name,
    });
  };

  /* =======================================================
     FORM OPEN
  ======================================================= */

  const openForm = (form) => {

    setShowCropForm(
      form === "crop"
    );

    setShowExpenseForm(
      form === "expense"
    );

    setShowIncomeForm(
      form === "income"
    );
  };

  /* =======================================================
     LOGIN SCREEN
  ======================================================= */

  if (!loggedIn) {

    return (

      <div style={loginPage}>

        <div style={loginCard}>

          <div style={loginLogo}>
            🌾
          </div>

          <h1 style={loginTitle}>
            Kisan Profit
          </h1>

          <p style={loginSubtitle}>
            Farmer Smart Management System
          </p>

          <form onSubmit={handleLogin}>

            <label>
              Mobile Number
            </label>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobileLogin}
              onChange={(e) =>
                setMobileLogin(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={passwordLogin}
              onChange={(e) =>
                setPasswordLogin(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                ...greenButton,
                width: "100%",
                marginTop: "20px",
              }}
            >
              🔐 Farmer Login
            </button>

          </form>

          <p
            style={{
              color: "#777",
              fontSize: "13px",
              marginTop: "20px",
            }}
          >
            Demo login: enter any mobile number
            and password.
          </p>

        </div>

      </div>
    );
  }

  /* =======================================================
     MAIN DASHBOARD
  ======================================================= */

  return (

    <div style={pageStyle}>

      {/* ==========================================
          HEADER
      =========================================== */}

      <header style={headerStyle}>

        <div>

          <h1 style={{ margin: 0 }}>
            🌾 Kisan Profit
          </h1>

          <small>
            Smart Farming • Better Profit
          </small>

        </div>

        <div style={headerRight}>

          <span>
            👨‍🌾 {farmerName}
          </span>

          <button
            onClick={logout}
            style={logoutButton}
          >
            Logout
          </button>

        </div>

      </header>

      <main style={mainStyle}>

        {/* ==========================================
            WELCOME
        =========================================== */}

        <section>

          <h2 style={welcomeStyle}>
            Welcome, {farmerName} 👋
          </h2>

          <p style={subtitleStyle}>
            Manage your farm, crops, finances,
            weather and resources from one dashboard.
          </p>

        </section>

        {/* ==========================================
            DASHBOARD WIDGETS
        =========================================== */}

        <section style={cardsGrid}>

          <DashboardCard
            icon="🌱"
            title="Active Crops"
            value={crops.length}
          />

          <DashboardCard
            icon="💧"
            title="Water Usage"
            value={`${waterUsage} L`}
          />

          <DashboardCard
            icon="💰"
            title="Profit/Loss"
            value={`₹${totalProfit.toLocaleString()}`}
            positive={totalProfit >= 0}
          />

          <DashboardCard
            icon="🌦️"
            title="Weather"
            value={weather.temperature}
          />

          <DashboardCard
            icon="📈"
            title="Yield Prediction"
            value="87%"
            positive
          />

        </section>

        {/* ==========================================
            FARMER PROFILE
        =========================================== */}

        <section style={sectionBox}>

          <div style={sectionHeader}>

            <div>

              <h2 style={sectionTitle}>
                👨‍🌾 Farmer Profile
              </h2>

              <p style={sectionSubtitle}>
                Farmer personal information
              </p>

            </div>

          </div>

          <div style={profileGrid}>

            <div style={profilePhotoBox}>

              {profilePhoto ? (

                <img
                  src={profilePhoto}
                  alt="Farmer"
                  style={profilePhotoStyle}
                />

              ) : (

                <div style={profilePlaceholder}>
                  👨‍🌾
                </div>

              )}

              <label style={uploadButton}>
                📷 Change Photo

                <input
                  type="file"
                  accept="image/*"
                  onChange={uploadProfilePhoto}
                  style={{
                    display: "none",
                  }}
                />

              </label>

            </div>

            <div style={detailsGrid}>

              <InfoBox
                title="Farmer Name"
                value={farmerName}
              />

              <InfoBox
                title="Farmer ID"
                value={farmerId}
              />

              <InfoBox
                title="Mobile Number"
                value={mobileNumber}
              />

              <InfoBox
                title="Age"
                value={age}
              />

              <InfoBox
                title="Gender"
                value={gender}
              />

              <InfoBox
                title="Address"
                value={`${village}, ${taluka}, ${district}, ${state}`}
              />

            </div>

          </div>

        </section>

        {/* ==========================================
            FARM DETAILS
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            🚜 Farm Details
          </h2>

          <div style={detailsGrid}>

            <InfoBox
              title="Total Land Area"
              value={`${totalLand} ${landUnit}`}
            />

            <InfoBox
              title="Soil Type"
              value={soilType}
            />

            <InfoBox
              title="Irrigation Type"
              value={irrigationType}
            />

            <InfoBox
              title="Water Source"
              value={waterSource}
            />

            <InfoBox
              title="GPS Location"
              value={
                location
                  ? `${location.latitude.toFixed(
                      4
                    )}, ${location.longitude.toFixed(
                      4
                    )}`
                  : "Not captured"
              }
            />

          </div>

          <div style={buttonRow}>

            <button
              onClick={getLocation}
              style={greenButton}
              disabled={locationLoading}
            >
              {locationLoading
                ? "Getting Location..."
                : "📍 Get Farm GPS Location"}
            </button>

            {location && (

              <a
                href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                target="_blank"
                rel="noreferrer"
                style={mapButton}
              >
                🗺️ Open Google Maps
              </a>

            )}

          </div>

        </section>

        {/* ==========================================
            CROP INFORMATION
        =========================================== */}

        <section style={sectionBox}>

          <div style={sectionHeader}>

            <div>

              <h2 style={sectionTitle}>
                🌱 Crop Information
              </h2>

              <p style={sectionSubtitle}>
                Current crops and crop health
              </p>

            </div>

            <button
              onClick={() =>
                openForm("crop")
              }
              style={greenButton}
            >
              + Add Crop
            </button>

          </div>

          <div style={cropCardsGrid}>

            {crops.map(
              (crop, index) => (

                <div
                  key={index}
                  style={cropCard}
                >

                  <div style={cropIcon}>
                    🌱
                  </div>

                  <h3>
                    {crop.name}
                  </h3>

                  <p>
                    Area: {crop.area} acres
                  </p>

                  <p>
                    Sowing:{" "}
                    {crop.sowingDate ||
                      "Not added"}
                  </p>

                  <p>
                    Harvest:{" "}
                    {crop.harvestDate ||
                      "Not added"}
                  </p>

                  <span
                    style={{
                      ...healthBadge,
                      backgroundColor:
                        crop.health ===
                        "Healthy"
                          ? "#dff3e4"
                          : "#fff3cd",
                      color:
                        crop.health ===
                        "Healthy"
                          ? "#176b36"
                          : "#856404",
                    }}
                  >
                    ● {crop.health}
                  </span>

                </div>

              )
            )}

          </div>

        </section>

        {/* ==========================================
            ACTION BUTTONS
        =========================================== */}

        <section style={buttonSection}>

          <button
            onClick={() =>
              openForm("crop")
            }
            style={greenButton}
          >
            + Add Crop
          </button>

          <button
            onClick={() =>
              openForm("expense")
            }
            style={outlineButton}
          >
            + Add Expense
          </button>

          <button
            onClick={() =>
              openForm("income")
            }
            style={outlineButton}
          >
            + Add Income
          </button>

        </section>

        {/* ==========================================
            ADD CROP FORM
        =========================================== */}

        {showCropForm && (

          <section style={formBox}>

            <h2>
              🌱 Add New Crop
            </h2>

            <form onSubmit={addCrop}>

              <div style={formGrid}>

                <FormInput
                  label="Crop Name"
                  placeholder="e.g. Cotton"
                  value={cropName}
                  onChange={setCropName}
                />

                <FormInput
                  label="Area (Acres)"
                  placeholder="e.g. 5"
                  type="number"
                  value={area}
                  onChange={setArea}
                />

                <FormInput
                  label="Total Expense (₹)"
                  placeholder="e.g. 20000"
                  type="number"
                  value={expense}
                  onChange={setExpense}
                />

                <FormInput
                  label="Total Income (₹)"
                  placeholder="e.g. 35000"
                  type="number"
                  value={income}
                  onChange={setIncome}
                />

              </div>

              <div style={buttonRow}>

                <button
                  type="submit"
                  style={greenButton}
                >
                  Save Crop
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowCropForm(false)
                  }
                  style={cancelButton}
                >
                  Cancel
                </button>

              </div>

            </form>

          </section>

        )}

        {/* ==========================================
            ADD EXPENSE FORM
        =========================================== */}

        {showExpenseForm && (

          <section style={formBox}>

            <h2>
              💸 Add Farming Expense
            </h2>

            <form onSubmit={addExpense}>

              <div style={formGrid}>

                <SelectInput
                  label="Select Crop"
                  value={expenseCrop}
                  onChange={setExpenseCrop}
                  options={crops.map(
                    (crop) => crop.name
                  )}
                />

                <SelectInput
                  label="Expense Category"
                  value={expenseCategory}
                  onChange={
                    setExpenseCategory
                  }
                  options={[
                    "Seeds",
                    "Fertilizer",
                    "Pesticides",
                    "Labour",
                    "Irrigation",
                    "Machinery",
                    "Transport",
                    "Other",
                  ]}
                />

                <FormInput
                  label="Amount (₹)"
                  placeholder="e.g. 5000"
                  type="number"
                  value={expenseAmount}
                  onChange={
                    setExpenseAmount
                  }
                />

                <FormInput
                  label="Description"
                  placeholder="e.g. Urea fertilizer"
                  value={
                    expenseDescription
                  }
                  onChange={
                    setExpenseDescription
                  }
                />

              </div>

              <div style={buttonRow}>

                <button
                  type="submit"
                  style={greenButton}
                >
                  Save Expense
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowExpenseForm(false)
                  }
                  style={cancelButton}
                >
                  Cancel
                </button>

              </div>

            </form>

          </section>

        )}

        {/* ==========================================
            ADD INCOME FORM
        =========================================== */}

        {showIncomeForm && (

          <section style={formBox}>

            <h2>
              💰 Add Crop Income
            </h2>

            <form onSubmit={addIncome}>

              <div style={formGrid}>

                <SelectInput
                  label="Select Crop"
                  value={incomeCrop}
                  onChange={setIncomeCrop}
                  options={crops.map(
                    (crop) => crop.name
                  )}
                />

                <FormInput
                  label="Quantity Produced"
                  placeholder="e.g. 20"
                  type="number"
                  value={quantity}
                  onChange={setQuantity}
                />

                <SelectInput
                  label="Unit"
                  value={unit}
                  onChange={setUnit}
                  options={[
                    "Kg",
                    "Quintal",
                    "Ton",
                  ]}
                />

                <FormInput
                  label="Selling Price / Unit (₹)"
                  placeholder="e.g. 2500"
                  type="number"
                  value={sellingPrice}
                  onChange={
                    setSellingPrice
                  }
                />

                <FormInput
                  label="Description"
                  placeholder="e.g. Sold at market"
                  value={
                    incomeDescription
                  }
                  onChange={
                    setIncomeDescription
                  }
                />

              </div>

              {quantity &&
                sellingPrice && (

                  <div
                    style={
                      calculationBox
                    }
                  >

                    <strong>
                      Calculated Income:
                    </strong>

                    <span
                      style={
                        calculationValue
                      }
                    >
                      ₹
                      {(
                        Number(quantity) *
                        Number(
                          sellingPrice
                        )
                      ).toLocaleString()}
                    </span>

                  </div>

                )}

              <div style={buttonRow}>

                <button
                  type="submit"
                  style={greenButton}
                >
                  Save Income
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setShowIncomeForm(false)
                  }
                  style={cancelButton}
                >
                  Cancel
                </button>

              </div>

            </form>

          </section>

        )}

        {/* ==========================================
            FINANCIAL DASHBOARD
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            💰 Financial Dashboard
          </h2>

          <div style={financialGrid}>

            <FinancialCard
              title="Total Investment"
              value={`₹${totalInvestment.toLocaleString()}`}
              icon="💸"
            />

            <FinancialCard
              title="Total Income"
              value={`₹${totalIncome.toLocaleString()}`}
              icon="💰"
            />

            <FinancialCard
              title="Profit / Loss"
              value={`₹${totalProfit.toLocaleString()}`}
              icon="📈"
              positive={
                totalProfit >= 0
              }
            />

            <FinancialCard
              title="Government Subsidies"
              value={`₹${Number(
                subsidyReceived
              ).toLocaleString()}`}
              icon="🏛️"
            />

          </div>

          <div style={detailsGrid}>

            <InfoBox
              title="Loan Provider"
              value={loanProvider}
            />

            <InfoBox
              title="Total Loan"
              value={`₹${Number(
                loanAmount
              ).toLocaleString()}`}
            />

            <InfoBox
              title="Remaining Loan"
              value={`₹${Number(
                loanRemaining
              ).toLocaleString()}`}
            />

          </div>

        </section>

        {/* ==========================================
            MONTHLY YEARLY RECORDS
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            📅 Monthly & Yearly Financial Records
          </h2>

          <p style={sectionSubtitle}>
            Track income and expenses over time.
          </p>

          <FinancialRecords
            incomes={incomes}
            expenses={expenses}
          />

        </section>

        {/* ==========================================
            PERCENTAGE PROFIT CHART
        =========================================== */}

        <section style={tableBox}>

          <h2
            style={{
              color: "#174d2a",
            }}
          >
            📊 Crop Profit Performance
          </h2>

          <p style={{ color: "#666" }}>
            Highest-performing crop is shown as
            100%.
          </p>

          <div style={profitChart}>

            <div style={yAxisLabels}>

              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
              <span>0%</span>

            </div>

            <div style={chartArea}>

              <div
                style={{
                  ...chartGridLine,
                  top: "0%",
                }}
              />

              <div
                style={{
                  ...chartGridLine,
                  top: "20%",
                }}
              />

              <div
                style={{
                  ...chartGridLine,
                  top: "40%",
                }}
              />

              <div
                style={{
                  ...chartGridLine,
                  top: "60%",
                }}
              />

              <div
                style={{
                  ...chartGridLine,
                  top: "80%",
                }}
              />

              <div style={barsContainer}>

                {crops.map(
                  (crop, index) => {

                    const profit =
                      crop.income -
                      crop.expense;

                    const maxProfit =
                      Math.max(
                        ...crops.map(
                          (c) =>
                            c.income -
                            c.expense
                        ),
                        1
                      );

                    const percentage =
                      Math.max(
                        0,
                        Math.round(
                          (profit /
                            maxProfit) *
                            100
                        )
                      );

                    return (

                      <div
                        key={index}
                        style={barColumn}
                      >

                        <div
                          style={
                            percentageLabel
                          }
                        >
                          {percentage}%
                        </div>

                        <div
                          style={{
                            ...profitBar,
                            height:
                              `${Math.max(
                                percentage *
                                  2.8,
                                20
                              )}px`,
                            backgroundColor:
                              chartBarColors[
                                index %
                                  chartBarColors.length
                              ],
                          }}
                        >

                          <span
                            style={barNumber}
                          >
                            {String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )}
                          </span>

                        </div>

                        <div
                          style={
                            cropLabel
                          }
                        >
                          {crop.name}
                        </div>

                        <div
                          style={
                            profitLabel
                          }
                        >
                          ₹
                          {profit.toLocaleString()}
                        </div>

                      </div>

                    );
                  }
                )}

              </div>

            </div>

          </div>

        </section>

        {/* ==========================================
            EXPENSE HISTORY
        =========================================== */}

        <section style={tableBox}>

          <h2>
            💸 Expense History
          </h2>

          {expenses.length === 0 ? (

            <p>
              No expenses recorded yet.
            </p>

          ) : (

            <table style={tableStyle}>

              <thead>

                <tr style={tableHeader}>

                  <th style={cellStyle}>
                    Date
                  </th>

                  <th style={cellStyle}>
                    Crop
                  </th>

                  <th style={cellStyle}>
                    Category
                  </th>

                  <th style={cellStyle}>
                    Amount
                  </th>

                  <th style={cellStyle}>
                    Description
                  </th>

                </tr>

              </thead>

              <tbody>

                {expenses.map(
                  (item, index) => (

                    <tr key={index}>

                      <td style={cellStyle}>
                        {item.date}
                      </td>

                      <td style={cellStyle}>
                        {item.crop}
                      </td>

                      <td style={cellStyle}>
                        {item.category}
                      </td>

                      <td
                        style={{
                          ...cellStyle,
                          color: "#d32f2f",
                          fontWeight: "bold",
                        }}
                      >
                        ₹
                        {item.amount.toLocaleString()}
                      </td>

                      <td style={cellStyle}>
                        {item.description ||
                          "-"}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          )}

        </section>

        {/* ==========================================
            INCOME HISTORY
        =========================================== */}

        <section style={tableBox}>

          <h2>
            💰 Income History
          </h2>

          {incomes.length === 0 ? (

            <p>
              No income recorded yet.
            </p>

          ) : (

            <table style={tableStyle}>

              <thead>

                <tr style={tableHeader}>

                  <th style={cellStyle}>
                    Date
                  </th>

                  <th style={cellStyle}>
                    Crop
                  </th>

                  <th style={cellStyle}>
                    Quantity
                  </th>

                  <th style={cellStyle}>
                    Selling Price
                  </th>

                  <th style={cellStyle}>
                    Total Income
                  </th>

                </tr>

              </thead>

              <tbody>

                {incomes.map(
                  (item, index) => (

                    <tr key={index}>

                      <td style={cellStyle}>
                        {item.date}
                      </td>

                      <td style={cellStyle}>
                        {item.crop}
                      </td>

                      <td style={cellStyle}>
                        {item.quantity}{" "}
                        {item.unit}
                      </td>

                      <td style={cellStyle}>
                        ₹
                        {item.sellingPrice.toLocaleString()}
                      </td>

                      <td
                        style={{
                          ...cellStyle,
                          color: "#176b36",
                          fontWeight: "bold",
                        }}
                      >
                        ₹
                        {item.amount.toLocaleString()}
                      </td>

                    </tr>

                  )
                )}

              </tbody>

            </table>

          )}

        </section>

        {/* ==========================================
            WEATHER
        =========================================== */}

        <section style={sectionBox}>

          <div style={sectionHeader}>

            <div>

              <h2 style={sectionTitle}>
                🌦️ Weather Section
              </h2>

              <p style={sectionSubtitle}>
                Weather information for your farm.
              </p>

            </div>

            <button
              onClick={getWeather}
              style={greenButton}
            >
              🌦 Get Weather
            </button>

          </div>

          <div style={weatherGrid}>

            <WeatherCard
              icon="🌡️"
              title="Temperature"
              value={
                weather.temperature
              }
            />

            <WeatherCard
              icon="💧"
              title="Humidity"
              value={
                weather.humidity
              }
            />

            <WeatherCard
              icon="🌧️"
              title="Rainfall"
              value={
                weather.rainfall
              }
            />

            <WeatherCard
              icon="⚠️"
              title="Weather Alert"
              value={
                weather.alert
              }
            />

          </div>

        </section>

        {/* ==========================================
            EQUIPMENT
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            🚜 Equipment & Resources
          </h2>

          <div style={resourceGrid}>

            <ResourceCard
              icon="🚜"
              title="Tractors"
              value={tractors}
            />

            <ResourceCard
              icon="💧"
              title="Pumps"
              value={pumps}
            />

            <ResourceCard
              icon="🛠️"
              title="Tools"
              value={tools}
            />

            <ResourceCard
              icon="🧪"
              title="Fertilizer Stock"
              value={fertilizerStock}
            />

            <ResourceCard
              icon="🌱"
              title="Seed Stock"
              value={seedStock}
            />

          </div>

        </section>

        {/* ==========================================
            AI RECOMMENDATIONS
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            🤖 AI Recommendations
          </h2>

          <p style={sectionSubtitle}>
            Smart suggestions based on your farm
            information.
          </p>

          <div style={recommendationGrid}>

            <Recommendation
              icon="🌱"
              title="Best Crop Suggestions"
              text="Soybean, cotton and tur can be considered based on your soil and current crop pattern."
            />

            <Recommendation
              icon="🧪"
              title="Fertilizer Recommendation"
              text="Consider soil testing before the next fertilizer application. Avoid unnecessary fertilizer use."
            />

            <Recommendation
              icon="🦠"
              title="Disease Detection Alert"
              text="Monitor leaves for yellowing, spots and wilting. Upload crop images later for AI disease detection."
            />

            <Recommendation
              icon="💧"
              title="Irrigation Advice"
              text="Use drip irrigation where possible and adjust watering according to rainfall and soil moisture."
            />

          </div>

        </section>

        {/* ==========================================
            ACTIVITY TIMELINE
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            🕒 Activity Timeline
          </h2>

          <div style={timeline}>

            {activities.map(
              (activity, index) => (

                <div
                  key={index}
                  style={timelineItem}
                >

                  <div style={timelineIcon}>
                    {activity.icon}
                  </div>

                  <div>

                    <h3
                      style={{
                        margin: 0,
                      }}
                    >
                      {activity.title}
                    </h3>

                    <p
                      style={{
                        margin:
                          "5px 0",
                        color: "#777",
                      }}
                    >
                      {activity.date}
                    </p>

                    <span
                      style={{
                        ...healthBadge,
                        backgroundColor:
                          activity.status ===
                          "Completed"
                            ? "#dff3e4"
                            : "#fff3cd",
                        color:
                          activity.status ===
                          "Completed"
                            ? "#176b36"
                            : "#856404",
                      }}
                    >
                      {activity.status}
                    </span>

                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* ==========================================
            DOCUMENTS
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            📄 Farmer Documents
          </h2>

          <p style={sectionSubtitle}>
            Upload documents for future digital
            record management.
          </p>

          <div style={documentGrid}>

            <DocumentUpload
              title="Aadhaar Card"
              value={
                documents.aadhaar
              }
              onChange={(file) =>
                uploadDocument(
                  "aadhaar",
                  file
                )
              }
            />

            <DocumentUpload
              title="Land Records (7/12)"
              value={
                documents.landRecord
              }
              onChange={(file) =>
                uploadDocument(
                  "landRecord",
                  file
                )
              }
            />

            <DocumentUpload
              title="Crop Insurance"
              value={
                documents.insurance
              }
              onChange={(file) =>
                uploadDocument(
                  "insurance",
                  file
                )
              }
            />

            <DocumentUpload
              title="Soil Test Report"
              value={
                documents.soilReport
              }
              onChange={(file) =>
                uploadDocument(
                  "soilReport",
                  file
                )
              }
            />

          </div>

        </section>

        {/* ==========================================
            VOICE NOTES
        =========================================== */}

        <section style={sectionBox}>

          <h2 style={sectionTitle}>
            🎙️ Farmer Voice Notes
          </h2>

          <p style={sectionSubtitle}>
            Record a voice note about your farm,
            crop or daily activity.
          </p>

          <div style={voiceBox}>

            {!recording ? (

              <button
                onClick={startRecording}
                style={voiceButton}
              >
                🎙️ Start Recording
              </button>

            ) : (

              <button
                onClick={stopRecording}
                style={stopButton}
              >
                ⏹️ Stop Recording
              </button>

            )}

            {recording && (

              <p style={recordingText}>
                🔴 Recording in progress...
              </p>

            )}

          </div>

          {voiceNotes.length > 0 && (

            <div style={voiceList}>

              <h3>
                Saved Voice Notes
              </h3>

              {voiceNotes.map(
                (note) => (

                  <div
                    key={note.id}
                    style={voiceNote}
                  >

                    <div>

                      <strong>
                        🎙️ Farm Voice Note
                      </strong>

                      <p
                        style={{
                          margin:
                            "5px 0",
                          color: "#777",
                        }}
                      >
                        {note.date}
                      </p>

                    </div>

                    <audio
                      controls
                      src={note.url}
                    />

                  </div>

                )
              )}

            </div>

          )}

        </section>

        {/* ==========================================
            PROFIT ANALYSIS
        =========================================== */}

        <section style={tableBox}>

          <h2
            style={{
              color: "#174d2a",
            }}
          >
            📈 Crop Profit Analysis
          </h2>

          <table style={tableStyle}>

            <thead>

              <tr style={tableHeader}>

                <th style={cellStyle}>
                  Crop
                </th>

                <th style={cellStyle}>
                  Area
                </th>

                <th style={cellStyle}>
                  Expense
                </th>

                <th style={cellStyle}>
                  Income
                </th>

                <th style={cellStyle}>
                  Profit/Loss
                </th>

              </tr>

            </thead>

            <tbody>

              {crops.map(
                (crop, index) => {

                  const profit =
                    crop.income -
                    crop.expense;

                  return (

                    <tr key={index}>

                      <td style={cellStyle}>
                        {crop.name}
                      </td>

                      <td style={cellStyle}>
                        {crop.area} acres
                      </td>

                      <td
                        style={{
                          ...cellStyle,
                          color: "#d32f2f",
                        }}
                      >
                        ₹
                        {crop.expense.toLocaleString()}
                      </td>

                      <td
                        style={{
                          ...cellStyle,
                          color: "#176b36",
                        }}
                      >
                        ₹
                        {crop.income.toLocaleString()}
                      </td>

                      <td
                        style={{
                          ...cellStyle,
                          color:
                            profit >= 0
                              ? "#176b36"
                              : "#d32f2f",
                          fontWeight:
                            "bold",
                        }}
                      >
                        {profit >= 0
                          ? "+"
                          : "-"}
                        ₹
                        {Math.abs(
                          profit
                        ).toLocaleString()}

                      </td>

                    </tr>

                  );
                }
              )}

            </tbody>

          </table>

        </section>

      </main>

    </div>
  );
}

/* =========================================================
   DASHBOARD CARD
========================================================= */

function DashboardCard({
  icon,
  title,
  value,
  positive,
}) {

  return (

    <div
      style={{
        ...cardStyle,
        borderTop:
          positive === true
            ? "4px solid #176b36"
            : "4px solid #ddd",
      }}
    >

      <div style={iconStyle}>
        {icon}
      </div>

      <p>
        {title}
      </p>

      <h2
        style={{
          color:
            positive === false
              ? "#d32f2f"
              : "#174d2a",
        }}
      >
        {value}
      </h2>

    </div>
  );
}

/* =========================================================
   INFO BOX
========================================================= */

function InfoBox({
  title,
  value,
}) {

  return (

    <div style={infoBox}>

      <small>
        {title}
      </small>

      <strong>
        {value}
      </strong>

    </div>
  );
}

/* =========================================================
   FINANCIAL CARD
========================================================= */

function FinancialCard({
  title,
  value,
  icon,
  positive = true,
}) {

  return (

    <div style={financialCard}>

      <div style={financialIcon}>
        {icon}
      </div>

      <div>

        <p>
          {title}
        </p>

        <h2
          style={{
            color: positive
              ? "#176b36"
              : "#d32f2f",
          }}
        >
          {value}
        </h2>

      </div>

    </div>
  );
}

/* =========================================================
   WEATHER CARD
========================================================= */

function WeatherCard({
  icon,
  title,
  value,
}) {

  return (

    <div style={weatherCard}>

      <div style={weatherIcon}>
        {icon}
      </div>

      <div>

        <small>
          {title}
        </small>

        <strong>
          {value}
        </strong>

      </div>

    </div>
  );
}

/* =========================================================
   RESOURCE CARD
========================================================= */

function ResourceCard({
  icon,
  title,
  value,
}) {

  return (

    <div style={resourceCard}>

      <div style={resourceIcon}>
        {icon}
      </div>

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {value}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   RECOMMENDATION
========================================================= */

function Recommendation({
  icon,
  title,
  text,
}) {

  return (

    <div style={recommendationCard}>

      <div style={recommendationIcon}>
        {icon}
      </div>

      <div>

        <h3>
          {title}
        </h3>

        <p>
          {text}
        </p>

      </div>

    </div>
  );
}

/* =========================================================
   DOCUMENT UPLOAD
========================================================= */

function DocumentUpload({
  title,
  value,
  onChange,
}) {

  return (

    <div style={documentCard}>

      <div style={documentIcon}>
        📄
      </div>

      <h3>
        {title}
      </h3>

      {value ? (

        <p style={uploadedText}>
          ✅ {value}
        </p>

      ) : (

        <label style={documentButton}>

          Upload Document

          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={(e) =>
              onChange(
                e.target.files[0]
              )
            }
            style={{
              display: "none",
            }}
          />

        </label>

      )}

    </div>
  );
}

/* =========================================================
   FINANCIAL RECORDS
========================================================= */

function FinancialRecords({
  incomes,
  expenses,
}) {

  const [period, setPeriod] =
    useState("monthly");

  const [selectedYear, setSelectedYear] =
    useState(
      new Date().getFullYear()
    );

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyData =
    months.map(
      (month, index) => {

        const income =
          incomes
            .filter((item) => {

              const date =
                new Date(item.date);

              return (
                date.getMonth() ===
                  index &&
                date.getFullYear() ===
                  selectedYear
              );

            })
            .reduce(
              (sum, item) =>
                sum + item.amount,
              0
            );

        const expense =
          expenses
            .filter((item) => {

              const date =
                new Date(item.date);

              return (
                date.getMonth() ===
                  index &&
                date.getFullYear() ===
                  selectedYear
              );

            })
            .reduce(
              (sum, item) =>
                sum + item.amount,
              0
            );

        return {
          month,
          income,
          expense,
          profit:
            income - expense,
        };
      }
    );

  const yearlyData = [2024, 2025, 2026].map(
    (year) => {

      const income =
        incomes
          .filter(
            (item) =>
              new Date(
                item.date
              ).getFullYear() === year
          )
          .reduce(
            (sum, item) =>
              sum + item.amount,
            0
          );

      const expense =
        expenses
          .filter(
            (item) =>
              new Date(
                item.date
              ).getFullYear() === year
          )
          .reduce(
            (sum, item) =>
              sum + item.amount,
            0
          );

      return {
        year,
        income,
        expense,
        profit:
          income - expense,
      };
    }
  );

  const data =
    period === "monthly"
      ? monthlyData
      : yearlyData;

  return (

    <div>

      <div style={recordButtons}>

        <button
          onClick={() =>
            setPeriod("monthly")
          }
          style={
            period === "monthly"
              ? greenButton
              : outlineButton
          }
        >
          📅 Monthly
        </button>

        <button
          onClick={() =>
            setPeriod("yearly")
          }
          style={
            period === "yearly"
              ? greenButton
              : outlineButton
          }
        >
          📆 Yearly
        </button>

        {period === "monthly" && (

          <select
            value={selectedYear}
            onChange={(e) =>
              setSelectedYear(
                Number(e.target.value)
              )
            }
            style={yearSelect}
          >

            <option value="2024">
              2024
            </option>

            <option value="2025">
              2025
            </option>

            <option value="2026">
              2026
            </option>

          </select>

        )}

      </div>

      <div style={recordGrid}>

        {data.map(
          (item, index) => (

            <div
              key={index}
              style={recordCard}
            >

              <h3>
                {period === "monthly"
                  ? item.month
                  : item.year}
              </h3>

              <p style={incomeText}>
                Income: ₹
                {item.income.toLocaleString()}
              </p>

              <p style={expenseText}>
                Expense: ₹
                {item.expense.toLocaleString()}
              </p>

              <strong
                style={{
                  color:
                    item.profit >= 0
                      ? "#176b36"
                      : "#d32f2f",
                }}
              >
                Profit: ₹
                {item.profit.toLocaleString()}
              </strong>

            </div>

          )
        )}

      </div>

    </div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) {

  return (

    <div>

      <label>
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        style={inputStyle}
      />

    </div>
  );
}

/* =========================================================
   SELECT INPUT
========================================================= */

function SelectInput({
  label,
  value,
  onChange,
  options,
}) {

  return (

    <div>

      <label>
        {label}
      </label>

      <select
        value={value}
        onChange={(e) =>
          onChange(
            e.target.value
          )
        }
        style={inputStyle}
      >

        <option value="">
          Select {label}
        </option>

        {options.map(
          (option, index) => (

            <option
              key={index}
              value={option}
            >
              {option}
            </option>

          )
        )}

      </select>

    </div>
  );
}

/* =========================================================
   STYLES
========================================================= */

const pageStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(135deg,#f4f8f3,#eef6ed)",
  fontFamily:
    "Arial, sans-serif",
};

const headerStyle = {
  background:
    "linear-gradient(135deg,#176b36,#238b4d)",
  color: "white",
  padding:
    "18px 40px",
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 10,
  boxShadow:
    "0 3px 15px rgba(0,0,0,0.15)",
};

const headerRight = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
};

const logoutButton = {
  backgroundColor:
    "rgba(255,255,255,0.2)",
  color: "white",
  border:
    "1px solid rgba(255,255,255,0.5)",
  padding:
    "9px 15px",
  borderRadius: "7px",
  cursor: "pointer",
};

const mainStyle = {
  maxWidth: "1250px",
  margin: "auto",
  padding:
    "40px 25px",
};

const welcomeStyle = {
  color: "#174d2a",
  fontSize: "32px",
  marginBottom: "8px",
};

const subtitleStyle = {
  color: "#666",
  fontSize: "17px",
};

const cardsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(200px,1fr))",
  gap: "20px",
  marginTop: "30px",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "23px",
  borderRadius: "16px",
  boxShadow:
    "0 5px 18px rgba(0,0,0,0.08)",
  transition:
    "transform .2s",
};

const iconStyle = {
  fontSize: "30px",
};

const buttonSection = {
  display: "flex",
  gap: "15px",
  marginTop: "35px",
  flexWrap: "wrap",
};

const greenButton = {
  background:
    "linear-gradient(135deg,#176b36,#238b4d)",
  color: "white",
  border: "none",
  padding:
    "13px 22px",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: "bold",
};

const outlineButton = {
  backgroundColor: "white",
  color: "#176b36",
  border:
    "1px solid #176b36",
  padding:
    "13px 22px",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: "bold",
};

const cancelButton = {
  backgroundColor: "#eee",
  color: "#333",
  border: "none",
  padding:
    "13px 22px",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer",
};

const sectionBox = {
  backgroundColor: "white",
  marginTop: "35px",
  padding: "28px",
  borderRadius: "16px",
  boxShadow:
    "0 4px 18px rgba(0,0,0,0.08)",
};

const sectionHeader = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
};

const sectionTitle = {
  color: "#174d2a",
  marginTop: 0,
};

const sectionSubtitle = {
  color: "#777",
};

const profileGrid = {
  display: "grid",
  gridTemplateColumns:
    "180px 1fr",
  gap: "30px",
  alignItems: "center",
};

const profilePhotoBox = {
  textAlign: "center",
};

const profilePlaceholder = {
  width: "140px",
  height: "140px",
  margin: "auto",
  borderRadius: "50%",
  background:
    "linear-gradient(135deg,#dff3e4,#b8e0c2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "60px",
};

const profilePhotoStyle = {
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  objectFit: "cover",
};

const uploadButton = {
  display: "inline-block",
  marginTop: "15px",
  backgroundColor: "#176b36",
  color: "white",
  padding: "10px 15px",
  borderRadius: "7px",
  cursor: "pointer",
};

const detailsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(200px,1fr))",
  gap: "15px",
  marginTop: "20px",
};

const infoBox = {
  background:
    "linear-gradient(135deg,#f8fbf8,#edf5ee)",
  padding: "17px",
  borderRadius: "10px",
  border:
    "1px solid #dce9de",
};

const infoBoxSmall = {};

const cropCardsGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
  marginTop: "20px",
};

const cropCard = {
  padding: "20px",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg,#f5fbf5,#eaf5eb)",
  border:
    "1px solid #d9e9db",
};

const cropIcon = {
  fontSize: "35px",
};

const healthBadge = {
  display: "inline-block",
  padding:
    "6px 10px",
  borderRadius: "20px",
  fontSize: "12px",
  fontWeight: "bold",
};

const formBox = {
  backgroundColor: "white",
  marginTop: "30px",
  padding: "30px",
  borderRadius: "14px",
  boxShadow:
    "0 3px 12px rgba(0,0,0,0.1)",
};

const formGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "13px",
  marginTop: "8px",
  marginBottom: "15px",
  border:
    "1px solid #ccc",
  borderRadius: "7px",
  fontSize: "16px",
  outline: "none",
};

const buttonRow = {
  marginTop: "25px",
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const calculationBox = {
  marginTop: "20px",
  padding: "18px",
  backgroundColor: "#edf5ee",
  borderRadius: "10px",
};

const calculationValue = {
  marginLeft: "15px",
  color: "#176b36",
  fontSize: "22px",
  fontWeight: "bold",
};

const financialGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
};

const financialCard = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "22px",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg,#f8fcf8,#edf6ee)",
  border:
    "1px solid #dce9de",
};

const financialIcon = {
  fontSize: "35px",
};

const recordButtons = {
  display: "flex",
  gap: "10px",
  margin:
    "20px 0",
  flexWrap: "wrap",
};

const yearSelect = {
  padding: "12px",
  borderRadius: "7px",
  border:
    "1px solid #ccc",
};

const recordGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(150px,1fr))",
  gap: "12px",
};

const recordCard = {
  padding: "16px",
  borderRadius: "12px",
  backgroundColor: "#f7faf7",
  border:
    "1px solid #dce9de",
};

const incomeText = {
  color: "#176b36",
};

const expenseText = {
  color: "#d32f2f",
};

const weatherGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(200px,1fr))",
  gap: "18px",
};

const weatherCard = {
  padding: "20px",
  display: "flex",
  gap: "15px",
  alignItems: "center",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg,#edf7ff,#f6fbff)",
  border:
    "1px solid #d8e8f2",
};

const weatherIcon = {
  fontSize: "35px",
};

const resourceGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(200px,1fr))",
  gap: "18px",
};

const resourceCard = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  padding: "20px",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg,#fffaf0,#fff5dc)",
  border:
    "1px solid #f0dfb9",
};

const resourceIcon = {
  fontSize: "35px",
};

const recommendationGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(260px,1fr))",
  gap: "18px",
};

const recommendationCard = {
  display: "flex",
  gap: "15px",
  padding: "20px",
  borderRadius: "14px",
  background:
    "linear-gradient(135deg,#f4f0ff,#faf8ff)",
  border:
    "1px solid #e0d9f2",
};

const recommendationIcon = {
  fontSize: "35px",
};

const timeline = {
  borderLeft:
    "3px solid #176b36",
  marginLeft: "20px",
  paddingLeft: "25px",
};

const timelineItem = {
  position: "relative",
  display: "flex",
  gap: "18px",
  marginBottom: "25px",
};

const timelineIcon = {
  position: "relative",
  left: "-42px",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  backgroundColor: "#edf5ee",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
};

const documentGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(220px,1fr))",
  gap: "18px",
};

const documentCard = {
  textAlign: "center",
  padding: "25px",
  borderRadius: "14px",
  backgroundColor: "#f8faf8",
  border:
    "1px solid #dce9de",
};

const documentIcon = {
  fontSize: "40px",
};

const documentButton = {
  display: "inline-block",
  marginTop: "10px",
  backgroundColor: "#176b36",
  color: "white",
  padding: "10px 15px",
  borderRadius: "7px",
  cursor: "pointer",
};

const uploadedText = {
  color: "#176b36",
  fontWeight: "bold",
  fontSize: "13px",
};

const voiceBox = {
  padding: "25px",
  backgroundColor: "#f8faf8",
  borderRadius: "14px",
  textAlign: "center",
};

const voiceButton = {
  background:
    "linear-gradient(135deg,#176b36,#238b4d)",
  color: "white",
  border: "none",
  padding:
    "15px 25px",
  borderRadius: "30px",
  fontSize: "17px",
  cursor: "pointer",
};

const stopButton = {
  background:
    "linear-gradient(135deg,#d32f2f,#ef5350)",
  color: "white",
  border: "none",
  padding:
    "15px 25px",
  borderRadius: "30px",
  fontSize: "17px",
  cursor: "pointer",
};

const recordingText = {
  color: "#d32f2f",
  fontWeight: "bold",
};

const voiceList = {
  marginTop: "25px",
};

const voiceNote = {
  display: "flex",
  justifyContent:
    "space-between",
  alignItems: "center",
  gap: "20px",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "10px",
  backgroundColor: "#f7faf7",
};

const tableBox = {
  backgroundColor: "white",
  marginTop: "35px",
  padding: "25px",
  borderRadius: "14px",
  boxShadow:
    "0 3px 12px rgba(0,0,0,0.08)",
  overflowX: "auto",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const tableHeader = {
  background:
    "linear-gradient(135deg,#e7f4e9,#dff0e2)",
};

const cellStyle = {
  padding: "14px",
  textAlign: "left",
  borderBottom:
    "1px solid #ddd",
};

const profitChart = {
  display: "flex",
  marginTop: "30px",
  height: "420px",
  padding: "20px",
  backgroundColor: "#ffffff",
  borderRadius: "12px",
  boxSizing: "border-box",
};

const yAxisLabels = {
  width: "55px",
  height: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent:
    "space-between",
  alignItems: "flex-end",
  paddingRight: "12px",
  boxSizing: "border-box",
  color: "#555",
  fontSize: "13px",
};

const chartArea = {
  position: "relative",
  flex: 1,
  height: "350px",
  borderBottom:
    "2px solid #555",
};

const chartGridLine = {
  position: "absolute",
  left: 0,
  right: 0,
  borderTop:
    "1px dashed #d5d5d5",
};

const barsContainer = {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  height: "350px",
  display: "flex",
  justifyContent:
    "space-around",
  alignItems: "flex-end",
  gap: "25px",
  padding:
    "0 20px",
  boxSizing: "border-box",
};

const barColumn = {
  height: "350px",
  flex: 1,
  maxWidth: "120px",
  display: "flex",
  flexDirection: "column",
  justifyContent:
    "flex-end",
  alignItems: "center",
  position: "relative",
};

const percentageLabel = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#444",
  marginBottom: "8px",
};

const profitBar = {
  width: "65px",
  minHeight: "20px",
  borderRadius:
    "5px 5px 0 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  transition:
    "height .5s ease",
  position: "relative",
};

const chartBarColors = [
  "#4f7c8a",
  "#18a9b9",
  "#21b99e",
  "#e94b17",
  "#f5a623",
  "#7e57c2",
  "#26a69a",
];

const barNumber = {
  position: "absolute",
  bottom: "-35px",
  width: "32px",
  height: "32px",
  borderRadius: "50%",
  backgroundColor:
    "#37474f",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "13px",
  fontWeight: "bold",
};

const cropLabel = {
  marginTop: "45px",
  fontWeight: "bold",
  color: "#174d2a",
  fontSize: "14px",
  textAlign: "center",
};

const profitLabel = {
  marginTop: "5px",
  color: "#176b36",
  fontWeight: "bold",
  fontSize: "13px",
};

const locationResult = {};

const mapButton = {
  display: "inline-block",
  backgroundColor: "#176b36",
  color: "white",
  textDecoration: "none",
  padding: "13px 20px",
  borderRadius: "8px",
  fontWeight: "bold",
};

const locationBox = {};

const loginPage = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background:
    "linear-gradient(135deg,#176b36,#8bc34a)",
  padding: "20px",
};

const loginCard = {
  width: "100%",
  maxWidth: "420px",
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "20px",
  boxShadow:
    "0 15px 40px rgba(0,0,0,0.2)",
  boxSizing: "border-box",
};

const loginLogo = {
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  margin: "auto",
  backgroundColor: "#edf5ee",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "45px",
};

const loginTitle = {
  textAlign: "center",
  color: "#176b36",
  marginBottom: "5px",
};

const loginSubtitle = {
  textAlign: "center",
  color: "#777",
  marginBottom: "30px",
};

/* =========================================================
   START REACT
========================================================= */

const root =
  ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);