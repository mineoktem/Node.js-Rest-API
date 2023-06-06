const joi = require("joi")
const APIError = require("../../utils/errors")

class authValidation {
    constructor() {}
    static register = async (req, res, next) => {
        try {
            
            await joi.object({
                name: joi.string().trim().min(2).max(50).required().messages({
                    "string.base": "İsim alanı metin olmalıdır.",
                    "string.empty": "İsim alanı boş bırakılamaz.",
                    "string.min": "İsim alanı en az 2 karakter olmalıdır.",
                    "string.max": "İsim alanı en fazla 50 karakterden oluşabilir.",
                    "string.required": "İsim alanı zorunludur."
                }),
                lastname: joi.string().trim().min(2).max(50).required().messages({
                    "string.base": "Soyad alanı metin olmalıdır.",
                    "string.empty": "Soyad alanı boş bırakılamaz.",
                    "string.min": "Soyad alanı en az 2 karakter olmalıdır.",
                    "string.max": "Soyad alanı en fazla 50 karakterden oluşabilir.",
                    "string.required": "Soyad alanı zorunludur."
                }),
                email: joi.string().email().trim().min(2).max(50).required().messages({
                    "string.base": "Email alanı metin olmalıdır.",
                    "string.empty": "Email alanı boş bırakılamaz.",
                    "string.email": "Lütfen geçerli bir email giriniz.",
                    "string.min": "Email alanı en az 2 karakter olmalıdır.",
                    "string.max": "Email alanı en fazla 50 karakterden oluşabilir.",
                    "string.required": "Email alanı zorunludur."
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre alanı metin olmalıdır.",
                    "string.empty": "Şifre alanı boş bırakılamaz.",
                    "string.min": "Şifre alanı en az 6 karakter olmalıdır.",
                    "string.max": "Şifre alanı en fazla 36 karakterden oluşabilir.",
                    "string.required": "Şifre alanı zorunludur."
                })
            }).validateAsync(req.body)

        } catch (error) {
            if(error.details && error?.details[0].message)
            throw new APIError(error.details[0].message, 400)
            else throw new APIError("Lütfen Validasyon Kurallarına Uyun",400)
            
        }
        next()
    }

    static login = async (req, res, next) => {
        try {
            await joi.object({
                email: joi.string().email().trim().min(2).max(50).required().messages({
                    "string.base": "Email alanı metin olmalıdır.",
                    "string.empty": "Email alanı boş bırakılamaz.",
                    "string.email": "Lütfen geçerli bir email giriniz.",
                    "string.min": "Email alanı en az 2 karakter olmalıdır.",
                    "string.max": "Email alanı en fazla 50 karakterden oluşabilir.",
                    "string.required": "Email alanı zorunludur."
                }),
                password: joi.string().trim().min(6).max(36).required().messages({
                    "string.base": "Şifre alanı metin olmalıdır.",
                    "string.empty": "Şifre alanı boş bırakılamaz.",
                    "string.min": "Şifre alanı en az 6 karakter olmalıdır.",
                    "string.max": "Şifre alanı en fazla 36 karakterden oluşabilir.",
                    "string.required": "Şifre alanı zorunludur."
                })
            }).validateAsync(req.body)
            
        } catch (error) {
            if(error.details && error?.details[0].message)
            throw new APIError(error.details[0].message, 400)
            else throw new APIError("Lütfen Validasyon Kurallarına Uyun",400)
            
        }
        next();
    }
}

module.exports = authValidation