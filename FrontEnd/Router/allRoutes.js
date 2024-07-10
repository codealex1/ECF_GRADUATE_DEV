import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/FrontEnd/accueil", "Accueil", "/FrontEnd/pages/home.html",[]),
    new Route("/FrontEnd/services", "services", "/FrontEnd/pages/services.html", [],"/FrontEnd/js/service/service.js"),
    new Route("/FrontEnd/habitats", "habitats", "/FrontEnd/pages/habitats.html", []),
    new Route("/FrontEnd/contact", "contact", "/APi/templates/test/index.php", []),
    new Route("/FrontEnd/sante", "sante", "/FrontEnd/pages/sante.html",["veterinaire"]),
    new Route("/FrontEnd/admin", "admin", "/FrontEnd/pages/Admin/admin.html",["ROLE_ADMIN"], "/FrontEnd/js/auth/signup.js"),
    new Route("/FrontEnd/employe", "employe", "/FrontEnd/pages/employe.html",["employe"]),
    new Route("/FrontEnd/connexion", "connexion", "/FrontEnd/pages/connexion.html" ,[],"/FrontEnd/js/auth/signin.js"),];



//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Arcadia";