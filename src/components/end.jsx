export default function Foot() {
    return (
        (<footer className="w-full h-16 py-4 bg-zinc-900">
            <div className="container mx- px-4 md:px-6">
                <div
                    className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 md:items-end">
                    <div className="flex items-center space-x-2">
                        <SwordIcon className="h-6 w-6" />
                        <p className="text-sm text-gray-400">© 2024 mvrxs_dev. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>)
    );
}

function SwordIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
            <line x1="13" x2="19" y1="19" y2="13" />
            <line x1="16" x2="20" y1="16" y2="20" />
            <line x1="19" x2="21" y1="21" y2="19" />
        </svg>
    )
}
