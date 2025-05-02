import React from "react";
export default function Children({sendData}) {
  return (
    <>
    <div>Children</div>
    <button onClick={() => sendData("Hello Parent!")}>Send</button>;
    </>
  )
}
