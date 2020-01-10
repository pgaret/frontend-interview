export function validEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export function validateForm(email, password, name) {
	if (validEmail(email)) {
		if (password.trim() === "password") {
			return {
				result: true,
				user: {
					name,
					email,
					password
				}
			};
		} else {
			return {
				result: false,
				message: 'Invalid email/password combination'
			}
		}
	} else {
		return {
			result: false,
			message: 'Invalid email'
		}
	}
}
