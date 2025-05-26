import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fish, MapPinOff } from "lucide-react"; // opcional: ícones com lucide-react ou heroicons

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center p-6 max-w-md bg-white rounded-2xl shadow-xl border border-blue-100">
        <div className="flex justify-center mb-4 text-blue-400">
          <Fish className="w-12 h-12" />
        </div>
        <h1 className="text-5xl font-bold text-blue-700 mb-2">404</h1>
        <p className="text-xl text-gray-700 mb-4">
          Ops! Você pescou uma página que não existe...
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Parece que você jogou a isca em águas desconhecidas: <br />
          <span className="italic text-gray-600">"{location.pathname}"</span>
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Voltar para a página inicial
        </Link>
        <div className="mt-4 text-gray-400 text-sm flex items-center justify-center gap-2">
          <MapPinOff className="w-4 h-4" />
          Águas do Miranda - Mas aqui, nem um lambari!
        </div>
      </div>
    </div>
  );
};

export default NotFound;
