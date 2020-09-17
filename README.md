# 服务端使用
目前仅支持控制器中使用，其它类或方法中不适用
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