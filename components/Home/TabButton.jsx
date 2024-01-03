const TabButton = ({ active, selectTab, children }) => {
    const buttonClass = active
        ? "text-black dark:text-gray-100 border-b border-teal-500"
        : "text-black dark:text-gray-400";
    return (
        <button onClick={selectTab}>
            <p
                className={`mr-5 font-semibold hover:text-gray-400 dark:hover:text-gray-100 ${buttonClass}`}
            >
                {children}
            </p>
        </button>
    );
};

export default TabButton;