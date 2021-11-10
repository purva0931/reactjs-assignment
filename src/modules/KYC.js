import React from "react";
import Card from "./UI/Card";
const KYC = () => {
  return (
    <>
      <div
        style={{
          height: "90vh",
          fontSize: 22,
          marginLeft: 140,
          display: "flex",
          flexDirection: "column",
          width: "45%",
        }}
      >
        <p>Hi John,</p>
        <p style={{ marginTop: 50, marginBottom: 50 }}>
          <strong>Complete your KYC</strong>
          <br />
          <small>and experience the world class bitcoin app defi</small>
        </p>
        <p
          style={{
            textTransform: "uppercase",
            display: "flex",
            marginBottom: 50,
          }}
        >
          <strong>
            <small>Start Kyc</small>
          </strong>
        </p>
        <p>Trending Coins</p>
        <Card>
          <div style={{ display: "flex" }}>
            <div style={{ fontSize: 18 }}>
              <p style={{ marginBottom: 0 }}>BitCoin</p>
              <p style={{ marginTop: 0 }}>BTC</p>
            </div>
            <div style={{ fontSize: 18, marginLeft: 200 }}>
              <p style={{ marginBottom: 0 }}>US$ 2,447.21</p>
              <p style={{ marginTop: 0 }}>0.25%</p>
            </div>
          </div>
        </Card>
      </div>
      <div style={{ fontSize: 22 }}>
        <p>Ideal For New Investors</p>
        <Card>
          <ul style={{ listStyle: "none", margin: 0, paddingLeft: 0 }}>
            <li style={{ borderBottom: "1px solid black" }}>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: 18 }}>
                  <p style={{ marginBottom: 0 }}>BitCoin</p>
                  <p style={{ marginTop: 0 }}>BTC</p>
                </div>
                <div style={{ fontSize: 18, marginLeft: 200 }}>
                  <p style={{ marginBottom: 0 }}>US$ 2,447.21</p>
                  <p style={{ marginTop: 0 }}>0.25%</p>
                </div>
              </div>
            </li>
            <li style={{ borderBottom: "1px solid black" }}>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: 18 }}>
                  <p style={{ marginBottom: 0 }}>BitCoin</p>
                  <p style={{ marginTop: 0 }}>BTC</p>
                </div>
                <div style={{ fontSize: 18, marginLeft: 200 }}>
                  <p style={{ marginBottom: 0 }}>US$ 2,447.21</p>
                  <p style={{ marginTop: 0 }}>0.25%</p>
                </div>
              </div>
            </li>
            <li style={{ borderBottom: "1px solid black" }}>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: 18 }}>
                  <p style={{ marginBottom: 0 }}>BitCoin</p>
                  <p style={{ marginTop: 0 }}>BTC</p>
                </div>
                <div style={{ fontSize: 18, marginLeft: 200 }}>
                  <p style={{ marginBottom: 0 }}>US$ 2,447.21</p>
                  <p style={{ marginTop: 0 }}>0.25%</p>
                </div>
              </div>
            </li>
            <li style={{ borderBottom: "1px solid black" }}>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: 18 }}>
                  <p style={{ marginBottom: 0 }}>BitCoin</p>
                  <p style={{ marginTop: 0 }}>BTC</p>
                </div>
                <div style={{ fontSize: 18, marginLeft: 200 }}>
                  <p style={{ marginBottom: 0 }}>US$ 2,447.21</p>
                  <p style={{ marginTop: 0 }}>0.25%</p>
                </div>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
};

export default KYC;
