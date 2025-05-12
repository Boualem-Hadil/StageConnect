
import React from 'react';
import { GraduationCap } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-3/12 mb-6">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap size={24} className="text-internship-purple" />
              <h2 className="text-lg font-bold text-black">StageConnect</h2>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              StageConnect est votre plateforme de recherche de stages professionnels en France. Nous connectons étudiants et entreprises pour des expériences enrichissantes.
            </p>
          </div>
          <div className="w-full md:w-6/12 lg:w-9/12">
            <div className="flex flex-wrap">
              <div className="w-full md:w-4/12 mb-6">
                <h3 className="text-sm font-semibold mb-3">Plateforme</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Rechercher des stages</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Entreprises</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Conseils</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Témoignages</a></li>
                </ul>
              </div>
              <div className="w-full md:w-4/12 mb-6">
                <h3 className="text-sm font-semibold mb-3">Ressources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Blog</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Guide du CV</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Préparation entretien</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">FAQ</a></li>
                </ul>
              </div>
              <div className="w-full md:w-4/12 mb-6">
                <h3 className="text-sm font-semibold mb-3">Entreprise</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">À propos</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Contact</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Mentions légales</a></li>
                  <li><a href="#" className="text-sm text-gray-600 hover:text-internship-purple transition-colors">Confidentialité</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-4 pt-4">
          <p className="text-xs text-center text-gray-500">© {new Date().getFullYear()} StageConnect. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
