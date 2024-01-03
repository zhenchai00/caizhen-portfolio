import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../public/Home/github-icon.svg";
import LinkedinIcon from "../public/Home/linkedin-icon.svg";
import InstagramIcon from "../public/Home/instagram-icon.svg";
import GmailIcon from "../public/Home/gmail-icon.svg";

const Contact = () => {
    return (
        <div
            className="grid md:grid-cols-2 my-2 md:my-4 py-4 md:py-6 gap-4 relative"
            id="contact"
        >
            <div className="z-10">
                <h5 className="text-4xl font-bold text-white my-2 ">
                    {`Let's Connect`}
                </h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md mt-8 text-justify">
                    {`I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say
                    hi, I'll try my best to get back to you!`}
                </p>
                <h4 className="pb-3 mt-6">{`Let's get in touch!`}</h4>
                <div className=" flex flex-row gap-4 mt-6 justify-between">
                    <Link href="https://github.com/zhenchai00" target="_blank">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/chong-cai-zhen-b80a981b3/"
                        target="_blank"
                    >
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/zhenchai123/"
                        target="_blank"
                    >
                        <Image src={InstagramIcon} alt="Instagram Icon" />
                    </Link>
                    <Link
                        href="mailto:chongcaizhen@gmail.com"
                        target="_blank"
                    >
                        <Image src={GmailIcon} alt="Gmail Icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;
