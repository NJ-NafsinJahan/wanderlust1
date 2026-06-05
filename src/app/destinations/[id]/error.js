"use client";

import { useEffect } from "react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 via-white to-orange-50 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="text-6xl">⚠️</div>

        {/* Title */}
        <h1 className="mt-4 text-3xl font-bold text-gray-800">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="mt-3 text-gray-500">
          An unexpected error occurred. Please try again.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          >
            Go Home
          </Link>
        </div>

        {/* Small info */}
        <p className="mt-6 text-xs text-gray-400">
          If the problem continues, refresh the page or contact support.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
