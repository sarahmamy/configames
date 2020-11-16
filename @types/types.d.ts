interface IRecord {
  id: string;
  Nom: string;
  "Jeu original": string;
  "Lien": string;
  "Lien vers le jeu original physique": string;
  Catégories: string[];
  Prix: string;
  "Support (Téléphone, Tablette, Web)": string[];
  "Plateforme": string[];
  "Plateforme Commentaire": string;
  Inscription: string;
  Commentaire: string;
  "Image de couverture": Array<{
    thumbnails: {
      small: {
        width: number;
        height: number;
        url: string;
      };
      large: {
        width: number;
        height: number;
        url: string;
      };
    };
  }>;
  "Nombre de joueurs": string;
  "Facilité d'apprentissage": string;
  "Créé le": string;
  "Modifié le": string;
  Likes: number;
  isLiked: boolean;
}

type IFilters = { [key: string]: boolean };
