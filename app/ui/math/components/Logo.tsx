export function Logo() {
    return (
        <div className="relative flex items-center justify-center  bg-gray-100  rounded-t-md rounded-br-2xl w-36">
            {/* Логотип */}
            <div className="relative text-2xl font-bold uppercase tracking-wider text-gray-800">
                {/* Декоративная линия слева */}
                <span
                    className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-1 h-12 bg-red-500"></span>
                Tab<span className="text-red-500">nik</span>
            </div>
        </div>
    )
}