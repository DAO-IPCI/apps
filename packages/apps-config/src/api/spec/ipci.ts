import { typesFromDefs } from '../util';


export default {
  ...typesFromDefs({ types: {
      "Record": "Vec<u8>",
      "Order": {
        "model": "Vec<u8>",
        "objective": "Vec<u8>",
        "cost": "Balance",
        "custodian": "AccountId"
      },
      "Demand": {
        "order": "Order",
        "sender": "AccountId"
      },
      "Offer": {
        "order": "Order",
        "sender": "AccountId"
      },
      "Liability": {
        "order": "Order",
        "promisee": "AccountId",
        "promisor": "AccountId",
        "result": "Option<Vec<u8>>"
      },
      "LiabilityIndex": "u64"
  }})
};
