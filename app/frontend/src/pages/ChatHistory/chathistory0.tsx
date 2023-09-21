
// import React, { useState, useEffect } from "react";

// const ChatHistory = () => {
//   // Define state to store the chat history data
//   const getHistoryfromLocalData = JSON.parse(localStorage.getItem("history")!)
//   console.log(getHistoryfromLocalData)
//   const [chatHistory, setChatHistory] = useState(getHistoryfromLocalData || []);

// const currentTimestamp = Math.floor(Date.now() / 1000);

// // Convert a Unix timestamp to a Date object
// function timestampToDate(timestamp: any) {
//   return new Date(timestamp * 1000); // Multiply by 1000 to convert to milliseconds
// }

// // Function to determine if a date is today
// function isToday(date) {
//   const today = new Date();
//   return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
// }

// // Function to determine if a date is tomorrow
// function isTomorrow(date) {
//   const tomorrow = new Date();
//   tomorrow.setDate(tomorrow.getDate() + 1);
//   return date.getDate() === tomorrow.getDate() && date.getMonth() === tomorrow.getMonth() && date.getFullYear() === tomorrow.getFullYear();
// }

// // Function to determine if a date is within the last 7 days
// function isLast7Days(date) {
//   const sevenDaysAgo = new Date();
//   sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//   return date >= sevenDaysAgo;
// }

// // Convert Unix timestamp to a Date object
// const unixTimestamp = "2023-09-21T15:16:49.640Z"; // Replace with your Unix timestamp
// const date = timestampToDate(unixTimestamp);

// // Check if the date is today, tomorrow, or within the last 7 days
// if (isToday(date)) {
//   console.log("Today");
// } else if (isTomorrow(date)) {
//   console.log("Tomorrow");
// } else if (isLast7Days(date)) {
//   console.log("Within the last 7 days");
// } else {
//   console.log("More than 7 days ago");
// }


// // const todaysHistory = chatHistory?.filter
// // const yesterdaysHistory = chatHistory?.filter
// // const last7Days = chatHistory?.filter

//   return (
//     <div>


//       {chatHistory?.map((item: any)=>{
//         return <div className="">{item?.user}</div>
//       })}
//       </div>
//   );
// };

// export default ChatHistory; 