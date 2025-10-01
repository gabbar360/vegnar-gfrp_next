import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaWhatsapp,
} from 'react-icons/fa';
import {
  MdLocationOn,
  MdPhone,
  MdEmail,
  MdLanguage,
  MdBusiness,
} from 'react-icons/md';

const navigation = {
  products: [
    { name: 'Standard GFRP', href: '/materials/vegnar-gfrp-standard-1' },
    { name: 'High Strength', href: '/materials/vegnar-gfrp-high-strength' },
    { name: 'Fire Retardant', href: '/materials/vegnar-gfrp-fire-retardant' },
    { name: 'Marine Grade', href: '/materials/vegnar-gfrp-marine-grade' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Benefits Of GFRP', href: '/benefits' },
    { name: 'Blog', href: '/blog' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/images/gfrp_logo.png"
                alt="Vegnar GFRP Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-6 max-w-md">
              Leading manufacturer of Glass Fiber Reinforced Polymer (GFRP)
              products. Providing innovative composite solutions for
              construction, infrastructure, and industrial applications.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <MdLocationOn className="h-7 w-7 text-[#EF4444]" />
                <span className="text-sm">
                  B-623, RK iconic, Sheetal Park, 150 Ft. Ring Road, Rajkot -
                  Gujarat (360006)
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-[#22C55E]" />
                <span className="text-sm">+91 90333 31031</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdPhone className="h-5 w-5 text-[#22C55E]" />
                <span className="text-sm">+91 90333 31005</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="h-5 w-5 text-[#DC2626]" />
                <span className="text-sm">sales@vegnar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdLanguage className="h-5 w-5 text-[#3B82F6]" />
                <span className="text-sm">www.vegnargfrp.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Technical Details</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/safety-guidelines"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/technical-specification"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Technical Specification
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies-global"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  Case Studies (Global GFRP)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-2">
              <a
                href="https://www.facebook.com/profile.php?id=61581178121824"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-8 bg-[#1877F2] hover:bg-[#166FE5] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaFacebook className="w-8 h-4 text-white" />
              </a>
              <a
                href="https://www.instagram.com/vegnargfrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-8 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045] hover:from-[#7B2CBF] hover:via-[#E91E63] hover:to-[#FF9800] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaInstagram className="w-8 h-4 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/vegnar-gfrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-8 bg-[#0A66C2] hover:bg-[#095BA8] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaLinkedin className="w-8 h-4 text-white" />
              </a>
              <a
                href="https://www.pinterest.com/vegnargfrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-8 bg-[#E60023] hover:bg-[#D50020] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaPinterest className="w-8 h-4 text-white" />
              </a>
              <a
                href="https://wa.me/919033331005"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-8 bg-[#25D366] hover:bg-[#22C55E] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <FaWhatsapp className="w-8 h-4 text-white" />
              </a>
            </div>

            {/* Certifications */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Certifications</h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://drive.google.com/file/d/1Cp95C2wRgPcpCdn236Nz6UJDD9bSUItb/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 cursor-pointer block h-10 flex items-center justify-center"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5DRTwvdGV4dD4KPHRleHQgeD0iMjAiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iOCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BUktJTkc8L3RleHQ+Cjwvc3ZnPgo="
                    alt="CE Marking"
                    className="w-full h-full object-contain"
                  />
                </a>

                <div className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 cursor-pointer h-10 flex items-center justify-center">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1BS0UgSU48L3RleHQ+Cjx0ZXh0IHg9IjIwIiB5PSIyNiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklORElBPC90ZXh0Pgo8L3N2Zz4K"
                    alt="Make in India"
                    className="w-full h-full object-contain"
                  />
                </div>

                <a
                  href="https://drive.google.com/file/d/1YnvPqMOryrTJzovo7yT9MjZdzmKV6l16/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 cursor-pointer block h-10 flex items-center justify-center"
                >
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMTgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJ3aGl0ZSIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMzMzMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPklTTzwvdGV4dD4KPHRleHQgeD0iMjAiIHk9IjI4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMzMzMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj45MDAxPC90ZXh0Pgo8L3N2Zz4K"
                    alt="ISO 9001"
                    className="w-full h-full object-contain"
                  />
                </a>

                <div className="bg-secondary-foreground/10 p-2 rounded-lg hover:bg-primary/20 transition-colors duration-300 cursor-pointer h-10 flex items-center justify-center">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iNCIgZmlsbD0iIzMzMzMzMyIvPgo8dGV4dCB4PSIyMCIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GSUVPPC90ZXh0Pgo8dGV4dCB4PSIyMCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI4IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+RVhQT1JUPC90ZXh0Pgo8L3N2Zz4K"
                    alt="FIEO Export"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link
                href="/privacy"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-sm text-secondary-foreground/60">
                © 2025 Vegnar GFRP. All rights reserved.
              </p>
              <div className="text-center">
                <p className="text-sm  text-secondary-foreground/60">
                  Developed By{' '}
                  <span className="font-semibold">
                    {' '}
                    <a
                      href="https://www.flexadigital.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm  underline text-secondary-foreground/60"
                    >
                      www.flexadigital.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}