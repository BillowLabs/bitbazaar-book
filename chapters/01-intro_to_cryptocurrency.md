# An Intro to Cryptocurrency
When learning about cryptocurrency, rather than starting with *what*, it's easiest to start with *why*. So let's start with the following question:

**How would you create a digital system where individuals could exchange cash?**

You would need to:

 * Support accounts, balances, and transactions
 * Determine if a transaction is legitimate
 * Prevent forgery and theft

For instance, your Bank is responsible for maintaining information about your accounts and transactions; while attempting to ensure that those transactions are secure and legitimate. It stores all of this information in a database that is the governing authority about the state of your account.

Wouldn't the same have to be true of a digital system for cash?

In the 90's there were a few people that created systems that did exactly that - but none of them were widely adopted. We can speculate about all the reasons why, but it's clear that at least part of the reason was the need for this centralized trusted third party to be accepted by all parties.

### Could we eliminate the need for a trusted *third party*?

We'd have to create a system where each individual (or peer) was responsible for maintaining a list of all accounts and transactions in the system. Before 2008, it was widely believed that this sort of decentralized digital cash system was a pipe dream. How could you possibly ensure that all of the peers in the network correctly and quickly maintained accounts? How could transactions be secured if no one has the authority to approve transactions? How would you prevent double-spending? If even one peer was in disagreement about the smallest amount, the whole system would be invalid.

### Enter: Satoshi Nakamoto.

Satoshi believed that not only was decentralization possible, it was critical to creating a digital cash system that would be fast, reliable, and widely adopted. He believed that this reliance on trusted third parties is why digital cash systems were failing and set out to solve the problem. So he created **BitCoin**, but *how* did he do the impossible?

### The genius behind cryptocurrency is *Blockchains*.

We hear a lot about the currency or "coin" aspect of cryptocurrencies, but it's really blockchains that make distributed systems like Bitcoin possible. A blockchain is basically a digital ledger of transactions that can only be changed if you fulfill certain conditions. Blockchains are what allow each peer in the network to know the state of the entire system, and to trust that the information they have is correct and accurate. But that's only half the story, because without peer-to-peer networks, we'd have a solution for a distributed ledger but no way to distribute it.

### Use *Peer-to-Peer* networks to distribute information.

That's right, Peer-to-Peer networks. You know ... the networks that people use for file sharing of music, movies, and software? By leveraging Peer-to-Peer networks peers can easily achieve consensus about accounts and transactions throughout the entire system every time a transaction occurs. And while every actor in the entire network has a complete history of all transactions, only certain actors on the network can confirm new transactions ensuring the ledger is maintained.

### And thus, *Miners* are born.

Someone on the network needs to be responsible for taking transactions, approving them, and sharing them throughout the network; adding them to the blockchain. These peers are called miners. However, as anyone on the network can be a miner and because there is no authority on who can grant permission or prevent a miner from abusing their role, the system also needs some way to securely approve transactions where authority is inherent in the process rather than explicitly granted.

### *Cryptography* to the rescue!

In order to confirm a transaction, a Miner must first preform a large mathematical operation that involves individual security keys provided as part of the transaction to find a hash. This hash or Proof-of-Work, is what grants the miner the ability to add the new block to the blockchain and confirm the transaction. So, Math and Cryptography - not a central authority - approve the transaction. As you can imagine, this calculation is not "free" and requires the peer to invest some amount of computer time. Additionally, as the system grows, the amount of power needed to do cryptographic calculation increases. So why would anyone on the network offer up their computer to be a Miner?

### Pay them with *Coins*.

In the process of confirming a transaction, a Miner also has the right to add an additional transaction that generates a specific number of "coins" and grants them to the Miner. This is the only way cryptographic coins can be created. These coins have real value as they represent the time, energy, and work put in to confirming a transaction. These coins are what we refer to as cryptocurrency.

<br/>

So now that you understand *why* cryptocurrencies were invented, we can go a bit deeper down the rabbit hole and talk about the flow of a transaction.

[Next: Lifecycle of a Transaction](02-lifecycle_of_a_transaction.md) | [Previous](../index.md)
