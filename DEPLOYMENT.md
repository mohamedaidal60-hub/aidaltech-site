# 🚀 Guide de Déploiement - AidalTech

Ce guide vous explique comment déployer votre site sur GitHub et Vercel.

## 📋 Prérequis

- Un compte GitHub (gratuit)
- Un compte Vercel (gratuit)
- Git installé sur votre PC

## 🔧 Étape 1 : Installation des dépendances

Ouvrez PowerShell dans le dossier du projet et exécutez :

```powershell
cd "C:\Users\PC\.gemini\antigravity\scratch\aidaltech-site"
npm install
```

## 🧪 Étape 2 : Test en local

Testez que tout fonctionne :

```powershell
npm run dev
```

Ouvrez votre navigateur sur `http://localhost:5173`

## 📦 Étape 3 : Initialiser Git et pousser sur GitHub

### 3.1 Créer un repository sur GitHub

1. Allez sur [github.com](https://github.com)
2. Cliquez sur le bouton **"New"** (ou **"+"** en haut à droite)
3. Nommez votre repository : `aidaltech-site`
4. Laissez-le **public** ou **privé** selon votre choix
5. **NE COCHEZ PAS** "Initialize with README"
6. Cliquez sur **"Create repository"**

### 3.2 Pousser le code sur GitHub

Dans PowerShell, dans le dossier du projet :

```powershell
# Initialiser git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - AidalTech site"

# Ajouter le repository distant (remplacez USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/USERNAME/aidaltech-site.git

# Pousser le code
git branch -M main
git push -u origin main
```

## 🌐 Étape 4 : Déployer sur Vercel

### 4.1 Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre GitHub

### 4.2 Importer votre projet

1. Sur le dashboard Vercel, cliquez sur **"Add New..."** → **"Project"**
2. Sélectionnez votre repository **aidaltech-site**
3. Cliquez sur **"Import"**

### 4.3 Configurer les variables d'environnement

Dans la section **"Environment Variables"**, ajoutez :

```
VITE_SUPABASE_URL = https://adsmczftjmqzvqkvscrh.supabase.co
VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkc21jemZ0am1xenZxa3ZzY3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MTEsImV4cCI6MjA4NjEyNzQxMX0.tAlB_55g0doM9QYgo-K_xberVzhi-CttuKxMKxcMqN8
```

### 4.4 Déployer

1. Cliquez sur **"Deploy"**
2. Attendez quelques minutes
3. Votre site sera disponible sur une URL comme : `https://aidaltech-site.vercel.app`

## 🎨 Étape 5 : Domaine personnalisé (Optionnel)

### Option A : Sous-domaine Vercel (Gratuit)

1. Dans votre projet Vercel, allez dans **Settings** → **Domains**
2. Vous pouvez personnaliser votre sous-domaine : `aidaltech.vercel.app`

### Option B : Domaine gratuit avec Freenom

1. Allez sur [freenom.com](https://www.freenom.com)
2. Recherchez un nom de domaine disponible (ex: `aidaltech.tk`)
3. Enregistrez-le gratuitement
4. Dans Vercel, allez dans **Settings** → **Domains**
5. Ajoutez votre domaine Freenom
6. Suivez les instructions pour configurer les DNS

### Option C : Domaine avec InfinityFree

1. Allez sur [infinityfree.net](https://infinityfree.net)
2. Créez un compte gratuit
3. Vous obtiendrez un sous-domaine gratuit

## 📧 Configuration Email Professionnel

Pour avoir une adresse email professionnelle gratuite :

### Option 1 : Zoho Mail (Recommandé)

1. Allez sur [zoho.com/mail](https://www.zoho.com/mail/)
2. Créez un compte gratuit
3. Vous pouvez utiliser votre domaine personnalisé
4. Créez une adresse : `contact@votredomaine.tk`

### Option 2 : Garder Gmail

Vous pouvez continuer à utiliser `aidalmimo@gmail.com` - c'est déjà configuré dans le site.

## 🔄 Mettre à jour le site

Après avoir fait des modifications :

```powershell
git add .
git commit -m "Description de vos modifications"
git push
```

Vercel déploiera automatiquement les changements !

## ✅ Checklist finale

- [ ] Site testé en local
- [ ] Code poussé sur GitHub
- [ ] Déployé sur Vercel
- [ ] Variables d'environnement configurées
- [ ] Site accessible en ligne
- [ ] Formulaire de contact testé
- [ ] WhatsApp button fonctionne
- [ ] Domaine personnalisé configuré (optionnel)

## 🆘 Besoin d'aide ?

Contactez-moi :
- **Email** : aidalmimo@gmail.com
- **WhatsApp** : +213 777 439 540

---

🏆 **Allez l'USMA !** 🔴⚫
