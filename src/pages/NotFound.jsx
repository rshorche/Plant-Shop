// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 text-green-900">
      <section className="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
        <div className="container flex flex-col items-center ">
          <div className="flex flex-col gap-6 max-w-md text-center">
            <h2 className="font-extrabold text-9xl text-gray-600 dark:text-gray-100">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl md:text-3xl dark:text-gray-300">
              به صفحه اشتباه امدی متاسفم
            </p>
            <Link
              to="/"
              href="#"
              className="px-8 py-4 text-xl font-semibold rounded bg-error text-white hover:text-gray-200">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
