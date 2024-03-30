import { Users } from "../models/Users";
import { addBalance } from "./addBalance";
import { addExp } from "./addExp";

export default async function chekUserInDataBase(id: string) {

    const user = await Users.findOne({ where: { user_id: id } });

    user === null || user === undefined ? (addBalance(id, 1)) : 0; 

}