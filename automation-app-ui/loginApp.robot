*** Settings ***
Library                                    AppiumLibrary
Suite Setup                                Open the App
Suite Teardown                             Close the App

*** Variables ***
${timeout}                                 20
${buttonLogin}                             appCompatButtonLogin
${emailfieldtext}                          textInputEditTextEmail
${passwordFieldText}                       textInputEditTextPassword
${successText}                             xpath=//android.widget.TextView[@text='Android NewLine Learning']
${errorMessageInvalidEmail}                xpath=//android.widget.TextView[@text='Enter Valid Email']
${errorMessageInvalidPassword}             xpath=//android.widget.TextView[@text='Wrong Email or Password']

*** Keywords ***

Open the App
    Open Application                       http://localhost:4723/wd/hub      platformName=Android      deviceName=emulator-5554            	app=C:\\Users\\siomi\\Downloads\\app.apk       noReset=true

User On Login Screen
    Wait Until Page Contains Element        ${buttonLogin} 

Input email address
    Wait Until Element Is Visible           ${emailFieldText}            timeout=${timeout}
    Click Element                           ${emailFieldText}
    Input Text                              ${emailFieldText}            sheilayovani@gmail.com
    Press Keycode                           4

Input invalid email address
    Wait Until Element Is Visible           ${emailFieldText}            timeout=${timeout}
    Click Element                           ${emailFieldText}
    Input Text                              ${emailFieldText}            ahsjdkl
    Press Keycode                           4

Input password
    Wait Until Element Is Visible           ${passwordFieldText}         timeout=${timeout}
    Click Element                           ${passwordFieldText}
    Input Text                              ${passwordFieldText}         sheila123
    Press Keycode                           4

Input invalid password
    Wait Until Element Is Visible           ${passwordFieldText}         timeout=${timeout}
    Click Element                           ${passwordFieldText}
    Input Text                              ${passwordFieldText}         asdfasdf123
    Press Keycode                           4

Clear email field text
    Clear Text                              ${emailFieldText}

Click button login on Login screen
    Wait Until Page Contains Element        ${buttonLogin}
    Click Element                           ${buttonLogin}

User login to the application successfully
    Wait Until Page Contains Element        ${successText}
    Sleep                                   2 seconds
    Press Keycode                           4

User will see error message under Email and can not login to the app
    Wait Until Page Contains Element        ${errorMessageInvalidEmail}

User will see error message the bottom of screen and can not login to the app
    Wait Until Page Contains Element        ${errorMessageInvalidPassword}

Close the App
    CLose Application

* Test Cases *
User login to the application successfully
    Given User On Login Screen
    When Input email address
    And Input password
    And Click button login on Login screen
    Then User login to the application successfully

User can not login with invalid email
    Given User On Login Screen
    When Input invalid email address
    And Input password
    And Click button login on Login screen
    User will see error message under Email and can not login to the app

User can not login with invalid password
    Given User On Login Screen
    When Clear email field text
    And Input email address
    And Input invalid password
    And Click button login on Login screen
    Then User will see error message the bottom of screen and can not login to the app
