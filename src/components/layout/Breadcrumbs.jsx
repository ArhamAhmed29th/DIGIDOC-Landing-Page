import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumb = (name) => {
    if (name === 'app') return 'Application';
    if (name.startsWith('doc-')) return `Document #${name.replace('doc-', '')}`;
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
      <Link to="/app/dashboard" className="flex items-center gap-1 hover:text-cyan-400 transition-colors">
        <Home className="w-3.5 h-3.5" />
        <span>App</span>
      </Link>
      {pathnames.slice(1).map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 2).join('/')}`;
        const isLast = index === pathnames.length - 2;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            {isLast ? (
              <span className="text-white font-semibold">{formatBreadcrumb(name)}</span>
            ) : (
              <Link to={routeTo} className="hover:text-cyan-400 transition-colors">
                {formatBreadcrumb(name)}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
