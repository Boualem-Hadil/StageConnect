
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Globe, Users, Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { Company } from '@/types';
import { companies } from '@/data/companies';

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch this from an API
    const foundCompany = companies.find((c) => c.id === Number(id));
    
    // Simulate API call
    setTimeout(() => {
      setCompany(foundCompany || null);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Chargement en cours...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Entreprise non trouvée</h1>
            <p className="mb-6">L'entreprise que vous cherchez n'existe pas ou a été supprimée.</p>
            <Button 
              className="bg-internship-brown hover:bg-internship-darkbrown"
              onClick={() => navigate('/entreprises')}
            >
              Retour aux entreprises
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/entreprises')}
            className="flex items-center gap-2 text-internship-brown hover:text-internship-darkbrown"
          >
            <ArrowLeft size={16} />
            Retour aux entreprises
          </Button>
        </div>

        {/* Company Header */}
        <section className="bg-internship-lightbrown py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 rounded-lg bg-white p-2 overflow-hidden flex items-center justify-center">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold mb-2">{company.name}</h1>
                <div className="flex items-center justify-center md:justify-start mb-4 gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-medium">
                    {company.sector}
                  </span>
                  <div className="flex items-center text-sm gap-1">
                    <MapPin size={14} />
                    <span>{company.location}</span>
                  </div>
                </div>
                <p className="max-w-2xl">{company.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="text-internship-brown" size={20} />
                    <h3 className="font-semibold">À propos</h3>
                  </div>
                  <p className="text-sm">{company.description}</p>
                  
                  <div className="mt-4 space-y-3">
                    {company.website && (
                      <div className="flex items-center gap-2 text-sm">
                        <Globe size={16} className="text-gray-500" />
                        <a 
                          href={company.website.startsWith('http') ? company.website : `https://${company.website}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-internship-brown hover:underline"
                        >
                          {company.website}
                        </a>
                      </div>
                    )}
                    
                    {company.employees && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users size={16} className="text-gray-500" />
                        <span>{company.employees} employés</span>
                      </div>
                    )}
                    
                    {company.founded && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar size={16} className="text-gray-500" />
                        <span>Fondée en {company.founded}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Stages disponibles</h3>
                  <div className="space-y-4">
                    {/* In a real app, we would fetch and show company's internships */}
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Stage en Marketing Digital</h4>
                          <p className="text-sm text-gray-600 mt-1">6 mois · Alger</p>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-internship-brown hover:bg-internship-darkbrown"
                          onClick={() => navigate('/stages')}
                        >
                          Voir l'offre
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 border rounded-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">Stage en Développement Web</h4>
                          <p className="text-sm text-gray-600 mt-1">3 mois · Télétravail</p>
                        </div>
                        <Button 
                          size="sm" 
                          className="bg-internship-brown hover:bg-internship-darkbrown"
                          onClick={() => navigate('/stages')}
                        >
                          Voir l'offre
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyProfile;
