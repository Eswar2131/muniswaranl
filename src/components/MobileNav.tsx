import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Briefcase, GraduationCap, Award, Mail, FolderOpen } from 'lucide-react';

interface MobileNavProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: Home },
    { id: 'about', label: 'About', path: '/about', icon: User },
    { id: 'projects', label: 'Projects', path: '/projects', icon: FolderOpen },
    { id: 'experience', label: 'Work', path: '/experience', icon: Briefcase },
    { id: 'education', label: 'Education', path: '/education', icon: GraduationCap },
    { id: 'certificates', label: 'Certs', path: '/certificates', icon: Award },
    { id: 'contact', label: 'Contact', path: '/contact', icon: Mail },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex flex-col items-center px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                currentPage === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;