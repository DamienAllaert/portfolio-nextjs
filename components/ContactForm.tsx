import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 w-full max-w-lg">
            <label className="w-full">
                Name
                <input type="text" name="user_name" className="border p-2 rounded w-full" required />
            </label>
            <label className="w-full">
                Email
                <input type="email" name="user_email" className="border p-2 rounded w-full" required />
            </label>
            <label className="w-full">
                Message
                <textarea name="message" className="border p-2 rounded w-full" required />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
        </form>
    );
}