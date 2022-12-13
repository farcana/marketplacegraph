import {
  AskCancel as AskCancelEvent,
  AskNew as AskNewEvent,
  AskUpdate as AskUpdateEvent,
  CollectionClose as CollectionCloseEvent,
  CollectionNew as CollectionNewEvent,
  CollectionUpdate as CollectionUpdateEvent,
  NewAdminAndTreasuryAddresses as NewAdminAndTreasuryAddressesEvent,
  NewMinimumAndMaximumAskPrices as NewMinimumAndMaximumAskPricesEvent,
  NonFungibleTokenRecovery as NonFungibleTokenRecoveryEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RevenueClaim as RevenueClaimEvent,
  TokenRecovery as TokenRecoveryEvent,
  Trade as TradeEvent
} from "../generated/ERC721NFTMarketV1/ERC721NFTMarketV1"
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
} from "../generated/schema"

export function handleAskCancel(event: AskCancelEvent): void {
  let entity = new AskCancel(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAskNew(event: AskNewEvent): void {
  let entity = new AskNew(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.askPrice = event.params.askPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAskUpdate(event: AskUpdateEvent): void {
  let entity = new AskUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.seller = event.params.seller
  entity.tokenId = event.params.tokenId
  entity.askPrice = event.params.askPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionClose(event: CollectionCloseEvent): void {
  let entity = new CollectionClose(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionNew(event: CollectionNewEvent): void {
  let entity = new CollectionNew(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.creator = event.params.creator
  entity.whitelistChecker = event.params.whitelistChecker
  entity.tradingFee = event.params.tradingFee
  entity.creatorFee = event.params.creatorFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectionUpdate(event: CollectionUpdateEvent): void {
  let entity = new CollectionUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.creator = event.params.creator
  entity.whitelistChecker = event.params.whitelistChecker
  entity.tradingFee = event.params.tradingFee
  entity.creatorFee = event.params.creatorFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewAdminAndTreasuryAddresses(
  event: NewAdminAndTreasuryAddressesEvent
): void {
  let entity = new NewAdminAndTreasuryAddresses(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.admin = event.params.admin
  entity.treasury = event.params.treasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewMinimumAndMaximumAskPrices(
  event: NewMinimumAndMaximumAskPricesEvent
): void {
  let entity = new NewMinimumAndMaximumAskPrices(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minimumAskPrice = event.params.minimumAskPrice
  entity.maximumAskPrice = event.params.maximumAskPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNonFungibleTokenRecovery(
  event: NonFungibleTokenRecoveryEvent
): void {
  let entity = new NonFungibleTokenRecovery(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevenueClaim(event: RevenueClaimEvent): void {
  let entity = new RevenueClaim(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.claimer = event.params.claimer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRecovery(event: TokenRecoveryEvent): void {
  let entity = new TokenRecovery(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTrade(event: TradeEvent): void {
  let entity = new Trade(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.collection = event.params.collection
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.askPrice = event.params.askPrice
  entity.netPrice = event.params.netPrice
  entity.withBNB = event.params.withBNB

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
