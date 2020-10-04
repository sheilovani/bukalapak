* Settings *
Library    Selenium2Library

* Variables *
${browser}            chrome
${url}                https://www.bukalapak.com/
${buttonLogin1}       class:te-header-login
${inputUsername}      user_session_username
${inputPassword}      user_session_password
${buttonLogin2}       class:js-btn-menu-login
${iconCart}           xpath=//a[@href="/cart/carts?from=nav_header"]

* Keywords *
Open Landing page
    Open Browser                            ${url}                  ${browser}

Click button login on Landing page
    Click Link                              ${buttonLogin1}

User view Login page
    Wait Until Page Contains Element        ${inputUsername}

Input username
    Input Text                              ${inputUsername}       sheilayovani@gmail.com

Input password
    Input Text                              ${inputPassword}       sheila123

Click button login on Login page
    Click Button                            ${buttonLogin2}

User login Bukalapak successfully
    Wait Until Page Contains Element        ${iconCart}

* Test Cases *
User wants to login to Bukalapak website
    Gven Open Landing page
    When Click button login on Landing page
    And User view Login page
    And Input username
    And Input password
    And Click button login on Login page
    Then User login Bukalapak successfully