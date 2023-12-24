import React from "react";
import UserDataTable from "../../components/data-table";
import { columns } from "./columns";
import { people } from "@/lib/people";

type Props = {};

const Users = (props: Props) => {
  return (
    <div>
      <UserDataTable columns={columns} data={people} />
    </div>
  );
};

export default Users;
