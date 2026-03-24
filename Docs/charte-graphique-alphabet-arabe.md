# Charte Graphique — alphabet-arabe.com
**Version validée le 24 mars 2026 — Gemini maquette approuvée**

---

## 1. Palette de couleurs — "L'Encre et le Sable"

| Rôle | Nom | HEX | Usage |
|------|-----|-----|-------|
| Principale | Bleu Nuit Profond | `#0A1128` | Fonds, titres, header au scroll |
| Accent | Or Sablé | `#C5A059` | Boutons CTA, détails, hover, icônes |
| Fond secondaire | Blanc Albâtre | `#F8F9FA` | Sections claires, corps de texte |
| Structure | Gris Ardoise Doux | `#2D3748` | Encadrés, éléments discrets |
| Micro-bordure | Gris Clair | `#E2E8F0` | Bordures de cards |

---

## 2. Typographie — L'Équilibre Franco-Arabe

| Usage | Police | Style | Notes |
|-------|--------|-------|-------|
| Titres H1, H2 | **Playfair Display** | Serif | Élégante, intemporelle, "édition de luxe" |
| Corps de texte | **Montserrat** | Sans-serif | Lisibilité maximale mobile |
| Caractères arabes | **Amiri** | Naskh classique | Proportions classiques, idéale apprentissage |

**Import Google Fonts (à héberger localement en production) :**
```
Playfair Display : weights 400, 700
Montserrat : weights 400, 500, 600
Amiri : weights 400, 700
```

---

## 3. Composants UI

### Boutons (CTA)
- `border-radius: 4px` — structuré, pas trop arrondi
- **Variante plein** : fond `#C5A059`, texte `#0A1128`, font-weight 600
- **Variante outline** : bordure 1px `#C5A059`, texte `#C5A059`, fond transparent
- **Hover** : `box-shadow: 0 0 16px rgba(197, 160, 89, 0.35)` — reflet métallique doré

### Cards / Encadrés
- Fond : `#F8F9FA`
- Bordure : `1px solid #E2E8F0`
- `border-radius: 8px`
- Filigrane : motif géométrique zellige/entrelacs en coin, `opacity: 0.03`

### Icônes
- Style : **Line Art filaire** très fin
- Couleur : `#C5A059` (or sablé)
- Épaisseur de trait : 1.5px max

---

## 4. Header

| État | Comportement |
|------|-------------|
| Par défaut | Fond transparent |
| Au scroll | Fond `#0A1128` avec transition douce |
| Logo | Typo Playfair Display + point doré — texte "alphabet-arabe.com" |
| Menu desktop | Central, épuré, texte `#F8F9FA`, hover `#C5A059` |
| CTA header | Bouton "Commencer" plein or à droite |
| Mobile | Logo centré + burger menu (3 traits fins) à droite |

---

## 5. Hero Section

### Desktop
- **Gauche** : Titre massif Playfair Display — *"Maîtrisez l'alphabet arabe, une lettre à la fois."*
- **Droite** : Lettre arabe 3D dorée (Alif ou Lam) — sculpture flottante sur fond sombre, éclairage doux
- Fond hero : `#0A1128` avec léger dégradé atmosphérique (ciel nocturne)
- Ornements de coins : motifs entrelacs dorés discrets (comme image Gemini)

### Mobile
- Lettre 3D **au-dessus** du titre (impact visuel immédiat au chargement)
- Titre en dessous, taille réduite
- Bouton CTA **pleine largeur** (`width: 100%`)

---

## 6. Logo

- Mandala géométrique doré (motif islamique 8 branches) — **sans losange en bas à droite**
- Couleur : `#C5A059` sur fond `#0A1128`
- Texte : "alphabet-arabe.com" en Playfair Display
- Format fichiers : SVG + PNG fond transparent

---

## 7. Image Hero (asset Gemini)

- Calligraphie arabe 3D dorée العربية sur fond bleu nuit atmosphérique
- Ornements de coins en entrelacs dorés
- **Sans losange en bas à droite** (à retirer de l'asset)
- Format : WebP optimisé, fallback PNG

---

## 8. Principes généraux

- **White space généreux** — chaque lettre de l'alphabet a son propre "écrin" visuel
- Rien ne doit paraître encombré
- Contraste fort : or sur bleu nuit = identité mémorable
- **Différenciation vs concurrents** : tous sur fond blanc générique → alphabet-arabe.com = premium, unique

---

## 9. Variables CSS (Tailwind custom)

```js
// tailwind.config.ts
colors: {
  'nuit':     '#0A1128',
  'or':       '#C5A059',
  'albatre':  '#F8F9FA',
  'ardoise':  '#2D3748',
  'bordure':  '#E2E8F0',
}

fontFamily: {
  'serif':  ['Playfair Display', 'Georgia', 'serif'],
  'sans':   ['Montserrat', 'sans-serif'],
  'arabic': ['Amiri', 'serif'],
}
```

---

*Charte validée sur maquette Gemini — 24 mars 2026*
*Projet : alphabet-arabe.com — Réseau FK Digital / Tanger Institut*
