import Layout from "@/components/layout/Layout";
import PageHead from "@/components/layout/PageHead";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Layout>
        <PageHead headTitle={`About`}></PageHead>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)]">
          <div className="w-8/12 lg:w-1/3 md:w-1/2 sm:w-8/12">
            <div className="border-2 rounded-lg border-green-500 dark:border-green-600 p-4 w-full mb-12 shadow-lg">
              <div className="flex justify-between">
                <p className="text-4xl mb-4 underline decoration-green-600 dark:decoration-green-600 text-green-500 dark:text-green-600 grinched decoration-wavy">About</p>
                <Link
                  href="/"
                  className="block text-center text-2xl"
                >
                  ←
                </Link>
              </div>
              <p className="mb-2 hyphens-auto text-justify whitespace-pre-line">
                Cyber Heroes is a social responsibility initiative designed to empower individuals, particularly children, with
                the knowledge and tools to navigate the digital world safely and responsibly.{"\n\n"}This course project aspires to
                raise awareness about information security, teaching essential skills to protect personal data and maintain
                privacy online.{"\n\n"}By fostering a deeper understanding of internet culture and digital citizenship, Cyber Heroes
                aims to create a generation of informed and conscientious digital users, ensuring a safer and more respectful
                online environment for everyone.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
