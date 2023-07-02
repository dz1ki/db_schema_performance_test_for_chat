import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user";
import { Group } from "./group";

@Table({
  tableName: "images",
  timestamps: true,
})
export class Message extends Model {
  @Column({
    type: DataType.INTEGER(),
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => Message)
  @Column({
    type: DataType.INTEGER(),
    allowNull: false,
    field: "message_id",
  })
  messageId: number;

  @BelongsTo(() => Message)
  messages: Message;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  url: string;
}
