import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

	const [values, setValues] = useState(() => {
		if (localStorage.getItem(key)) {
			return (JSON.parse(localStorage.getItem(key)));
		} else {
			localStorage.setItem(key, JSON.stringify(initialValues));
			return (initialValues);
		}
	});

	const setStoredValues = (values) => {
		localStorage.setItem(key, JSON.stringify(values));
		setValues(values);
	}

	return [values, setStoredValues];
};