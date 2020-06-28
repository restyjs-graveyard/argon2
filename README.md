# @restyjs/argon2
Password hashing and validation module for resty.js.

```typescript
import { hash, verify } from "@restyjs/argon2";

// hash plain password
const result = await hash("foobar");

// verify password
const isVerified = await verify(result.password, "foobar")
```
