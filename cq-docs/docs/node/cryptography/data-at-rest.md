---
id: data-at-rest
title: Data at rest
sidebar_label: Data at rest
---

## Protect data at rest

Threats to data stored on disk (databases and files).

- Confidentiality. Show the right data to the right people.
- Integrity. Prevent data changes by an unauthorized party.
- Availability. Data available when needed.

### Encrypt

Symmetric encryption. Encrypt when saved decrypt when reading. Symmetric encription relies on one key (protect well). 

Tools in node: cypher/dechiper
`crypto.createCipheriv` iv = initialization vector. That creates a cipher then we can call `update` and `final` to encrypt the data. Both functions can only be called once or they throw. Do not use crypto.createCipher (without iv), it's deprecated and not secure.

AES-256 algorithm

- aes Advanced Encryption Standard
- 256 bits of output
- cbc cipher block chaining. chop data in blocks and encrypt each block. <http://bitly/crypto-basics>

Generate a key for encryption with scrypt

```js
// CONFIG
// common variables
const crypto = require('crypto')
// AES-256 algorithm
const algorithm = 'aes-256-cbc'
const key = crypto.scryptSync('password', crypto.randomBytes(32), 32)
// create random initialization vector
const iv = crypto.randomBytes(16)

// ENCRYPT
// cipher
const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('111-000-0000', 'utf8', 'hex')
encrypted = cipher.final('hex')

// DECRYPT
// decipher
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted = decipher.final('utf8')
```

### Protect keys

Find a KMS. Store keys encrypted by a master key. Keys will be store in a "key store". Rotate keys. AWS kms, Azure key vault, vault (open source).

#### Vault

Master key is divided in pieces (shard) to be shared by different people/machines. With n shards the master key can be generated.

Authenticate with vault api with user+pass or certificates. Then request the key and connect to your db to decrypt or encrypt data.
