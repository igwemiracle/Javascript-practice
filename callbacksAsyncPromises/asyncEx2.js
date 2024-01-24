// Simulating an asynchronous function that fetches user data
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an API request delay
        setTimeout(() => {
            // Simulating success or failure
            if (userId <= 5) {
                resolve({ userId, username: `user${userId}`, email: `user${userId}@example.com` });
            } else {
                reject(new Error('User not found'));
            }
        }, 1000); // Simulating a 1-second delay
    });
}

// An asynchronous function using async/await to fetch user data
async function getUserDetails(userId) {
    try {
        console.log('Fetching user details...');
        const userData = await fetchUserData(userId);
        console.log('User details received:', userData);
        return userData;
    } catch (error) {
        console.error('Error fetching user details:', error.message);
        throw error; // Re-throwing the error for further handling
    }
}

// Example usage of the asynchronous function
async function main() {
    try {
        const user1Details = await getUserDetails(1);
        const user3Details = await getUserDetails(3);
        const nonExistentUserDetails = await getUserDetails(10); // This will trigger an error

        console.log('All user details fetched successfully!');
    } catch (error) {
        console.error('Main error handling:', error.message);
    }
}

// Calling the main function
main();
