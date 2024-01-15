interface PasswordCheckerProps {
    passwordLength: number;
    password: string;
}

export function PasswordChecker(props: PasswordCheckerProps) {
    const regexPassword = /^[a-z]+$/gmi;
    if (props.passwordLength < 8) {
        return <p style={{color: 'red'}}>Gyenge jelszó</p>
    } else if (regexPassword.test(props.password)) {
        return <p style={{color: 'orange'}}>Közepesen erős jelszó</p>
    } else {
        return <p style={{color: 'green'}}>Erős jelszó</p>
    }
}