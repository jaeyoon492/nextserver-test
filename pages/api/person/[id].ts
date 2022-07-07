import { people } from "data";
import { NextApiResponse } from "next";
import { PersonData } from "./People.interface";

export default function personHandler(
  {
    query: { id },
  }: {
    query: {
      id: string;
    };
  },
  res: NextApiResponse<PersonData | { message: string }>
) {
  const filtered = people.filter((person) => person.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
}
