# Getting Started Checklists
### TABLE OF CONTENTS
Registering for an Account and Initial Setup
Launching on Pi Mainnet
Special Considerations

## Registering for an Account and Initial Setup
1. Download the Pi App
- Google Play Store Link
- Apple App Store Link
2. Register for an account
    Use this Code to Sign Up
    This will get you 1 Pi
3. Download and Sign into the Pi Browser
    See our video tutorial to learn how to complete this
    Google Play Store Link
    Apple App Store Link
4. Verify Email Address - Required Prior to Step 5
Enter the Pi Mining App and click on the ‘☰’ in the top left corner.
Select the Profile option and confirm email address.
5. Register your App
Enter your App Name, App Description, and App’s Network
See our Pi Mainnet vs Testnet Page for more on selecting a network
6. Configure App Hosting
Either setup hosting through a third-party provider or host it on Pi Network’s Pi Engine.
Note: All hosting on Pi Network will undergo a brief manual review, but you can continue setting up the app during this waiting period. If approved, the project will be added to your Gitlab Account.
7. Create Wallet
Create a wallet at wallet.pi. Before continuing to the next step, you must confirm access by opening the wallet you created.
8. Read documentation and Code App
Note: If you don’t want to start from scratch or if you are part of a hackathon, you can use our demo to test the process and use it as a starting point for your own app.
9. Configure your App’s Development URL
Enter the URL that the app will be accessed from on your local host, while running in the sandbox mode.
Note: This is not the user facing (Production URL) accessed on the web.
10. Run your development App in the sandbox
First, set sandbox flag to “true” within your FE app code. Copy URL from dev portal and paste in your desktop browser. Enter the provided code in the utilities page of your Pi Mining App, found in the hamburger menu on the top left. Your browser will now be in sandbox mode and connected to your pi account.
11. Deploy your app in a production environment
Enter the desired Production URL. This is the URL the app will be accessible from within the pi browser.
12. Validate Domain Ownership
Prove ownership of your domain by adding the provided validation key to a .txt file named ‘validation-key.txt’ and place it on your hosting domain. Click on the step to get your validation key and URL to place the file.
13. Process a transaction on your app
Have your app process a User-to-App Pi Transaction to confirm you have successfully connected to the Pi Ecosystem.

## Launching on Pi Mainnet
Complete the steps above before proceeding
1. Obtain a Mainnet Wallet
Pi KYC is required
Slots to apply are currently sent on an invitation basis
The wallet address of the Pioneer who registers the Developer Portal project will be used for all mainnet transfers associated with the app.
2. Create a Developer Portal Project directed at the Pi Mainnet
3. Verify App URL
URL cannot match the URL that is verified of another Developer Portal Project
If adjusting the URL of another Developer Portal Project then you must verify a new URL on the other project prior to being able to reuse that URL on another project.
4. Generate API Key
API calls will fail if the API Key from a Testnet application is not updated
This will cause Payment failures
5. Launch App and test Pi Mainnet functionality

## Special Considerations
To process payments successfully on Pi Mainnet a wallet that has received a migration is required
Maintain compliance with the Developer Terms of Service