
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import InternshipCard from '@/components/InternshipCard';
import Footer from '@/components/Footer';
import { internships } from '@/data/internships';
import { Internship } from '@/types';
import { Menu, Search, Building, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchLocation, setSearchLocation] = useState<string>('');
  const [filters, setFilters] = useState<{
    locations: string[];
    durations: string[];
    tags: string[];
  }>({
    locations: [],
    durations: [],
    tags: [],
  });

  const handleSearch = (search: string, location: string) => {
    setSearchQuery(search);
    setSearchLocation(location);
  };

  const handleFilterChange = (newFilters: {
    locations: string[];
    durations: string[];
    tags: string[];
  }) => {
    setFilters(newFilters);
  };

  const filteredInternships = useMemo(() => {
    return internships.filter((internship) => {
      // Search by query
      const matchesSearch = searchQuery
        ? internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;

      // Search by location
      const matchesLocation = searchLocation
        ? internship.location.toLowerCase().includes(searchLocation.toLowerCase())
        : true;

      // Filter by selected filters
      const matchesLocation2 = filters.locations.length > 0
        ? filters.locations.includes(internship.location)
        : true;

      const matchesDuration = filters.durations.length > 0
        ? filters.durations.includes(internship.duration)
        : true;

      const matchesTags = filters.tags.length > 0
        ? filters.tags.some(tag => internship.tags.includes(tag))
        : true;

      return matchesSearch && matchesLocation && matchesLocation2 && matchesDuration && matchesTags;
    });
  }, [searchQuery, searchLocation, filters]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-internship-purple to-internship-blue text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Trouvez le stage idéal pour votre avenir professionnel en Algérie</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Découvrez des milliers d'opportunités de stages dans toute l'Algérie et lancez votre carrière dès maintenant.
            </p>
            <SearchBar onSearch={handleSearch} />
          </div>
        </section>

        {/* Internship Listings */}
        <section className="py-8 md:py-12 container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Mobile Filter Toggle */}
            <div className="block md:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Menu size={16} />
                    <span>Filtres</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <FilterSidebar onFilterChange={handleFilterChange} />
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden md:block w-60 lg:w-72 shrink-0">
              <div className="sticky top-4">
                <FilterSidebar onFilterChange={handleFilterChange} />
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {filteredInternships.length} stage{filteredInternships.length > 1 ? 's' : ''} trouvé{filteredInternships.length > 1 ? 's' : ''}
                </h2>
                <div className="text-sm text-gray-500">
                  Trier par: <span className="font-medium">Date de publication</span>
                </div>
              </div>

              {filteredInternships.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {filteredInternships.map((internship) => (
                    <InternshipCard key={internship.id} internship={internship} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-medium mb-2">Aucun stage ne correspond à votre recherche</h3>
                  <p className="text-sm text-gray-500 mb-4">Essayez de modifier vos critères de recherche ou vos filtres.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setSearchLocation('');
                      setFilters({ locations: [], durations: [], tags: [] });
                    }}
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Pourquoi utiliser StageConnect Algérie ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-internship-purple" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Recherche simplifiée</h3>
                <p className="text-gray-600 text-sm">Trouvez facilement des stages en Algérie correspondant à vos critères grâce à notre moteur de recherche avancé.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="text-internship-purple" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">Entreprises vérifiées</h3>
                <p className="text-gray-600 text-sm">Accédez à des offres de stages de qualité auprès d'entreprises algériennes soigneusement sélectionnées.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="text-internship-purple" size={24} />
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

export default Index;
