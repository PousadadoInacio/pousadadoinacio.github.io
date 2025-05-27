import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Função para normalizar caminhos e evitar dupla barra
  const getImagePath = (imageName) => {
    const baseURL = import.meta.env.BASE_URL || '/';
    return `${baseURL}${baseURL.endsWith('/') ? '' : '/'}${imageName}`;
  };

  return (
    <footer className="py-6 bg-slate-100 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Primeira coluna - Logo */}
          <div className="flex justify-center items-center">
            <img
              src={getImagePath('logo.png')}
              alt="Pousadas do Inácio Logo"
              className="w-full max-w-[180px] h-auto object-contain"
            />
          </div>

          {/* Segunda coluna - Texto descritivo */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-serif text-slate-900">Pousadas do Inácio</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              O seu refúgio natural às margens do Rio Miranda, no coração do Pantanal Sul-Mato-Grossense.
            </p>
          </div>

          {/* Terceira coluna - Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-serif text-slate-900">Links Rápidos</h3>
            <ul className="space-y-0">
              {[
                { name: 'Início', href: '#' },
                { name: 'Blog', href: '/blog' },
                { name: 'Galeria', href: '#gallery' },
                { name: 'Acomodações', href: '#accommodations' },
                { name: 'Atividades', href: '#activities' },                
                { name: 'Contato', href: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-slate-900 transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quarta coluna - Redes Sociais e Selos */}
          <div>
            <h3 className="text-lg font-semibold mb-3 font-serif text-slate-900">Redes Sociais</h3>
            <div className="flex space-x-3 mb-5">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-slate-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-slate-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-slate-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.321 5.562a5.125 5.125 0 01-.444-.258 6.228 6.228 0 01-1.139-.968c-.85-.972-1.166-1.958-1.284-2.648h.005c-.15-.562-.108-.924-.102-.924h-3.866v14.965c0 .201 0 .399-.008.595 0 .024-.002.047-.004.073 0 .011-.002.022-.002.033 0 .003 0 .006 0 .008a3.284 3.284 0 01-1.652 2.605 3.227 3.227 0 01-1.6.422c-1.8 0-3.263-1.469-3.263-3.281 0-1.813 1.46-3.282 3.262-3.282.33 0 .649.053 1.004.16l.005-3.936a7.186 7.186 0 00-5.531 1.619 7.585 7.585 0 00-1.656 2.042c-.163.281-.779 1.412-.854 3.247-.047 1.042.266 2.12.415 2.568v.01c.094.262.457 1.158 1.05 1.914a7.856 7.856 0 002.67 2.053v-.01l.01.01c1.87 1.262 3.943 1.178 3.943 1.178.359-.015 1.562 0 2.929-.647 1.515-.718 2.38-1.788 2.38-1.788a7.43 7.43 0 001.296-2.154c.35-.92.467-2.023.467-2.464V8.277c.046.028.671.441.671.441s.9.577 2.304.953c1.008.267 2.364.324 2.364.324V6.158c-.458.051-1.497-.098-1.952-.596z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-slate-900 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>

            <div>
              <h4 className="text-base font-semibold mb-2 font-serif text-slate-900">Certificações</h4>
              <div className="flex space-x-2 items-center">
                <img
                  src={getImagePath('selo2.png')}
                  alt="Selo Turismo Sustentável"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={getImagePath('selo1.png')}
                  alt="Selo Local Seguro e Saudável"
                  className="w-10 h-10 object-contain"
                />
                <img
                  src={getImagePath('selo3.png')}
                  alt="Selo Pesca Sustentável"
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-300 pt-4 text-center text-xs text-gray-500">
          &copy; {currentYear} Pousadas do Inácio. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
