import React, { useEffect } from "react";
import { useState } from "react";
import styles from '../../src//styles/App.module.css'

export default function TimeZone() {
  // const [NY, setNY] = useState("Awaiting time..");
  // const [London, SetLondon] = useState("Awaiting time..");
  // const [Tokyo, setTokyo] = useState("Awaiting time..");

  const [NY, setNY] = useState("10:09");
  const [London, SetLondon] = useState("10:09");
  const [Tokyo, setTokyo] = useState("10:09");

  const url_NY = "http://worldtimeapi.org/api/timezone/America/New_York";
  const url_London = "http://worldtimeapi.org/api/timezone/Europe/London";
  const url_Tokyo = "http://worldtimeapi.org/api/timezone/Asia/Tokyo";

  useEffect(() => {
    const timezone_NY = async () => {
      const response = await fetch(url_NY);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US");
      date = date.substr(0, 4) + date.substr(7, 9);
      setNY(date);
    };

    const timezone_London = async () => {
      const response = await fetch(url_London);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
      date = date.substr(0, 4) + date.substr(7, 9);
      SetLondon(date);
    };

    const timezone_Tokyo = async () => {
      const response = await fetch(url_Tokyo);
      const data = await response.json();
      var date = data.unixtime;
      date = new Date(date * 1000);
      date = date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
      date = date.substr(0, 4) + date.substr(7, 9);
      setTokyo(date);
    };

    timezone_NY();
    timezone_London();
    timezone_Tokyo();
  }, []);
  useEffect(() => {
    setInterval(() => {
      const timezone_NY = async () => {
        const response = await fetch(url_NY);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US");
        date = date.substr(0, 4) + date.substr(7, 9);
        setNY(date);
      };

      const timezone_London = async () => {
        const response = await fetch(url_London);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US", { timeZone: "Europe/London" });
        date = date.substr(0, 4) + date.substr(7, 9);
        SetLondon(date);
      };

      const timezone_Tokyo = async () => {
        const response = await fetch(url_Tokyo);
        const data = await response.json();
        var date = data.unixtime;
        date = new Date(date * 1000);
        date = date.toLocaleTimeString("en-US", { timeZone: "Asia/Tokyo" });
        date = date.substr(0, 4) + date.substr(7, 9);
        setTokyo(date);
      };
      timezone_NY();
      timezone_London();
      timezone_Tokyo();
    }, 600000);
  }, []);

  // Chsnge time from 600000 to 60000

  return (
    <div className={styles.timeZoneMain}>
      <div className={styles.timeZones}>
        <h2 id={styles.timezone}>NY</h2>
        <h2 id={styles.Timezone_Time}>{NY}</h2>
      </div>

      <div className={styles.timeZones}>
        <h2 id={styles.timezone}>LON</h2>
        <h2 id={styles.Timezone_Time}>{London}</h2>
      </div>

      <div className={styles.timeZones}>
        <h2 id={styles.timezone}>TKYO</h2>
        <h2 id={styles.Timezone_Time}>{Tokyo}</h2>
      </div>
    </div>
  );
}