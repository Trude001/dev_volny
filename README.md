# Portfolio Professionnel - Volny Moget

Ce dépôt contient le code source de mon portfolio en ligne, accessible à l'adresse : **[moget.online](https://moget.online)**.

---

## 🇫🇷 Version Française

### 📌 à propos du projet
Ce site web est mon portfolio professionnel et ma vitrine numérique.
Il présente mon parcours d'ancien Officier Marinier, mes compétences en gestion de projet Agile, ainsi que mon expertise naissante en Data et Intelligence Artificielle.
Il sert également de point d'entrée pour mes services proposés.
Conçu pour être léger, performant et sécurisé, il me sert également de terrain d'application pour les bonnes pratiques de développement web et de conformité (RGPD/Cybersécurité).

### 🛠️ Technologies utilisées
*   **Structure :** HTML5 sémantique pour une accessibilité et un SEO optimisés.
*   **Style :** CSS3 responsive (Mobile-First) avec une mise en page moderne (Flexbox/Grid).
*   **Dynamisme :** JavaScript natif (Vanilla JS) pour les interactions de l'interface (menu burger).
*   **Formulaire :** Intégration de l'API Formspree pour un traitement sécurisé des contacts sans backend lourd .

### 🛡️ Sécurité et Conformité
Le projet intègre une architecture de sécurité moderne validée par les standards de *Mozilla Observatory* :
*   **Content Security Policy (CSP) :** Restriction stricte des sources de scripts et de formulaires via les en-têtes HTTP.
*   **Fichier `.htaccess` personnalisé :** Activation du HSTS, redirection HTTPS forcée, en-têtes contre le clickjacking (`X-Frame-Options`) et blocage du listage de dossiers (`Options -Indexes`) pour protéger les documents du dossier `assets/`  .
*   **Conformité RGPD :** Validation CNIL intégrée avec recueil de consentement explicite sur le formulaire .

### 📂 Structure du projet
```text
├── assets/             # Fichiers téléchargeables (CV, documents techniques)
├── images/             # éléments graphiques et logos de certifications
├── index.html          # Page principale du portfolio
├── mentions.html       # Mentions légales et politique de confidentialité
├── script.js           # Scripts d'interaction de l'interface
├── style.css           # Feuilles de style globales
├── README.md           # Documentation du projet (ce fichier)
└── SECURITY.md         # Politique de divulgation responsable des vulnérabilités


