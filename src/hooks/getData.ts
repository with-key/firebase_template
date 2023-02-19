import { useQuery } from "@tanstack/react-query";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../firebase";

const collectionRef = collection(db, "users");

export const useGetUsers = () => {
  const usersQuery = query(collectionRef, limit(1));

  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const raws = await getDocs(usersQuery);
      const users = raws.docs.map((doc) => doc.data());

      return users;
    },
  });
};
