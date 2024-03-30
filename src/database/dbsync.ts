import { Marry } from "./models/Marry";
import { Users } from "./models/Users";
import { ShopRoles } from "./models/ShopRoles";
import sequelize from "./sequelize";

Users;
ShopRoles;
Marry;

try {
    sequelize.sync();
    sequelize.authenticate();
    console.log(`[${sequelize.getDatabaseName()}]: авторизованна`)
} catch (err) {
    console.log(`[Произошла ошибка в базе данных]: ${err}`)
}

export default sequelize;