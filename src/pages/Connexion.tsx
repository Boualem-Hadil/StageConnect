
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Connexion = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Se connecter</CardTitle>
            <CardDescription className="text-center">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="exemple@email.com" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Mot de passe</Label>
                  <Link to="/mot-de-passe-oublie" className="text-xs text-internship-brown hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label 
                  htmlFor="remember" 
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Se souvenir de moi
                </label>
              </div>
              <Button className="w-full bg-internship-brown hover:bg-internship-darkbrown">
                Se connecter
              </Button>
              <div className="text-center text-sm">
                Vous n'avez pas de compte?{' '}
                <Link to="/inscription" className="text-internship-brown hover:underline">
                  S'inscrire
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

export default Connexion;
