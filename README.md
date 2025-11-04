# Japan Tours Landing Page 🇯🇵

Landing page moderne pour un tour au Japon, créée avec Next.js 14 et Tailwind CSS.

## 🚀 Installation

1. Installe les dépendances :
```bash
npm install
```

2. Lance le serveur de développement :
```bash
npm run dev
```

3. Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur

## 📁 Structure du projet

```
japan-tours/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   └── globals.css         # Styles globaux avec Tailwind
├── components/
│   ├── Hero.tsx            # Section hero avec navigation
│   ├── About.tsx           # Section à propos avec timeline
│   ├── Included.tsx        # Services inclus
│   └── Contact.tsx         # Formulaire de contact
├── tailwind.config.js      # Configuration Tailwind
└── package.json
```

## 🎨 Fonctionnalités

- ✅ Design moderne avec glassmorphism
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Navigation smooth scroll
- ✅ Timeline interactive
- ✅ Formulaire de contact
- ✅ Effets hover et transitions
- ✅ Images Unsplash (à remplacer par les tiennes)

## 🛠️ Technologies

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**

## 📝 Personnalisation

### Changer les images :

Remplace les URLs Unsplash dans les composants par tes propres images :
- Hero.tsx (ligne 8)
- About.tsx (lignes 8-24)
- Contact.tsx (ligne 38)

### Changer les couleurs :

Modifie la couleur "japan-gold" dans `tailwind.config.js` :
```js
colors: {
  'japan-gold': '#D4AF37', // Change cette valeur
}
```

### Ajouter un backend au formulaire :

Dans `Contact.tsx`, remplace la fonction `handleSubmit` pour envoyer les données à ton API.

## 🚀 Déploiement

### Vercel (recommandé) :
```bash
npm run build
vercel deploy
```

### GitHub Pages :
1. Build le projet : `npm run build`
2. Exporte : `npm run export`
3. Déploie le dossier `out/`

## 💡 Prochaines améliorations possibles

- [ ] Ajouter un effet parallax
- [ ] Intégrer une lightbox pour les photos
- [ ] Ajouter des animations Framer Motion
- [ ] Connecter le formulaire à une API
- [ ] Ajouter un système de réservation
- [ ] Mode sombre/clair

## 📧 Contact

Développé par [Ton nom] - Développeur Web Freelance

---

Bon dev ! 🚀
