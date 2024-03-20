const express = require('express');
const router = express.Router();
const solanaweb3 = require("@solana/web3.js");

const { Connection, PublicKey, Keypair, SystemProgram, Transaction, TransactionInstruction, clusterApiUrl,
    LAMPORTS_PER_SOL, sendAndConfirmTransaction
} = require('@solana/web3.js');
const SOLANA_CONNECTION = new Connection(clusterApiUrl('devnet'));
const bs58=require("bs58");
const connect=new Connection('https://nd-137-206-712.p2pify.com/c1477e70d6688d2adfd5d3bf4824882e');
const privateKeyString = '56qtSkEYm7jF5gwWyCzwN1svsWpRsfzTU33i5thzyeCZkcGue1iZhKgKtADq1QEHBeXrZFboUzK8s2sk4GX8dKx6';
const privateKeyBytes = bs58.decode(privateKeyString);
const privateKey = new Uint8Array(privateKeyBytes);
const privateKeyString2 = '5s7hoBNj5NW3j4aYb7YZNDj2A66vdZVTNuY8jsP7DC1wmZj6QZYak2yTegJeo4iUA7ChgXmSqFU9ocmXuGhZqCKE';
const privateKeyBytes2 = bs58.decode(privateKeyString);
const privateKey2 = new Uint8Array(privateKeyBytes);
router.get('/', async function (req, res, next) {
const account=Keypair.fromSecretKey(privateKey);
const account2=Keypair.fromSecretKey(privateKey2);
    connect.getVersion()
        .then((version) => {
            console.log('Kết nối thành công với Solana network');
            console.log('Phiên bản Solana node:', version['solana-core']);
        })
        .catch((error) => {
            console.error('Lỗi kết nối đến Solana network:', error);
        });
try{
    const  transaction=new Transaction().add(
      SystemProgram.transfer({
          fromPubkey:account.publicKey,
          toPubkey: account2.publicKey,
          lamports: LAMPORTS_PER_SOL *0.01,
      }),
    );
    const signature= await sendAndConfirmTransaction(
        connect,
        transaction,
      [account],
    );
}catch (e) {
    
}

    res.render('index', {title: 'Express'});
});

router.post('/mint', async function(req, res, next) {
    const walletAddress = req.body.walletAddress;
    const AIRDROP_AMOUNT = 1 * LAMPORTS_PER_SOL; // 1 SOL

    console.log(`Requesting airdrop for ${walletAddress}`);

    // 1 - Request Airdrop
    const signature = await SOLANA_CONNECTION.requestAirdrop(
        new PublicKey(walletAddress),
        AIRDROP_AMOUNT
    );

    // 2 - Fetch the latest blockhash
    const { blockhash, lastValidBlockHeight } = await SOLANA_CONNECTION.getLatestBlockhash();

    // 3 - Confirm transaction success
    await SOLANA_CONNECTION.confirmTransaction(
        {
            blockhash,
            lastValidBlockHeight,
            signature
        },
        'finalized'
    );

    // 4 - Log results
    console.log(`Tx Complete: https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    res.redirect("/");
    res.sendStatus(200);
});


// const senderPrivateKey = req.body.senderPrivateKey;
// const recipientPrivateKey = req.body.recipientPrivateKey;
async function transferTokens(recipientPublicKey, amount) {
    // Establish connection to the Solana network
    const connection = new Connection('https://api.devnet-beta.solana.com');

    // Create the Phantom wallet adapter
    const walletAdapter = new PhantomWalletAdapter();

    // Connect the wallet adapter
    await walletAdapter.connect();

    // Get the public key of the connected wallet
    const senderPublicKey = walletAdapter.publicKey;

    // Check the sender's account balance
    const senderAccountInfo = await connection.getAccountInfo(senderPublicKey);
    if (!senderAccountInfo) {
        throw new Error('Sender account not found');
    }

    // Create a Transaction object
    const transaction = new Transaction();

    // Add a transfer instruction to the transaction
    transaction.add(
        SystemProgram.transfer({
            fromPubkey: senderPublicKey,
            toPubkey: new PublicKey(recipientPublicKey),
            lamports: amount, // Amount in lamports (1 SOL = 1,000,000,000 lamports)
        })
    );

    // Sign the transaction
    const signedTransaction = await walletAdapter.signTransaction(transaction);

    // Send the signed transaction
    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    console.log('Transaction sent:', signature);
}

// Example usage
// const recipientPublicKey = '5s7hoBNj5NW3j4aYb7YZNDj2A66vdZVTNuY8jsP7DC1wmZj6QZYak2yTegJeo4iUA7ChgXmSqFU9ocmXuGhZqCKE';
// const amount = 1000000000; // 1 SOL = 1,000,000,000 lamports
//
// transferTokens(recipientPublicKey, amount)
//     .then(() => {
//         console.log('Transaction completed successfully');
//     })
//     .catch((error) => {
//         console.error('Transaction failed:', error);
//     });
router.post('/transaction', async function(req, res, next) {

});
module.exports = router;
