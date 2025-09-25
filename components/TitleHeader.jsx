export default function TitleHeader({ title, sub }) {
    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">{title}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{sub}</p>
        </div>
    )
}