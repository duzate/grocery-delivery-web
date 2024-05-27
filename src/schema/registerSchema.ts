import { z } from 'zod';

const phoneValidation = new RegExp(
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/
);

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

export const registerSchema = z.object({
  name: z.string().min(3, 'Nome invalido'),
  email: z.string().email('Insira um e-mail válido'),
  password: z.string().min(8, `Senha com mínimo 8 caracteres.` ).regex(passwordValidation, 
    {message: 'Senha deve conter letra e número, mínimo 1 letra maiúscula e 1 caractere especial'}
  ),
  confirmPassword: z.string().regex(passwordValidation, 'Formato de senha invalida'),

}).refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
    path: ['confirmPassword']
  }
);
