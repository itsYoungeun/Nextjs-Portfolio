import Image from "next/image";
import bg from "../../../../public/background/contact-background.jpg";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          Get in touch with me
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
          Ready to turn your ideas into reality? Whether you need a portfolio, website, or even an app, 
          I am confident we can bring it to life. Reach out to me down below, and let&apos;s create something 
          great together.
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}