import {RuleObject} from 'antd/es/form';
import _ from 'lodash'

export const validPhone = (__: RuleObject, value: string, callback: (v?: string) => void) => {
    if (_.isEmpty(value)) {
        return callback('请输入你的手机号')
    }
    const phoneRegExp = /^1[3-9]\d{9}$/;
    const flag = phoneRegExp.test(value)
    if (!flag) {
        return callback('手机号格式错误')
    }

    return callback()
}

export const validCode = (__: RuleObject, value: string, callback: (v?: string) => void) => {
    if (_.isEmpty(value)) {
        return callback('请输入验证码')
    }
    const digitsRegExp = /^\d+$/;
    const flag = digitsRegExp.test(value)
    if (!flag) {
        return callback('验证码错误')
    }

    return callback()
}