import Navbar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold text-gray-800">Contactez-moi</h1>
                <ContactForm />
            </div>
        </div>
    );
}
