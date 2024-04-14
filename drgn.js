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
async function checkAllowlist(address) {
    try {
        // Check if the address is allowlisted
        const isAllowlisted = await contractInstance.methods.allowlisted(address).call();
        // Display message based on allowlist status
        if (isAllowlisted) {
            document.getElementById('whitelist-result').innerText = "WooHoo! You're allowlisted";
        } else {
            document.getElementById('whitelist-result').innerText = "Womp womp. You're not allowlisted";
        }
    } catch (error) {
        console.error('Error checking allowlist:', error);
    }
}

// Add event listener to the check button for the whitelist tab
document.getElementById('whitelist-check-submit').addEventListener('click', async () => {
    // Get the address input value
    const addressInput = document.getElementById('whitelist-address-input').value;
    // Call the allowlist checker function
    await checkAllowlist(addressInput);
});


