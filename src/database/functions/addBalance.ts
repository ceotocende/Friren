import { Users } from '../models/Users';

export async function addBalance(id: string, bal: number) {
    const user = await Users.findOne({ where: { user_id: id } });
    if (!user) {
        const a = await Users.create({ user_id: id, balance: bal, bank: 0, exp: 0, rank: 0, cookie: 0 });
        a.save();
    }
    if (user?.user_id === id) {
        user.balance = Number(user.balance) + bal;
        user.save();
    }
}