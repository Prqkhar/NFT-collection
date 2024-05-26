# NFT-collection
The program is a simple implementation of an NFT (Non-Fungible Token) management system using JavaScript. It allows the creation, storage, and listing of NFTs along with retrieving the total number of NFTs created. Here's a detailed description of the program:

Components of the Program

**Variable to Hold NFTs:**
A variable nftcollect is defined as an empty array. This array will store all the NFT objects created by the user.

**mintNFT Function:**
This function is responsible for creating new NFTs. It takes four parameters: name, artist, description, and image.
It creates an NFT object using these parameters and then adds this object to the nftcollect array.

**listNFTs Function:**
This function iterates over the nftcollect array and prints the metadata of each NFT to the console.
It uses a for loop to access each NFT in the array and logs the name, artist, description, and image properties of each NFT.

**getTotalSupply Function:**
This function returns the total number of NFTs created by returning the length of the nftcollect array.

**Function Calls:**
After defining the functions, the program calls mintNFT to create some example NFTs.
It then calls listNFTs to list all the created NFTs and their metadata.
Finally, it calls getTotalSupply and prints the total number of NFTs to the console.
