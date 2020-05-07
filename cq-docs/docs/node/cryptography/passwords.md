---
id: passwords
title: Passwords
sidebar_label: Passwords
---

Passwords are susceptible to:

- Dictionary atacks, people choose poor passwords with common words.
- Credential stuffing, caused by using the same password in multiple websites.
- Data breaches, they make passwords public.

Hashing is the best way to protect passwords. Hashes are randomized, one way functions. Not all hash algorithms are secure, for example MD5 is now weak and should not be used for passwords. MD5 has a small output and does is not well protected against collisions.

The crypto module has a createHash function that accepts the hashing algorithm, then with the update method we provide the password and finally calling digest will compute the hash. digest and update can only be called once per instance of the hash.

```js
const crypto = require('crypto')
const hash = crypto.createHash('md5')
hash.update('pass')
const hashedPassword = hash.digest('hex')
```

A rainbow table is a db with all possible hash values to common strings.

sha(256) is longer and better protected but the rainbow table is still a problem.

### Good algorithms

From best to worst

- Argon2, (academically) new and not well integrated in node yet
- PBKDF2, good for enterprices
- scrypt
- bcrypt based on blowfish

### Salt

Salt is a random value added to the hash computation. Every hash need a different salt. Same passwords will have different hashes and thus, removing the rainbow table problem.

Salts can be generated with randomBytes, that returns a random buffer. Then we can use pbkdf2Sync (or async) to generate a hash with PBKDF2. Third parameter is the number of iterations. The returned hash is returned as a buffer.

```js
const crypto = require('crypto')
const password = 'pass'
const salt = crypto.randomBytes(256).toString('hex')
const hashedPassword = crypto.pbkdf2Sync(password, salt, 100000, 512, 'sha512')
```

Always store passwords hashed with a salt.
