# Playbook

## Asset Management

The Asset Management section is only accessible to the issuer administrator, who can write, modify and issue assets.

When creating an asset, you need to give it a name, define how many of them will be distributed, and choose the mode of emission. You can also automate assets based on predefined conditions.

Be careful: once you create an asset, you won't be able to go back.

The modification rights only apply to the asset code, the commercial label (which will be used by the mobile application), the logo, and the maximum balance granted to the end user.

When issuing an asset, you will need to specify the distributed quantity, the address from which the tokens are issued, and the beneficiary address(es) to which the digital asset is issued.

## Loyalty

Our product allows issuers to have complete control over their loyalty programs. They can set the percentage and maximum amount of the reward, as well as how long the program lasts. When customers make transactions using the trigger asset, they automatically receive the reward asset.

To create a loyalty program, issuers need to define the assets that will be used as rewards or triggers. They must choose an asset to credit as a loyalty asset and define the assets that will generate loyalty assets when used in a payment transaction. The program must have a name, and the issuer can also set amount thresholds.

It's important to note that the same asset can be used as both a reward and a trigger.

Issuers can modify various parameters of the loyalty program at any time, such as the program name, the reward asset, and the program's coverage period. They also have the power to delete the program whenever they want, with a double confirmation to ensure the necessary rights.

## Organisations

As an administrator, you have the power to manage organizations. You can quickly check out the list of all the organizations that exist, look up a specific one, get a closer look at the details of an organization, and with just a few clicks, create a brand new organization. 

## Wallets

Administrators have the ability to manage wallets on the platform. This includes viewing the list of wallets and accessing the details of the selected wallet. On the details page, administrators can close a wallet even if it still has funds. An encrypted static QR code can also be generated to prevent unauthorized scanning by another application. If needed, a dynamic QR code can be generated via API, allowing merchants to fill in the transaction amount before generating a QR code.

## Transactions

The product has different types of transactions:

- Cash-in: transactions from the Issuer to a user for purchasing
- Bills: transactions from a user to the acceptance network for merchant payment
- Cash-out: transactions from the acceptance network to the Issuer for reconciliation (see Cash-out)
- Blockchain transactions: Transactions of assets saved on the Blockchain, such as for purchasing, payment, cash-out, and P2P.

### Cash-in

This type of transaction allows the issuer to see the purchasing activity of end users. Deposits are made using fiat currency. After the purchase is complete, a blockchain transaction involving assets is carried out and linked to the deposit transaction. The issuer can easily find a specific cash-in transaction by searching for criteria like the cash-in transaction reference or the end-user wallet address.

### Bills

Merchants can use this module to get an overview of payment transactions with end users. When a payment is made, it's recorded on the blockchain and associated with the relevant asset deposit. Merchants can search for a payment transaction by its reference, the asset deposit used, or the payment status.

### Transactions

All transactions on the blockchain are those that have been successfully executed. The sender and merchant can find a specific transaction made on the blockchain by using the following information: :

- Blockchain transaction id
- Wallet address
- Transaction date (from, to)
- Asset
- Type
- Minimum quantity
- Maximum quantity
- Sender
- Receiver

### **Cash-out**

The **withdrawal process** is a feature that allows **full or partial transfer** of assets from merchant wallets to issuer wallets, for the purpose of reconciling outside of the application.


