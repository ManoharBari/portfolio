
import { Home, User, Briefcase, FileText } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const Header = () => {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Briefcase },
    // { name: 'Projects', url: '#projects', icon: Briefcase },
    // { name: 'Services', url: '#services', icon: FileText },
    // { name: 'Contact', url: '#contact', icon: User }
  ];

  return <NavBar items={navItems} />;
};

export default Header;
