# uftone-gui-aos-order-purchase

## Summary
This UFT script logs in to AOS; shops; completes the purchase; logs out

## UFT One features included in the test
* Cross browser testing
* Multiple Actions
* Global and Local datasheets
* Shared Object Repository
* Database outputs and Database checkpoints
## Discussion
## Required actions if you are not running on Nimbus
UFT database checkpoints require a 32-bit ODBC connection. Within this repository, in addition to the test, there is a word document:
"Setting Up ODBC for AOS.docx"
that contains instructions on how to install the necessary software which is also included in the repository.
### Business Process
1. Logs in using values on the global sheet
2. Shops and purchases - as many times as there are lines in the local sheet
3. Logs out

The test Record and Run settings are set to run from a parameterized browser on the global sheet. Login credentials are also stored on the global sheet.

You might find that it runs best if you have no browsers open before replaying

This test can be run on: 
* 	the public AOS (http://advantageonlineshopping.com)
* 	Nimbus AOS, (http://nimbusserver.aos.com:8000/)
* 	or even one of the dev AOS sites. 

wherever you have valid credentials.

However - the database checkpoints/outputs will only work on NimbusAOS, so comment them out if you use a different environment

## Required actions before running this test
**Note! This test was created with version 15 of UFT. Because v15 uses a .xlsx datasheet, this test will not run on earlier versions without you making modifications.**
1. create an account in the desired AOS environment
2. change the value username/password in the Global sheet to use your account
3. Ensure that your cart is empty

Currently the script uses unencrypted passwords. To use encrypted:

Run:
"C:\Program Files (x86)\Micro Focus\Unified Functional Testing\bin\PasswordEncryption.exe"
and change the password method from Set to SetSecure to password.

Also - the test is a bit more stable if you have nothing in the username shopping cart, as it is cached

##### Prior to UFT renaming in 2019 was called uft-gui-aos-order-purchase
