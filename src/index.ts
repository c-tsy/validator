import Scheme, { Rules, ValidateOption } from 'async-validator'
/**
 * 服务端接口参数验证，
 * @param rule 规则
 * @param conf 额外配置，暂不支持
 * @link https://www.npmjs.com/package/async-validator
 */
export function Validate(rule: Rules, conf: any) {
    return (target: any, name: string, desc: string) => {
        let trun: Function = target[name];
        target['_before_' + name] = function (data: any) {
            return new Scheme(rule).validate(data).catch((t: any) => {
                t.message = "E_VALIDATE"
                throw t
            });
        }.bind(target);
    }
}