#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/9eef691b737c06bf52d106aee57ed059e6de9ea77fb02b78a183357ab539fa8b/contract';
import endContract from '../../snapshots/9eef691b737c06bf52d106aee57ed059e6de9ea77fb02b78a183357ab539fa8b/contract.json' with { type: 'json' };
import type { Contract as Start } from '../../snapshots/d6ef76bc0a4d4aecbfb900c1e1d9194a3ce0efb22798d226c619ad3728cee32e/contract';
import startContract from '../../snapshots/d6ef76bc0a4d4aecbfb900c1e1d9194a3ce0efb22798d226c619ad3728cee32e/contract.json' with { type: 'json' };
import {
  Migration,
  MigrationCLI,
  checkExpression,
  col,
  fn,
  lit,
  primaryKey,
  sql,
} from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      ...this.renameTable({ schema: 'public', table: 'Typeuser', to: 'role' }),
      ...this.renameColumn({ schema: 'public', table: 'role', column: 'role', to: 'type' }),
      this.createTable({
        schema: 'public',
        table: 'info',
        columns: [
          col('address', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('email', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('link_local', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('phone', 'text', { codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'itens_order',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_menu', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_order', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('menu_item', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('quantity', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('unit_price', 'numeric', { notNull: true, codecRef: { codecId: 'pg/numeric@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'menu',
        columns: [
          col('description', 'text', { codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('item', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('price', 'numeric', { notNull: true, codecRef: { codecId: 'pg/numeric@1' } }),
          col('status', 'bool', {
            notNull: true,
            default: lit(true),
            codecRef: { codecId: 'pg/bool@1' },
          }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'order_buy',
        columns: [
          col('address', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('created_at', 'timestamptz', {
            notNull: true,
            default: fn(sql`now()`),
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_user', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('pricefull', 'numeric', { notNull: true, codecRef: { codecId: 'pg/numeric@1' } }),
          col('status', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [
          primaryKey(['id']),
          checkExpression(
            'order_buy_status_check_37b4e426',
            sql`"status" IN ('pedido aberto', 'pedido em produção', 'pedido em transporte', 'pedido entregue')`,
          ),
        ],
      }),
      this.createTable({
        schema: 'public',
        table: 'user_p',
        columns: [
          col('email', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('id_role', 'int4', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name_user', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('password', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updated_at', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-temporal@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'menu',
        constraint: 'menu_item_key',
        columns: ['item'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'role',
        constraint: 'role_type_key',
        columns: ['type'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'user_p',
        constraint: 'user_p_name_user_key',
        columns: ['name_user'],
      }),
      this.addUnique({
        schema: 'public',
        table: 'user_p',
        constraint: 'user_p_email_key',
        columns: ['email'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'itens_order',
        index: 'itens_order_id_menu_idx_7979de98',
        columns: ['id_menu'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'itens_order',
        index: 'itens_order_id_order_idx_09f94ded',
        columns: ['id_order'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'order_buy',
        index: 'order_buy_id_user_idx_52684e74',
        columns: ['id_user'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'user_p',
        index: 'user_p_id_role_idx_6c4da109',
        columns: ['id_role'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'itens_order',
        foreignKey: {
          name: 'itens_order_id_menu_fkey',
          columns: ['id_menu'],
          references: { schema: 'public', table: 'menu', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'itens_order',
        foreignKey: {
          name: 'itens_order_id_order_fkey',
          columns: ['id_order'],
          references: { schema: 'public', table: 'order_buy', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'order_buy',
        foreignKey: {
          name: 'order_buy_id_user_fkey',
          columns: ['id_user'],
          references: { schema: 'public', table: 'user_p', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'user_p',
        foreignKey: {
          name: 'user_p_id_role_fkey',
          columns: ['id_role'],
          references: { schema: 'public', table: 'role', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
