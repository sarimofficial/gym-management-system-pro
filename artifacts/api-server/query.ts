import { db, adminUsersTable } from "@workspace/db";

async function main() {
  const users = await db.select().from(adminUsersTable);
  console.log(JSON.stringify(users, null, 2));
  process.exit(0);
}

main().catch(console.error);
