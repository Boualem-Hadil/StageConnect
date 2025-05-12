
import React, { useState, useMemo } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterSidebar from '@/components/FilterSidebar';
import InternshipCard from '@/components/InternshipCard';
import Footer from '@/components/Footer';
import { internships } from '@/data/internships';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const Stages = () => {
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
        {/* Search Section */}
        <section className="bg-internship-lightbrown py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Rechercher des stages en Algérie</h1>
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
      </main>

      <Footer />
    </div>
  );
};

export default Stages;
