import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center gap-[8px]">
      <span className="block text-[100px] font-bold text-red-800 mb-[4px]">404</span>
      <p className="font-medium text-[#000000] text-[30px] text-center">Page not found</p>
      <p className="text-[20px] block text-center mb-[8px]">
        Your search has ventured beyond the known universe!
      </p>
      <Link to="/" className="btn btn-primary text-[20px]">
        <span>←</span> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;