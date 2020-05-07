---
id: data-in-transit
title: Data in transit
sidebar_label: Data in transit
---

Data on the wire.

Threats:

- Lose confidentiality. Attacker accessing the data (read or change) while the data is in transit. Man-in-the-middle attack.
- Impersonation. Verify the identity of the other end of the communication.

Asymmetric encription -> encrypt with one key, decrypt with another key (public/private key pair) For solving impersonation.

HMAC -> hash based message authentication code. Hashes the data and sends it, then the receiver hashes anc compares. For knowing if data was changed.

Digital signatures -> hashing + asymmetric encryption. Big part of the PKI (backbone of https)

### Implementation

Diffie Hellman key exchange. How to generate a shared secret over a public channel.

`crypto.createDiffieHellman` creates a diffiehellman object and takes the number of bits of the key as param. (asymetric keys should be larger than symmetric). On the diffihellman object we can call `generateKeys()` to get the keys. For generating bob we use the prime number and the generator from alice. When we have both keys we can generate the shared secret.

The shared values over the channel are the prime and the generator numbers and the computed public key.

```js
const crypto = require('crypto')

const alice = crypto.createDiffieHellman(2048)
const aliceKey = alice.generateKeys()

const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator())
const bobKey = bob.generateKeys()

// Generate the shared secret both will be equal
const aliceSecret = alice.computeSecret(bobKey)
const bobSecret = bob.computeSecret(aliceKey)
```

also useful: `crypto.generateKeyPair()`

HMAC. `crypto.createHmac()` with the algoritm and a secret (shared between both parties) then update it with data and calculate the signedhash with `digest()`. Now we can send the data along with the signedhash. Then Bob can calculate a signed hash with the same secret and compare.

```js
const crypto = require('crypto')
const hmac = crypto.createHmac('sha256', 'secret')
hmac.update('some data to be hashed')
const signedHash = hmac.digest('hex')
```

### HTTPS

Asymmetric encryption for exchanging keys and symmetric encryption for messages.
