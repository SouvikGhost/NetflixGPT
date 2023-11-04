export const validateFormData=(email,password)=>{
    const isEmailValid= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid=/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
    if(!isEmailValid) return "Email Id is not Valid"
    if(!isPasswordValid) return "Password is not Valid"
    

    return null;

}