---
id: mfa
title: MFA
sidebar_label: MFA
---

## Two factor auth

A factor is a method for identifying someone like password, token (physical object) or biometrics.

Time-based OTP. A secret (usually qr) is sent to the client (smartphone) and is used to generate tokens based on time (change fast). That token is used when authenticating.

## MFA Implementation

Using speakeasy and qrcode packages.

```js
// generate secret with speakeasy
const secret = speakeasy.generateSecret()
// generate qr based on secret and send it to the user
// data_url is the url of the image
qrcode.toDataURL(secret.otpauth_url, (err, data_url) => {})
// get the token from the user and validate with speakeasy
const verified = speakeasy.totp.verify({secret, encoding, token})
// when verified, store the secret in the user model
```
