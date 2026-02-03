import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center pt-20">
        <div className="container-wide">
          <div className="max-w-lg mx-auto text-center">
            <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
            <h1 className="text-display font-bold text-foreground mb-4">
              Pagina non trovata
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              La pagina che stai cercando non esiste o è stata spostata.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-primary rounded-full px-8"
              >
                <Link to="/">
                  <Home className="mr-2 w-5 h-5" />
                  Torna alla home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8"
              >
                <Link to="/contatti">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Contattaci
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
