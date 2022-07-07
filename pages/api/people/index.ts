import { people } from "data";
import { NextApiRequest, NextApiResponse } from "next";
import { People } from "../person/People.interface";

export default function personHandler({}, res: NextApiResponse<People>) {
  res.status(200).json(people);
}
