import { collection, addDoc, getDocs, query, limit } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { useGetUsers } from "./hooks/getData";

function App() {
  const { data } = useGetUsers();
  console.log(data);
  return <button onClick={() => {}}>버튼</button>;
}

export default App;
