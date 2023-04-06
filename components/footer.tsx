export default function footer() {
  return (
    <>
      <footer className="my-10">
        <hr></hr>
        <div className="w-full mx-auto max-w-screen-xl py-4 md:flex md:items-center md:justify-between">
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="impressum" className="hover:underline">
                Imprint
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
