import type { OverrideBundleDefinition } from '@polkadot/types/types';

// structs need to be in order
/* eslint-disable sort-keys */

const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        Record: "Vec<u8>",
        TechnicalParam: "Vec<u8>",
        TechnicalReport: "Vec<u8>",
        EconomicalParam: "{}",
        ProofParam: "MultiSignature",
        LiabilityIndex: "u64"
      }
    }
  ]
};

export default definitions;

/*
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
      "LiabilityIndex": "u64",
      "Address": "IndicesLookupSource",
      "LookupSource": "IndicesLookupSource",
      "AccountInfo": "AccountInfoWithRefCount",
      "RefCount": "u8"
  }})
};
*/

