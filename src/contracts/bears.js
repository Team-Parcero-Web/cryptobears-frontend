export const bearsABI = [
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
      {
        name: "minPrice",
        type: "uint256",
      },
    ],
    name: "acceptBidForBear",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "allInitialOwnersAssigned",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "bearNoLongerForSale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "buyBear",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "enterBidForBear",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getBear",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
      {
        name: "minSalePriceInWei",
        type: "uint256",
      },
    ],
    name: "offerBearForSale",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
      {
        name: "minSalePriceInWei",
        type: "uint256",
      },
      {
        name: "toAddress",
        type: "address",
      },
    ],
    name: "offerBearForSaleToAddress",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "setInitialOwner",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "addresses",
        type: "address[]",
      },
      {
        name: "indices",
        type: "uint256[]",
      },
    ],
    name: "setInitialOwners",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "to",
        type: "address",
      },
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "transferBear",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "withdrawBidForBear",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    payable: true,
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "Assign",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "BearTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bearIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "minValue",
        type: "uint256",
      },
      {
        indexed: true,
        name: "toAddress",
        type: "address",
      },
    ],
    name: "BearOffered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bearIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
    ],
    name: "BearBidEntered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bearIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
    ],
    name: "BearBidWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bearIndex",
        type: "uint256",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
      {
        indexed: true,
        name: "fromAddress",
        type: "address",
      },
      {
        indexed: true,
        name: "toAddress",
        type: "address",
      },
    ],
    name: "BearBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "bearIndex",
        type: "uint256",
      },
    ],
    name: "BearNoLongerForSale",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "allBearsAssigned",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "bearBids",
    outputs: [
      {
        name: "hasBid",
        type: "bool",
      },
      {
        name: "bearIndex",
        type: "uint256",
      },
      {
        name: "bidder",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "bearIndexToAddress",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "bearsOfferedForSale",
    outputs: [
      {
        name: "isForSale",
        type: "bool",
      },
      {
        name: "bearIndex",
        type: "uint256",
      },
      {
        name: "seller",
        type: "address",
      },
      {
        name: "minValue",
        type: "uint256",
      },
      {
        name: "onlySellTo",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "bearsRemainingToAssign",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "claimPrice",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "imageHash",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "nextBearIndexToAssign",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "pendingWithdrawals",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "standard",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];
