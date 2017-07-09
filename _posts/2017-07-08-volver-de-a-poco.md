---
layout: post
title:  "Volver de a poco: v0.3"
date:   2017-07-08 23:00:00 -0400
categories: ['es', 'blog']
---
![Bathroom]({{ site.baseurl }}/blog-images/2017-07-bathroom.jpg "Bathroom")

Hola otra vez.

Sigo sin ganas de escribir, ni ganas de documentar. Se me nota, [no he subido nada a Instagram][instagram]. Excepto esta foto, claro. 🙃

Lo que sí les puedo contar es que estoy de mejor ánimo. Algunos engranajes de mi vida se volvieron a mover y, lo más importante, me estoy volviendo a sentir útil para el mundo. Cuando me sienta preparada para contarlo retomaré el formato blog, y es por ello que, mientras sigo juntando fuerzas, presento la versión 0.3 de este sitio y les contaré cómo voy en mi exploración con Jekyll.

Llevo un par de meses con esto en mente, pero ahora que sentí una nueva ola de cambios (todos muy bienvenidos), creo que llegó la hora de hacer las modificaciones necesarias.

Lo que incluyo hasta ahora:

- **Sobre I18n**: Ha estado complicado, lo admito. Las soluciones que he encontrado han sido demasiado complejas, dado que el soporte no es nativo como el de [Rails][rails]. Para no complejizar este blog, usé la funcionalidad de categorías para separar el contenido en inglés del contenido en español. Aún no implemento del todo la separación, pero viene.
- **Turbolinks**: Agregué Turbolinks a las bibliotecas Javascript que estoy usando. Se nota el cambio. Si este sitio ya vuela porque es una página estática generada en Jekyll, alojada en Github Pages, con HTTPS y HTTP/2, ahora carga aún más rápido por un pequeño costo de datos.
- **Cambios al layout del sitio**: Esto es algo que me ha hecho ruido mucho tiempo. Ahora hice de este sitio algo más común, más fácil de leer y también más robusto visualmente. Si uso tan pocos elementos, ¿para qué usar toda la pantalla de un notebook? También hice algunos ajustes para usar más elementos de Bootstrap 4.
- **¡Color!**: Empecé a usar las maravillas de [Sass][sass] y, por fin, pude colorear un poco el sitio. La idea es cambiar un color y que todo el sitio se adapte. A ver si aprovecho el vuelo y me pongo a animar cosas y, en definitiva, usar Javascript. Además, el tema darks tiene problemas. Lo sé. Por ahora, lo desactivaré.

Eso por ahora. Espero volver pronto por aquí... mientras sienta esto más propio, más ganas me darán. ☺


[instagram]: https://instagram.com/sofiazapatazavala
[rails]: http://rubyonrails.org
[sass]: http://sass-lang.com
