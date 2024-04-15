// Adjusted connectWallet function to use MetaMask
async function connectWallet() {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Requesting access to user accounts
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            // Retrieving the selected account
            const selectedAccount = accounts[0];
            console.log("Connected account:", selectedAccount);
            // Perform further actions here after wallet connection
            // For example, update UI to indicate wallet connection
        } catch (error) {
            console.error("Error connecting MetaMask:", error);
        }
    } else {
        console.error("MetaMask is not installed");
    }
}
// Function to check if an address is allowlisted
async function checkAllowlistLevel(address) {
    try {
        // Call the allowlisted function to get the whitelist level
        const whitelistLevel = await contractInstance.methods.allowlisted(address).call();
        
        // Determine the whitelist level based on the returned value
        let level = "";
        switch (whitelistLevel) {
            case 1:
                level = "Level 1";
                break;
            case 2:
                level = "Level 2";
                break;
            case 3:
                level = "Level 3";
                break;
            case 4:
                level = "Level 4";
                break;
            case 5:
                level = "Level 5";
                break;
            case 6:
                level = "Level 6";
                break;
            case 7:
                level = "Level 7";
                break;
            default:
                level = "Not on whitelist";
        }
        
        // Display the whitelist level
        document.getElementById('whitelist-level').innerText = level;
    } catch (error) {
        console.error('Error checking whitelist level:', error);
    }
}

document.getElementById('check-whitelist-level').addEventListener('click', async () => {
    // Get the address input value
    const addressInput = document.getElementById('address-input').value;
    // Call the function to check whitelist level
    await checkAllowlistLevel(addressInput);
});

});


