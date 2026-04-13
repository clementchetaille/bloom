# Bloom — E-commerce cosmétique fictif

Projet de portfolio — Développeur : Clément Chetaille ([heyclem.dev](https://heyclem.dev))

## Stack
- React 18 + Vite
- React Router DOM
- CSS Modules (pas de framework CSS)
- Déployé sur GitHub Pages

## Lancer le projet en local

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le site est accessible sur `http://localhost:5173/bloom/`

## Déployer sur GitHub Pages

### Première fois

1. Créer un repo GitHub nommé **bloom**
2. Ajouter la remote :
```bash
git init
git remote add origin https://github.com/TON_USERNAME/bloom.git
```
3. Dans `package.json`, ajouter dans `"scripts"` :
```json
"deploy": "npm run build && gh-pages -d dist"
```
4. Déployer :
```bash
npm run deploy
```
5. Dans les settings GitHub du repo → Pages → Source → `gh-pages` branch

Le site sera en ligne sur `https://TON_USERNAME.github.io/bloom/`

### Mises à jour suivantes
```bash
npm run deploy
```

## Structure du projet

```
src/
├── components/
│   ├── CartContext.jsx   # État global du panier
│   ├── Header.jsx/.css
│   ├── Footer.jsx/.css
│   ├── ProductCard.jsx/.css
│   └── ProductVisual.jsx # Visuels SVG des produits
├── pages/
│   ├── Home.jsx/.css
│   ├── Catalogue.jsx/.css
│   ├── Product.jsx/.css
│   └── Cart.jsx/.css
├── data/
│   └── products.js       # Données des 6 produits fictifs
├── App.jsx               # Routing
├── main.jsx
└── index.css             # Variables CSS + styles globaux
```

## Note
Ce projet est entièrement fictif, créé à des fins de démonstration portfolio.
Aucun achat réel n'est possible.
