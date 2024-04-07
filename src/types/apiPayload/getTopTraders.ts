import { OrderTradersBy } from "@/modules/HomePage/types/orderTradersBy";

export type GetTopTradersApiPayload = {
  endTimestamp: number;
  orderBy: OrderTradersBy;
  limit?: number;
};
