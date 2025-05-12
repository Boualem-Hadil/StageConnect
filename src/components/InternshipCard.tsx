
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, ArrowRight } from "lucide-react";
import { Internship } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  const handleApply = () => {
    // In a real application, we would navigate to an application form
    // or open a modal to apply
    toast({
      title: "Candidature envoyée",
      description: `Votre candidature pour "${internship.title}" chez ${internship.company} a été envoyée avec succès.`,
      duration: 5000,
    });
    
    // For demonstration, we'll just log to console
    console.log(`Applied to: ${internship.title} at ${internship.company}`);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in">
      <CardHeader className="p-4 pb-0 flex flex-row items-center gap-3">
        <div className="w-12 h-12 rounded-md overflow-hidden bg-internship-lightgray">
          <img src={internship.logo} alt={`${internship.company} logo`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{internship.title}</h3>
          <p className="text-sm text-internship-lighttext">{internship.company}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2 mb-3">
          <div className="flex items-center text-sm text-gray-600 gap-1">
            <MapPin size={14} /> <span>{internship.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 gap-1">
            <Calendar size={14} /> <span>{internship.duration}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 gap-1">
            <Building size={14} /> <span>Publié le {formatDate(internship.postedAt)}</span>
          </div>
        </div>
        <p className="text-sm line-clamp-3 mb-4">{internship.description}</p>
        <div className="flex flex-wrap gap-1">
          {internship.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs bg-internship-lightgray">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        {internship.salary ? (
          <span className="text-sm font-medium">{internship.salary}</span>
        ) : (
          <span className="text-sm text-gray-500">Stage non rémunéré</span>
        )}
        <Button 
          className="bg-internship-brown hover:bg-internship-darkbrown transition-colors"
          onClick={handleApply}
        >
          <span className="mr-1">Postuler</span>
          <ArrowRight size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;
