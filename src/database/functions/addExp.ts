import { Users } from '../models/Users';

export async function addExp(id: string, exp: number) {
    const user = await Users.findOne({ where: { user_id: id } });
    if (!user) {
        const a = await Users.create({ user_id: id, exp: exp, bank: 0, balance: 0, rank: 0, cookie: 0 });
        a.save();
    }
    if (user?.user_id === id) {
        user.exp = Number(user.exp) + exp;
        user.save();
    }
}