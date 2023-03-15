# Playbook

Worldline's digital currency dashboard is a useful tool for managing custom assets. It provides all the necessary features for creating and issuing assets, as well as managing the participant network. Here are some of its key functionalities : 

## Asset Management

The Asset Management section is a feature that is accessible only to the issuer administrator, who has the ability to write, modify and issue assets. This means that the administrator is the only person who can make changes to the assets or distribute them.

When creating an asset, there are a few things that you need to keep in mind. First, you need to choose a name for your asset. The name should be unique and descriptive enough so that you can easily identify it later. Second, you need to decide how many of the assets you will distribute. This is an important decision, as it will determine how many people can get access to your asset. Lastly, you need to choose the method of issuance. This is the way in which the asset will be distributed to the end-users, and can be done either manually or automatically based on certain conditions.

It's important to note that once you create an asset, you won't be able to change it. This means that you should double-check all the details before finalizing the creation of an asset.

The modification rights only apply to certain aspects of the asset, such as the asset code, the commercial label (which will be used by the mobile application), the logo, and the maximum balance granted to the end user. 

When issuing an asset, you will need to specify the distributed quantity, the address from which the tokens are issued, and the beneficiary address(es) to which the digital asset is sent. This is important information that needs to be accurate in order for the asset to be successfully emitted.

## Loyalty

Our system offers a great degree of flexibility and customisation, allowing issuers to fully control their reward programs. Issuers can control the duration of the program as well as the reward's percentage and maximum through our platform. As a result, issuers can design loyalty programs that are tailored to their particular requirements and objectives, giving them a competitive edge in their industry..

To create a loyalty program, issuers need to define the assets that will be used as rewards or triggers. This is a crucial step, as the success of the program depends on the assets chosen. Issuers must choose an asset to credit as a loyalty asset and define the assets that will generate loyalty assets when used in a payment transaction. The program must have a name, which can be a simple or creative name, depending on the issuer's brand image. Additionally, the issuer can set amount thresholds, which can encourage customers to spend more to reach the threshold and receive the reward asset.

It's crucial to remember that a single asset can serve as both a trigger and a reward. This enables issuers to design more flexible loyalty programs that can encourage users to use particular resources more frequently.

The name of the loyalty program, the type of reward offered, and the duration of the program's coverage are just a few of the parameters that issuers can change at any time. As a result, they have the freedom to modify the program in response to shifting market dynamics and consumer trends. Also, with a double confirmation to verify the appropriate privileges, customers have the authority to delete the software whenever they choose. This ensures that issuers can adapt and succeed in their specific markets by giving them total control and autonomy over their loyalty programs.

## Organisations

As an administrator, you have the ability to manage organizations. You can easily view a list of all existing organizations, search for a specific one, examine an organization's details in more depth, and create a new organization with just a few clicks.

## Wallets

Administrators play an important role in managing wallets on the platform. In order to ensure the safety and security of user funds, administrators are given the ability to view the list of wallets and access the details of the selected wallet. Not only can they view these details, but they are also able to take important actions such as closing a wallet, even if it still has funds. This gives users the peace of mind that their wallets are being closely monitored and protected by the platform.

To further enhance security measures, an encrypted static QR code can be generated for each wallet. This helps to prevent unauthorized scanning by other applications, which could potentially compromise the safety of user funds. Meanwhile, if additional security measures are required, a dynamic QR code can be generated via API. This allows merchants to fill in the transaction amount before generating a QR code, ensuring that the correct amount is being transferred and reducing the risk of fraudulent activity on the platform. The platform is committed to providing a secure environment for all users, and administrators are a key part of achieving this goal.

## Transactions

The product has different types of transactions:

- Cash-in: transactions from the Issuer to a user for purchasing
- Bills: transactions from a user to the acceptance network for merchant payment
- Cash-out: transactions from the acceptance network to the Issuer for reconciliation (see Cash-out)
- Blockchain transactions: Transactions of assets saved on the Blockchain, such as for purchasing, payment, cash-out, and P2P.

### Cash-in

The issuer is able to monitor end users' purchasing behavior with this kind of transaction. Deposits are created with fiat money. A blockchain asset transaction involving the purchase's completion is then carried out and connected to the deposit transaction. By using search terms like the cash-in transaction reference or the end-user wallet address, the issuer can quickly locate a particular cash-in transaction.

### Bills

This module helps merchants see a summary of their payment transactions with customers. Whenever a payment is made, it's saved on the blockchain and linked to the right deposit. Merchants can look for a payment transaction using its reference, the deposit used, or the payment status.

### Transactions

On the blockchain, all transactions are those that have been successfully carried out. The following details can be used by the sender and merchant to locate a particular blockchain transaction :

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

![image](https://user-images.githubusercontent.com/126062813/223330859-e09eb465-84bf-4bea-a011-4890dde2b8ad.png)

*Withdrawal of Funds*

To withdraw funds, follow these steps:

### **Cash-out from Merchant**

On their dashboard, merchants can request a withdrawal from their wallets. Only assets with a balance have access to this option.

The instructions and the asset's withdrawal amount will show in a window.

A withdrawal request will be produced and forwarded to the issuer for approval once the merchant has confirmed the action. A blockchain transaction will be made after confirmation, and emails will be sent to both parties. The status of the withdrawal request will subsequently be changed to finalized.

### **Cash-out from Issuer**

The issuer can withdraw funds from their dashboard by clicking the withdrawal button. A window will appear with instructions for the process and the option to choose the asset(s) to be processed.

If the issuer agrees, transactions will be created to transfer the chosen assets from the merchant wallets to the issuer wallet. A withdrawal file will be generated for the issuer to pay merchants with regular currency outside the product. Emails will be sent to both the issuer and the other parties. The issuer will receive an email with a link to download the withdrawal file, while the other email will contain a list of transactions from the wallets.s.



