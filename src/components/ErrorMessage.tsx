import React from 'react';

type ErrorMessageProps = {
	message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return message && <p className="text-red-500 mt-2">{message}</p>;
};

export default ErrorMessage;
