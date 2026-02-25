Készíts egy TypeScript-es vite projektet, "szines-blog-sajatnev" néven!

A blog különlegessége, hogy minden tartalmat más színnel képes megjeleníteni, amelyet a poszt létrehozásakor lehet megadni.

Adatszerkezet:

Készíts egy Bejegyzes osztályt, az alábbi 3 adattaggal, mindhárom szöveg:
title (a bejegyzés címe)
content (a bejegyzés tartalma)
color (szövegszín, hexa kód)
Az alábbiakat ellenőrizd, hiba esetén dobj kivételt:

A title és a content nem lehet üres.
A color hét karakter hosszúságú, és #-tel kezdődik.

A main.ts fájlban hozz létre egy listát, amely már min. 2 bejegyzés adatát tartalmazza (teszt adat).

UI:

Az oldal tetején jeleníts meg egy űrlapot, amellyel a fenti adatokat meg lehet adni. Figyelj, hogy a tartalom általában hosszabb szöveg, ennek megfelelő űrlap elemet használj!

Az űrlap alá helyezz el egy <main> tag-et, ide fognak kerülni a bejegyzések.

Működés:

Készíts egy megjelenit() függvényt, amely megjeleníti a blog tartalmát a lista alapján!

Minden bejegyzés egy <article> legyen, az alábbi formában:

<main>
  <article style='color: #0000ff'>
    <h2>Test post</h2>
    <p>Test post, please ignore</p>
  </article>
  ...
</main>

Értelemszerűen a felhasználó által megadott tartalommal és színnel.
Az oldal betöltésekor hívd meg a megjelenit() függvényt!

A form elküldésekor:
Ténylegesen ne küldj adatot a szervernek!
Add hozzá a listához az új bejegyzés tartalmát!
Hívd meg a megjelenit() függvényt!
A form tartalmát ürítsd!

Bónusz feladatok (órai munka ötös):

A tartalom ne csak egyetlen bekezdésből álljon!
A "content" változó string-ekből álló lista legyen
Erre a megjelenit() függvényben is figyelj
A form elküldésekor 2x újsor karakter jelezze az új bekezdést, pl.:

***
Első bekezdés.
Ez még mindig az első bekezdés

Ez a második bekezdés.

Harmadik bekezdés.
***

A listát mentsd el localstorage-be (alakíts át JSON-né). Az oldal betöltésekor, ha van benne valami, töltsd vissza!
A visszatöltéskor alakítsd át valódi Bejegyzes példányokká, ne csak TypeScript típuskényszerítést használj!
