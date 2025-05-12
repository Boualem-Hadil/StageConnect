
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap size={28} className="text-internship-brown" />
          <h1 className="text-lg font-bold text-black">StageConnect</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-internship-brown transition-colors">Accueil</Link>
          <Link to="/stages" className="text-sm font-medium hover:text-internship-brown transition-colors">Stages</Link>
          <Link to="/entreprises" className="text-sm font-medium hover:text-internship-brown transition-colors">Entreprises</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Link to="/connexion">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">Se connecter</Button>
          </Link>
          <Link to="/inscription">
            <Button size="sm" className="bg-internship-brown hover:bg-internship-darkbrown transition-colors">S'inscrire</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
