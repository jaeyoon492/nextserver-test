import Person from "@/components/Person";
import { NextApiRequest } from "next";
import useSWR from "swr";
import { People } from "../api/person/People.interface";

const fetcher = async (url: URL) => {
  const res = await fetch(url);
  console.log(res);
  const data = await res.json();

  return data;
};

export default function Home() {
  const { data, error } = useSWR<People>(() => "../api/people", fetcher);
  console.log(data);
  if (!data) return <div>Loading...</div>;

  return (
    <ul>
      {data?.map((person, index) => (
        <Person key={index} person={person} />
      ))}
    </ul>
  );
}
