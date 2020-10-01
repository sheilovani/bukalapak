Flaky Test

1. What is a flaky test?
2. An element in a website is using ajax/javascript to show the data (processed as asynchronous). What do you do to test that element?
3. A website page can only be accessed with CAPTCHA. How do you test that page?

Answer : 
1. A flaky test is a test which could fail or pass for the same configuration without any code changes.
2. Using async await in automation code.
3. For reCAPTCHA v3, create a separate key for testing environments.
   For reCAPTCHA v2, use the following test keys:
      a. Site key: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
      b. Secret key: 6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
