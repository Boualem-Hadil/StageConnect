
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Search } from 'lucide-react';
import { companies } from '@/data/companies';

const Entreprises = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = searchQuery
    ? companies.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.location.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : companies;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-internship-lightbrown py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Entreprises Partenaires</h1>
            <p className="text-lg max-w-2xl mx-auto mb-6">
              Découvrez les entreprises qui recrutent activement des stagiaires en Algérie
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher une entreprise..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-internship-brown"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Companies List */}
        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => (
              <Card key={company.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-100 flex items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold">{company.name}</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-internship-lightbrown rounded-full">
                      {company.sector}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Building size={16} className="mr-1" />
                    <span>{company.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{company.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate(`/entreprise/${company.id}`)}
                  >
                    Voir le profil
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCompanies.length === 0 && (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Aucune entreprise ne correspond à votre recherche</h3>
              <p className="text-sm text-gray-500 mb-4">Essayez de modifier vos critères de recherche.</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery('')}
              >
                Réinitialiser la recherche
              </Button>
            </div>
          )}
        </section>
        
        {/* Join Section */}
        <section className="py-12 bg-internship-lightbrown">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Vous êtes une entreprise ?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Rejoignez notre plateforme pour publier vos offres de stages et trouver les meilleurs talents parmi les étudiants algériens.
            </p>
            <Button className="bg-internship-brown hover:bg-internship-darkbrown">
              Devenir partenaire
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Entreprises;
