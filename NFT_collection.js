
let nftcollect = [];
//array that holds all the NFTs

function mintNFT(name,artist,artform,image,scene,rarity){
    let nft = {
        name : name,
        artist : artist,
        artform : artform,
        image : image,
        scene : scene,
        rarity : rarity
    };
    //nft is an object, where properties like name, artist etc are passed as parameters.
    nftcollect.push(nft);
    //push appends the nft to the nftcollect array therefore storing it.
}
// This mintNFT function contains an object called nft which stores various details about the nft.
function listNFTs() {
    for (var i = 0; i < nftcollect.length; i++) {
        console.log("The Metadata for NFT " + (i + 1) + " is as follows:");
        console.log("Name: " + nftcollect[i].name);
        console.log("Artist: " + nftcollect[i].artist);
        console.log("Artist: " + nftcollect[i].artform);
        console.log("Image: " + nftcollect[i].image);
        console.log("Description: " + nftcollect[i].scene);
        console.log("Description: " + nftcollect[i].rarity);
    }
}

//this function prints all the nfts stored in the nftcollect array using a for loop.
function getTotalSupply(){
    return nftcollect.length;
}

mintNFT("Taj Mahal", "Prakhar","Architecture", "tajmahal.png","A majestic view of the Taj Mahal at sunrise.",  "Rare\n", );
mintNFT("Yamuna River", "Ananya","Photography","ganges.png","A serene view of the Yammuna River during evening aarti.","Unique\n" );
mintNFT("Kathak Dance", "Sneha","Performing Arts","kathak.png", "A graceful pose of a Kathak dancer.",  "Legendary\n", );
//some Entries into the MintNFTs functions by adding Nfts

// make function calls to listNFTs and getTotalSupply functions to show proper functioning of the program
console.log("Total number of NFTs is -> "+getTotalSupply());
listNFTs();
