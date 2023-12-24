"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Users } from "../../../../packages/shared-types/src/Users";

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "id",
    header: "Person ID",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "date_of_birth",
    header: "Date of birth",
  },
];
