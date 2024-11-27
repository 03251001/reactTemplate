declare namespace FieldType {
    type phone = {
        phone: string
        code: string
    }

    type mobileChange = {
        oldPhone: string
        phone: string
        code: string
    }

    type updatePwd = {
        oldPwd: string
        newPwd: string
    }

    type resetPwd = {
        phone: string
        code: string
        pwd: string
        again: string
    }
}
