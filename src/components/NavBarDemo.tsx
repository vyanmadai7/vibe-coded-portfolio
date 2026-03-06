import { Home, User, Briefcase, FileText, Code2, Mail } from 'lucide-react'
import { NavBar } from "@/src/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#about', icon: User },
    { name: 'Skills', url: '#skills', icon: Code2 },
    { name: 'Projects', url: '#projects', icon: Briefcase },
    { name: 'Reviews', url: '#reviews', icon: FileText },
    { name: 'Contact', url: '#contact', icon: Mail },
  ]

  return <NavBar items={navItems} />
}
