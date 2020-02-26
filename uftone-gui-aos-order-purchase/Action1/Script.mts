' The test Record and Run settings are set to run from a parameterized browser on the global sheet
' You might find that it runs best if you only have no browsers open before replaying
'
' This test can be run on: 
' 	the public AOS (http://advantageonlineshopping.com)
' 	Nimbus AOS, (http://nimbusserver.aos.com:8000/)
' 	or even one of the dev AOS sites. Wherever you have valid credentials.
'
' However - the database checkpoints/outputs will only work on NimbusAOS, so comment them out if you use a different environment
'
' before running this action
' create an account in AOS
' change the value username/password in the Global sheet to use your account
' reminder - you generate an ecrypted password with
' "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\bin\PasswordEncryption.exe"
' or change the password.SetSecure to password.Set and use an unencrypted password
'
' Also - the test is a bit more stable if you have nothing in the username shopping cart, as it is cached
'
' if you change the record and run settings to parameterize the browser you can use
' IE, CHROME, and FIREFOX64 have been verified.
' This is parameterized on the global sheet

' Shopping is parameterized on the local sheet

Browser("Advantage Shopping").Navigate "http://nimbusserver.aos.com:8000/#/"
Browser("Advantage Shopping").Page("Advantage Shopping").Link("User Menu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set DataTable("UserName", dtGlobalSheet) '"<your user name>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set DataTable("Password", dtGlobalSheet) '"<your clear password>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btnundefined")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("User Menu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu 2")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign Out").Check CheckPoint("Login Successful") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf7.xml_;_
