import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AskCancel,
  AskNew,
  AskUpdate,
  CollectionClose,
  CollectionNew,
  CollectionUpdate,
  NewAdminAndTreasuryAddresses,
  NewMinimumAndMaximumAskPrices,
  NonFungibleTokenRecovery,
  OwnershipTransferred,
  RevenueClaim,
  TokenRecovery,
  Trade
} from "../generated/ERC721NFTMarketV1/ERC721NFTMarketV1"

export function createAskCancelEvent(
  collection: Address,
  seller: Address,
  tokenId: BigInt
): AskCancel {
  let askCancelEvent = changetype<AskCancel>(newMockEvent())

  askCancelEvent.parameters = new Array()

  askCancelEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  askCancelEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  askCancelEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return askCancelEvent
}

export function createAskNewEvent(
  collection: Address,
  seller: Address,
  tokenId: BigInt,
  askPrice: BigInt
): AskNew {
  let askNewEvent = changetype<AskNew>(newMockEvent())

  askNewEvent.parameters = new Array()

  askNewEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  askNewEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  askNewEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  askNewEvent.parameters.push(
    new ethereum.EventParam(
      "askPrice",
      ethereum.Value.fromUnsignedBigInt(askPrice)
    )
  )

  return askNewEvent
}

export function createAskUpdateEvent(
  collection: Address,
  seller: Address,
  tokenId: BigInt,
  askPrice: BigInt
): AskUpdate {
  let askUpdateEvent = changetype<AskUpdate>(newMockEvent())

  askUpdateEvent.parameters = new Array()

  askUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  askUpdateEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  askUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  askUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "askPrice",
      ethereum.Value.fromUnsignedBigInt(askPrice)
    )
  )

  return askUpdateEvent
}

export function createCollectionCloseEvent(
  collection: Address
): CollectionClose {
  let collectionCloseEvent = changetype<CollectionClose>(newMockEvent())

  collectionCloseEvent.parameters = new Array()

  collectionCloseEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )

  return collectionCloseEvent
}

export function createCollectionNewEvent(
  collection: Address,
  creator: Address,
  whitelistChecker: Address,
  tradingFee: BigInt,
  creatorFee: BigInt
): CollectionNew {
  let collectionNewEvent = changetype<CollectionNew>(newMockEvent())

  collectionNewEvent.parameters = new Array()

  collectionNewEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  collectionNewEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  collectionNewEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistChecker",
      ethereum.Value.fromAddress(whitelistChecker)
    )
  )
  collectionNewEvent.parameters.push(
    new ethereum.EventParam(
      "tradingFee",
      ethereum.Value.fromUnsignedBigInt(tradingFee)
    )
  )
  collectionNewEvent.parameters.push(
    new ethereum.EventParam(
      "creatorFee",
      ethereum.Value.fromUnsignedBigInt(creatorFee)
    )
  )

  return collectionNewEvent
}

export function createCollectionUpdateEvent(
  collection: Address,
  creator: Address,
  whitelistChecker: Address,
  tradingFee: BigInt,
  creatorFee: BigInt
): CollectionUpdate {
  let collectionUpdateEvent = changetype<CollectionUpdate>(newMockEvent())

  collectionUpdateEvent.parameters = new Array()

  collectionUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  collectionUpdateEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  collectionUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "whitelistChecker",
      ethereum.Value.fromAddress(whitelistChecker)
    )
  )
  collectionUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "tradingFee",
      ethereum.Value.fromUnsignedBigInt(tradingFee)
    )
  )
  collectionUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "creatorFee",
      ethereum.Value.fromUnsignedBigInt(creatorFee)
    )
  )

  return collectionUpdateEvent
}

export function createNewAdminAndTreasuryAddressesEvent(
  admin: Address,
  treasury: Address
): NewAdminAndTreasuryAddresses {
  let newAdminAndTreasuryAddressesEvent = changetype<
    NewAdminAndTreasuryAddresses
  >(newMockEvent())

  newAdminAndTreasuryAddressesEvent.parameters = new Array()

  newAdminAndTreasuryAddressesEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  newAdminAndTreasuryAddressesEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return newAdminAndTreasuryAddressesEvent
}

export function createNewMinimumAndMaximumAskPricesEvent(
  minimumAskPrice: BigInt,
  maximumAskPrice: BigInt
): NewMinimumAndMaximumAskPrices {
  let newMinimumAndMaximumAskPricesEvent = changetype<
    NewMinimumAndMaximumAskPrices
  >(newMockEvent())

  newMinimumAndMaximumAskPricesEvent.parameters = new Array()

  newMinimumAndMaximumAskPricesEvent.parameters.push(
    new ethereum.EventParam(
      "minimumAskPrice",
      ethereum.Value.fromUnsignedBigInt(minimumAskPrice)
    )
  )
  newMinimumAndMaximumAskPricesEvent.parameters.push(
    new ethereum.EventParam(
      "maximumAskPrice",
      ethereum.Value.fromUnsignedBigInt(maximumAskPrice)
    )
  )

  return newMinimumAndMaximumAskPricesEvent
}

export function createNonFungibleTokenRecoveryEvent(
  token: Address,
  tokenId: BigInt
): NonFungibleTokenRecovery {
  let nonFungibleTokenRecoveryEvent = changetype<NonFungibleTokenRecovery>(
    newMockEvent()
  )

  nonFungibleTokenRecoveryEvent.parameters = new Array()

  nonFungibleTokenRecoveryEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  nonFungibleTokenRecoveryEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return nonFungibleTokenRecoveryEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRevenueClaimEvent(
  claimer: Address,
  amount: BigInt
): RevenueClaim {
  let revenueClaimEvent = changetype<RevenueClaim>(newMockEvent())

  revenueClaimEvent.parameters = new Array()

  revenueClaimEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  revenueClaimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return revenueClaimEvent
}

export function createTokenRecoveryEvent(
  token: Address,
  amount: BigInt
): TokenRecovery {
  let tokenRecoveryEvent = changetype<TokenRecovery>(newMockEvent())

  tokenRecoveryEvent.parameters = new Array()

  tokenRecoveryEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  tokenRecoveryEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return tokenRecoveryEvent
}

export function createTradeEvent(
  collection: Address,
  tokenId: BigInt,
  seller: Address,
  buyer: Address,
  askPrice: BigInt,
  netPrice: BigInt,
  withBNB: boolean
): Trade {
  let tradeEvent = changetype<Trade>(newMockEvent())

  tradeEvent.parameters = new Array()

  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "collection",
      ethereum.Value.fromAddress(collection)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "askPrice",
      ethereum.Value.fromUnsignedBigInt(askPrice)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "netPrice",
      ethereum.Value.fromUnsignedBigInt(netPrice)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("withBNB", ethereum.Value.fromBoolean(withBNB))
  )

  return tradeEvent
}
