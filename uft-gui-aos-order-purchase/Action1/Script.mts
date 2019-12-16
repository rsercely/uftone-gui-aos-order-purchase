' The test Record and Run settings are set to run on any open browser.
' This means that you must have a browser open on an AOS home page. 
' It can be 
' 	the public AOS (http://advantageonlineshopping.com)
' 	Nimbus AOS, (http://nimbusserver.aos.com:8000/)
' 	or even one of the dev AOS sites. Wherever you have valid credentials.

' before running this action
' create an account in AOS
' change the value username/password to use your account
' reminder - you generate an ecrypted password with
' "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\bin\PasswordEncryption.exe"
' or change the password.SetSecure to password.Set and use an unencrypted password

' if you change the record and run settings to parameterize the browser you can use
' IE, CHROME, and FIREFOX64 have been verified.
' This is parameterized on the global sheet

' Shopping is parameterized on the local sheet


Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "<your user name>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set "<your clear password>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btnundefined")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu 2")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SignOut").Check CheckPoint("Login Successful") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf7.xml_;_
