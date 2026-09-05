Bajé el repo para ver el contenido real de cada archivo (no solo la tabla del README), porque una división justa depende de cómo está armado cada ejercicio por dentro. Con eso armé una propuesta.

## La idea central

No dividir por Parte (vos Parte 1, otro Parte 2, otro Parte 3), porque ahí cada uno aprende solo un tercio de los conceptos. En cambio: *dividir por ejercicio individual dentro de cada parte, en round-robin, y compensar la asimetría con **revisión de código obligatoria entre los tres* (así lo que no programaste, al menos lo leés y discutís en el PR).

## Parte 1 (ejercicios.ts) — ojo con las dependencias

Es un solo archivo con 20 funciones. La mayoría son independientes, pero *ejercicio 14* (calcularPromedioPorCiudad) reutiliza funciones de otros ejercicios, y *ejercicio 20* (obtenerEstadisticas) reutiliza casi todas. Conclusión: esos dos hay que dejarlos para el final, después de mergear el resto.

Repartiendo los 18 ejercicios restantes intercalados (para que cada uno tenga map/filter básicos, reduce, find/some/every, y los de callback genérico):

| Persona | Ejercicios |
|---|---|
| A | 1, 4, 7, 10, 13, 17 |
| B | 2, 5, 8, 11, 15, 18 |
| C | 3, 6, 9, 12, 16, 19 |

Cada uno se lleva ~2 de map/filter, ~2 de reduce/find, y al menos un transformar/filtrar/buscar/calcularTotal genérico con callback. El ejercicio 14 se lo asignan a quien termine primero (depende de 5 y 13, que están repartidos), y el *20 mejor resolverlo juntos* (15-20 min) una vez que todo lo demás esté mergeado — es el cierre natural de la parte y sirve de repaso grupal.

Como todos tocan el mismo archivo, para evitar conflictos de merge conviene que cada uno trabaje en su propia rama, haga commits chicos, y mergee seguido a una rama de integración (no dejarlo todo para el final).

## Parte 2 y 3 (clases)

Acá el concepto que más se repite es "clase abstracta + polimorfismo" (figuras, empleados, animales, sueldos, notificaciones, personajes — 6 archivos, todos con la misma estructura de fondo). Repartí 2 de esos a cada uno, y el resto de los conceptos "distintos" (encapsulamiento evolutivo, encapsulamiento+validación, herencia simple sin abstracta, interface con múltiples implementaciones) también distribuidos:

| Persona | Archivos | Conceptos |
|---|---|---|
| A | clase-alumno (ej. 8, 9, 10) + figuras (12) + empleados (13) | encapsulamiento evolutivo (attrs → privado+getter/setter → composición con materias) + 2x abstracta/polimorfismo |
| B | cuenta (11) + ej14-vehiculos + ej15-animales | encapsulamiento+validaciones + herencia simple con override + abstracta/polimorfismo |
| C | ej17-pagos + ej18-notificaciones + ej19-personajes | interface con 4 implementaciones (composición, no herencia) + 2x abstracta/polimorfismo |

ej07-tipos-interfaces (type vs interface) convénselo mejor entre los tres en una llamada corta — no tiene tests automáticos, lo corrige el docente a mano, y es una discusión conceptual más que código, así que no vale la pena asignarlo a una sola persona.

ej20-universidad.ts es el integrador de la Parte 3 (130 líneas, el doble que cualquier otro archivo de esa parte, con relación ida-y-vuelta Alumno↔️Materia). Yo lo dejaría para el final también, y lo resolvería en pareja o mob entre los tres — es donde más se junta todo lo anterior (herencia + relación bidireccional + no-duplicar-por-legajo), y es el que más conviene entender entre todos en vez de que lo cierre uno solo.

## Flujo de ramas

- Una rama por persona por bloque de ejercicios: nombre/parte1-bloque, nombre/clase-alumno, nombre/figuras, etc. (no una rama gigante "parte2").
- PR contra main/master (o una rama de integración si el profe pide algo específico) con *al menos 1 aprobación de otro integrante* antes de mergear — esto es lo que realmente cierra la brecha de "no programé esto pero lo entendí".
- Mergear seguido, sobre todo en ejercicios.ts donde los tres tocan el mismo archivo — cuanto más tiempo pasa sin mergear, más conflictos.
- Dejar ej14, ej20 (Parte 1) y ej20-universidad (Parte 3) para el final, después de que el resto esté mergeado, porque dependen de código de los demás.