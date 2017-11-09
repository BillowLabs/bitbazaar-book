# Lifecycle of a Transaction

Here's a high level view of the steps in a cryptocurrency transaction and their primary functions.

 1. **Node State**
  * Requires client software for the cryptocurrency of choice
  * Wallet with the users key pairs (i.e. security keys)
  * Potentially some transactions (from broadcast, mining, etc.)
  <br/><br/>

 1. **Start Transaction**
  * Create a new transaction with currency, documents, etc.
  * Sign it with sender's security key
  * Save a copy of the transaction
 <br/><br/>

 1. **Send Transaction Across P2P Network**
  * Broadcast transaction across the network
  * Not every node may be involved in the initial broadcast
  * All node will *eventually* receive the transaction
  <br/><br/>

 1. **Other Nodes Receive Transaction**
  * Signature, accuracy, and validity (i.e not a "double-spend") are confirmed
  * If any checks fail, the transaction is entirely ignored
  * **If all checks pass**
      * Temporary copy of the transaction is saved
      * Transaction is rebroadcast to other nodes
      * If fee is low, rebroadcast may be slowed
      <br/><br/>
  * **Additionally: When Node is the Recipient**
      * Transaction appears in recipient's wallet - with 0 confirmations
      * Stays in this state until transaction is confirmed by Miner
      <br/><br/>
  * **Additionally: When Node is a Miner**
      * New Block is created
      * The Block is added to the Blockchain creating a Proof-of-Work
      * Coins are rewarded to the Miner
      * Confirmation is broadcast to the network
      <br/><br/>
  * **Transaction Complete!**
  <br/><br/>

 1. **More Transactions Are Processed**
  * The original transaction gets included as part of other confirmations
  * Each time, the original transaction gains another confirmation
  * At 6+ confirmations, it's considered "fully confirmed"
  <br/><br/>


  Alright, that's enough about *how* a transaction works, let's get to the fun stuff: *what* cryptocurrency IS!

 [Next: Core Aspects of Cryptocurrency](03-what_is_cryptocurrency.md) | [Previous](01-intro_to_cryptocurrency.md)
