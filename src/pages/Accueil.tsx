
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Building, GraduationCap } from 'lucide-react';

const Accueil = () => {
  const handleSearch = (query: string, location: string) => {
    console.log('Search query:', query, 'Location:', location);
    // In a real app, we would redirect to the search results page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-internship-brown to-internship-lightbrown text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Trouvez le stage idéal pour votre avenir professionnel en Algérie</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Découvrez des milliers d'opportunités de stages dans toute l'Algérie et lancez votre carrière dès maintenant.
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {/* Featured Internships */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Stages populaires</h2>
            <p className="text-gray-600">Des opportunités sélectionnées pour vous</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/id/${20 + i}/200`} alt="Company logo" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">Stage en Développement Web</h3>
                      <p className="text-sm text-gray-500">TechSolutions Algérie</p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Alger, Algérie</div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-internship-lightbrown bg-opacity-50 px-2 py-1 rounded-full">React</span>
                    <span className="text-xs bg-internship-lightbrown bg-opacity-50 px-2 py-1 rounded-full">6 mois</span>
                    <span className="text-xs bg-internship-lightbrown bg-opacity-50 px-2 py-1 rounded-full">Rémunéré</span>
                  </div>
                  <Button variant="outline" className="w-full">Voir les détails</Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/stages">
              <Button className="bg-internship-brown hover:bg-internship-darkbrown">
                Voir tous les stages
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Pourquoi utiliser StageConnect Algérie ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-internship-lightbrown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-internship-darkbrown" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Recherche simplifiée</h3>
                <p className="text-gray-600 text-sm">Trouvez facilement des stages en Algérie correspondant à vos critères grâce à notre moteur de recherche avancé.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-internship-lightbrown rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-internship-darkbrown" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Entreprises vérifiées</h3>
                <p className="text-gray-600 text-sm">Accédez à des offres de stages de qualité auprès d'entreprises algériennes soigneusement sélectionnées.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-internship-lightbrown rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-internship-darkbrown" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Conseil personnalisé</h3>
                <p className="text-gray-600 text-sm">Bénéficiez de conseils pour améliorer votre CV et réussir vos entretiens d'embauche dans le contexte algérien.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Accueil;
