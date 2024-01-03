const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="w-full border-t border-[#33353F]">
            <div className="mb-14 w-full container mx-auto p-4 flex flex-col md:flex-row justify-between items-center text-slate-400">
                <span>Cai Zhen</span>
                <p>Copyright &copy; {year} All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;