import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Not Found Page</h1>
      <Link to={"/"}>
        <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-red-700 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out">
          Go back home
        </button>
      </Link>
    </div>
  );
}
export default NotFoundPage;
