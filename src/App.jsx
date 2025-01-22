import React, { useState } from "react";
import "./App.css";

const SubscriptionBoxManager = () => {
  const initialProducts = [
    {
      productName: "Coffee Beans",
      frequency: "Monthly",
      customization: "Dark Roast",
    },
    {
      productName: "Tea Packets",
      frequency: "Weekly",
      customization: "Assorted Flavors",
    },
    {
      productName: "Organic Honey",
      frequency: "Monthly",
      customization: "500g Jar",
    },
  ];

  const [subscriptions, setSubscriptions] = useState(initialProducts);
  const [form, setForm] = useState({
    productName: "",
    frequency: "Monthly",
    customization: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleAddSubscription = () => {
    if (form.productName.trim() === "")
      return alert("Product Name is required");
    setSubscriptions([...subscriptions, form]);
    setForm({ productName: "", frequency: "Monthly", customization: "" });
  };

  const handleRemoveSubscription = (index) => {
    setSubscriptions(subscriptions.filter((_, i) => i !== index));
  };

  return (
    <div className="layout">
      <header className="header">
        <h1>Subscription Box Manager</h1>
      </header>
      <main className="main">
        <section className="form-section">
          <h2>Add Subscription</h2>
          <form>
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              value={form.productName}
              onChange={handleChange}
              required
            />
            <select
              name="frequency"
              value={form.frequency}
              onChange={handleChange}
            >
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
            <input
              type="text"
              name="customization"
              placeholder="Customization Details"
              value={form.customization}
              onChange={handleChange}
            />
            <button type="button" onClick={handleAddSubscription}>
              Add Subscription
            </button>
          </form>
        </section>
        <section className="list-section">
          <h2>Current Subscriptions</h2>
          {subscriptions.length === 0 ? (
            <p className="empty-state">No subscriptions added yet.</p>
          ) : (
            <ul>
              {subscriptions.map((sub, index) => (
                <li key={index} className="subscription-item">
                  <div>
                    <strong>{sub.productName}</strong> ({sub.frequency}) -{" "}
                    {sub.customization}
                  </div>
                  <button onClick={() => handleRemoveSubscription(index)}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default SubscriptionBoxManager;
