
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const Inscription = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Créer un compte</CardTitle>
            <CardDescription className="text-center">
              Inscrivez-vous pour accéder à toutes les fonctionnalités
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <RadioGroup defaultValue="etudiant" className="flex justify-center space-x-6 pb-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="etudiant" id="etudiant" />
                  <Label htmlFor="etudiant">Étudiant</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="entreprise" id="entreprise" />
                  <Label htmlFor="entreprise">Entreprise</Label>
                </div>
              </RadioGroup>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom</Label>
                  <Input id="prenom" placeholder="Prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom</Label>
                  <Input id="nom" placeholder="Nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="exemple@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              <div className="text-xs text-gray-500">
                En créant un compte, vous acceptez nos{' '}
                <Link to="/conditions" className="text-internship-brown hover:underline">
                  conditions d'utilisation
                </Link>{' '}
                et notre{' '}
                <Link to="/confidentialite" className="text-internship-brown hover:underline">
                  politique de confidentialité
                </Link>
              </div>
              <Button className="w-full bg-internship-brown hover:bg-internship-darkbrown">
                S'inscrire
              </Button>
              <div className="text-center text-sm">
                Vous avez déjà un compte?{' '}
                <Link to="/connexion" className="text-internship-brown hover:underline">
                  Se connecter
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Inscription;
