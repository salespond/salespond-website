import { SUCCESS_CODE } from "@/core/Constants"

const isOk = (status: number) => {
    return status === SUCCESS_CODE
}

export default isOk