import sequelize from "../sequelize";
import { Model, Optional, DataTypes } from "sequelize";

interface ShopRolesInt {
    role_id: string;
    price: number;
    timely: boolean;
    timely_count: number;
};

interface ShopTolesOpt extends Optional<ShopRolesInt, 'role_id'> { };

export class ShopRoles extends Model<ShopRolesInt, ShopTolesOpt> implements ShopRolesInt {
    public role_id!: string;
    public price!: number;
    public timely!: boolean;
    public timely_count!: number;
};

ShopRoles.init({
    role_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    price: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false
    },
    timely: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    timely_count: {
        type: DataTypes.BIGINT,
        defaultValue: 0,
        allowNull: false
    }
},{ sequelize, tableName: 'shop_roles', createdAt: false, timestamps: false });