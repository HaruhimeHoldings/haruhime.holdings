import MyLinks from "@components/MyLinks";

export const Contact = () => {
    return (
        <section className="section-wrapper" id="contact">
            <div className="max-w-xl mx-auto bg-surface0 px-8 py-12 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
                    <h4 className="text-4xl md:text-5xl text-center font-black mb-4">
                        Get in Touch<span className="text-peach">.</span>
                    </h4>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <MyLinks />
                </div>
            </div>
        </section>
    );
};

export default Contact;

// path: src/app/containers/Contact.tsx
