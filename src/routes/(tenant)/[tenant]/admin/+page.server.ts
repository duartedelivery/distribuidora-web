// import type { PageServerLoad } from './$types'
// import { customerTable, productItemTable, customerOrderTable } from '$db/schema'

// import { bugReport } from '$lib/server/db/controller'
// import { error } from '@sveltejs/kit'
// import { count } from 'drizzle-orm'
// import type { SQLiteTable } from 'drizzle-orm/sqlite-core'

// import { dashboard } from '$lib/server/db/dashboard-queries'

// export const load = (async ({ locals: { tenantDb } }) => {
//   function getRowCount(table: SQLiteTable) {
//     return tenantDb!.select({ count: count() }).from(table)
//   }

//   try {
//     const [
//       [{ count: customerCount }],
//       [{ count: productCount }],
//       [{ count: orderCount }],
//       recentActivity,
//     ] = await Promise.all([
//       getRowCount(customerTable),
//       getRowCount(productItemTable),
//       getRowCount(customerOrderTable),
//       bugReport(tenantDb!).getLogs(),
//     ])

//     const dash = {
//       topOrderedProducts: await dashboard(tenantDb!).getTopOrderedNProducts(10),
//       topRevenueProducts: await dashboard(tenantDb!).getTopRRevenueProducts(10),
//       topCustomers: await dashboard(tenantDb!).customerTotalSpend(),
//       topCustomerOrders: await dashboard(tenantDb!).customerNumberOrders(),
//     }
//     console.log(dash)

//     return {
//       dash,
//       customerCount,
//       productCount,
//       orderCount,
//       recentActivity,
//     }
//   } catch (e) {
//     console.error(e)
//     return error(500, "Couldn't load page")
//   }
// }) satisfies PageServerLoad
