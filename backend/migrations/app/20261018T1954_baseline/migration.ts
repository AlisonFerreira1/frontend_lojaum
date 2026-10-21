#!/usr/bin/env -S node
import type { Contract as End } from '../../snapshots/d6ef76bc0a4d4aecbfb900c1e1d9194a3ce0efb22798d226c619ad3728cee32e/contract';
import endContract from '../../snapshots/d6ef76bc0a4d4aecbfb900c1e1d9194a3ce0efb22798d226c619ad3728cee32e/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: 'public' }),
      this.createTable({
        schema: 'public',
        table: 'Typeuser',
        columns: [
          col('id', 'SERIAL', { notNull: true, codecRef: { codecId: 'pg/int4@1' } }),
          col('role', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['id'])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
