import { Person } from "@/pages/api/person/People.interface";
import Link from "next/link";

const Person: React.FC<Person> = ({ person }) => {
  return (
    <li>
      <Link href="/person/[id]" as={`/person/${person.id}`}>
        <a>{person.name}</a>
      </Link>
    </li>
  );
};

export default Person;
