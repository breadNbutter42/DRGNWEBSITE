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

        } catch (error) {
            console.error("Error connecting MetaMask:", error);
        }
    } else {
        console.error("MetaMask is not installed");
    }
}
