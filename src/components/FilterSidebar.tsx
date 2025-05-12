
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { locations, durations, allTags } from '@/data/internships';

interface FilterSidebarProps {
  onFilterChange: (filters: {
    locations: string[];
    durations: string[];
    tags: string[];
  }) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }) => {
  const [selectedLocations, setSelectedLocations] = React.useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    onFilterChange({
      locations: selectedLocations,
      durations: selectedDurations,
      tags: selectedTags,
    });
  }, [selectedLocations, selectedDurations, selectedTags, onFilterChange]);

  const toggleLocation = (location: string) => {
    setSelectedLocations(prev => 
      prev.includes(location) 
        ? prev.filter(loc => loc !== location) 
        : [...prev, location]
    );
  };

  const toggleDuration = (duration: string) => {
    setSelectedDurations(prev => 
      prev.includes(duration) 
        ? prev.filter(dur => dur !== duration) 
        : [...prev, duration]
    );
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  return (
    <div className="w-full md:w-60 lg:w-72 p-4 bg-white rounded-lg border">
      <h3 className="font-semibold text-lg mb-4">Filtres</h3>
      
      <div className="mb-4">
        <h4 className="font-medium text-sm text-internship-darktext mb-2">Lieu</h4>
        <div className="space-y-2">
          {locations.map((location) => (
            <div key={location} className="flex items-center space-x-2">
              <Checkbox 
                id={`location-${location}`}
                checked={selectedLocations.includes(location)}
                onCheckedChange={() => toggleLocation(location)}
              />
              <label 
                htmlFor={`location-${location}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-sm text-internship-darktext mb-2">Durée</h4>
        <div className="space-y-2">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox 
                id={`duration-${duration}`}
                checked={selectedDurations.includes(duration)}
                onCheckedChange={() => toggleDuration(duration)}
              />
              <label 
                htmlFor={`duration-${duration}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-sm text-internship-darktext mb-2">Compétences</h4>
        <div className="space-y-2">
          {allTags.map((tag) => (
            <div key={tag} className="flex items-center space-x-2">
              <Checkbox 
                id={`tag-${tag}`}
                checked={selectedTags.includes(tag)}
                onCheckedChange={() => toggleTag(tag)}
              />
              <label 
                htmlFor={`tag-${tag}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {tag}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
