# 服务端使用

```typescript
import { Validate } from "@ctsy/validator";

export default class Test {
    @Validate({
        name: {
            type: 'string',
            required: true,
        }
    })
    async online() { return true; }
    async online2() { return true; }
    async online4() { return true; }
}
```