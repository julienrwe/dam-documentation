# Playbook

Worldline's digital currency dashboard is a helpful tool for managing custom assets. It includes all the features you need to create and issue assets, as well as manage the participant network. Here are some of its main functions : 

## Asset Management

The asset management section is a resource for administrators to create, modify, delete, and issue assets.

To create an asset, follow these steps:

- Choose a unique and descriptive name
- Determine the amount of the asset you want to distribute
- Choose a method to distribute the asset to end users, either manually or automatically based on certain conditions

## Loyalty

Our system offers great flexibility and customization to issuers to fully control their loyalty programs. Issuers can control the duration, percentage, and maximum reward through our platform to design programs tailored to their specific needs and goals, thus gaining a competitive advantage.

## Organisations

As an admin, you can manage organizations. You can see all organizations, find a specific one, view more details, and create a new organization with just a few clicks.

## Wallets

Administrators play a significant role in safeguarding the platform's wallets through their monitoring and fund protection methods. To enhance security, a static encrypted QR code can be generated for each wallet, preventing unauthorized apps from scanning the code and compromising the safety of users' funds. In case more security is deemed necessary, an API can be utilized to generate a dynamic QR code. Retailers can input the transaction amount before generating the QR code, reducing the risk of fraud. 

## Transactions

The product has different ways to move assets around :

- Cash-in: transactions from the Issuer to a user for purchasing
- Bills: transactions from a user to the acceptance network for merchant payment
- Cash-out: transactions from the acceptance network to the Issuer for reconciliation
- Blockchain transactions: Transactions of assets saved on the Blockchain, such as for purchasing, payment, cash-out, and P2P.

During **cash-in**, the issuer processes the purchasing behavior monitoring of end-users. Deposits are changed into fiat money, which is subsequently changed into an equal number of distributed token units.

**To transact using the acceptance network, tokens are required**. The blockchain keeps track of and records every token transaction.

The merchant can ask for **a partial or full withdrawal of the assets in their wallet** once a particular quantity of assets have been added to it. 
This option is only available to assets that have a balance.

A **withdrawal request** will be produced and transmitted to the issuer for approval once the merchant confirms the action.

If the issuer agrees, transactions will be created to transfer the selected assets from the merchants' wallets to the issuer's wallet. A withdrawal file will be generated so that the **issuer can pay the merchants with regular currency outside of the product**.

![image](https://user-images.githubusercontent.com/126062813/223330859-e09eb465-84bf-4bea-a011-4890dde2b8ad.png)





