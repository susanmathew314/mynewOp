import React, { useEffect, useState } from "react";
import styles from "./Chathistory.module.css";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-accordion";

interface ChatMessage {
  user: string;
  bot:[];
  date: string; // Assuming timestamp is a string, update it as per your data structure
}

const ChatHistory = () => {
  // Parse the data from local storage
  const historyData = JSON.parse(localStorage.getItem("history") || "[]") as ChatMessage[];
    console.log(historyData);


  // Function to check if a date is within the last 7 days
 function isLast7Days(date: Date) {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    return date >= sevenDaysAgo && date <= today;
  } 

  // Filter data for today, yesterday, and last 7 days
  const todayData = historyData.filter((item: ChatMessage) => {
    const messageDate = new Date(item.date);
    console.log("messageDate: " + messageDate);
    const today = new Date();
    return (
      messageDate.getDate() === today.getDate() &&
      messageDate.getMonth() === today.getMonth() &&
      messageDate.getFullYear() === today.getFullYear()
    );
  });

  const yesterdayData = historyData.filter((item: ChatMessage) => {
    const messageDate = new Date(item.date);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return (
      messageDate.getDate() === yesterday.getDate() &&
      messageDate.getMonth() === yesterday.getMonth() &&
      messageDate.getFullYear() === yesterday.getFullYear()
    );
  });

  const last7DaysData = historyData.filter((item: ChatMessage) => {
    const messageDate = new Date(item.date);
    return isLast7Days(messageDate);
  }); 

  return (
    <div className={styles.chatHistory}>
      <h3>Chat History</h3>
    <Accordion collapsible>
    {todayData.length  > 0 && 
    <AccordionItem value="1">
      <AccordionHeader> {todayData.length  > 0 && <p  className="styles.historytitle">Today</p>}</AccordionHeader>
      <AccordionPanel>
        <div>
         {todayData.map((item: ChatMessage, index: number) => (
        <div key={index}>{item.user}</div>
      ))}
      </div>
      </AccordionPanel>
    </AccordionItem>
    }
{yesterdayData.length  > 0 && 
    <AccordionItem value="2">
      <AccordionHeader> {yesterdayData.length > 0 && <p  className="styles.historytitle">Today</p>}</AccordionHeader>
      <AccordionPanel>
        <div>
      {yesterdayData.map((item: ChatMessage, index: number) => (
        <div key={index}>{item.user}</div>
      ))}</div>
      </AccordionPanel>

    </AccordionItem>
}
{last7DaysData.length > 0 &&
    <AccordionItem value="3">
      <AccordionHeader>{last7DaysData.length > 0 && <p className="styles.historytitle">Today</p>}</AccordionHeader>
      <AccordionPanel>
        <div>
      {last7DaysData.map((item: ChatMessage, index: number) => (
        <div key={index}>{item.user}</div>
      ))} </div>
      </AccordionPanel>
    </AccordionItem>
}
  </Accordion>
   
  <h3>Popular topics</h3>
  <a href="#">Loream Ipsum dolor</a>
  <a href="#">Loream Ipsum dolor</a>
  <a href="#">Loream Ipsum dolor</a>
  <a href="#">Loream Ipsum dolor</a>
  <a href="#">Loream Ipsum dolor</a>
    </div>
  );
};

export default ChatHistory;
