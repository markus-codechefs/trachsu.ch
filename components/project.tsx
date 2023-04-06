export default function project(title: string, text: string, tags: string[]) {
  return (
    <>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
        <div className="my-4">
          {tags.map((item) => (
            <div
              className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 my-2 mx-2 bg-neutral-200 text-neutral-800 dark:text-black-200 rounded-full"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
