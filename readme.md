# Nevelo (Névelő)

## Leírás

**HU:**
Magyar határozott névelőt (a, az) adok vissza egy szöveg alapján.

**EN:**
I return a Hungarian definite article based on a string.

## Használat

1. telepítsd: `npm i nevelo`
2. importáld: `import nevelo from 'nevelo';`
3. használd: `nevelo('szöveg');`

## Opciók

Második változó lehet egy objektum beállításokkal `nevelo('szöveg', {});`

**Nagy kezdőbetű:**

Ez esetben az első betű mindig nagy lesz, tehát: A, Az

`nevelo('szöveg', {uppercase: true});`
